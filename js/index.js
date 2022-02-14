const algosdk = require('algosdk');
var {compileStatelessProgram, compileProgram, compileApprovalProgram,
    compileClearProgram, getCreateAppTxn, waitForConfirmation,
   getAssetClawbackTxn, getOptInTxn, groupTxns, getPrimarySaleTxn, fundFromFaucet, getLsig } = require('./utils.js');

const AmericanArtist = "JQ3QOVBYDKSMZA42HB3DCWJWS4L6KR7ZMFUG5IYECEAM4WE3PP74GG6ZNM";
const Muxx = "HGIMASMUMZAI5SCNOYR65TIQM4JWLE736FERTFPCPUNZSQRXK42Q5VMNMQ";
const Jacqueline = "5EP6AOHJBRLL7G2W74Q6NNOZOUCDT6F35ZRXSNTU4UHTHWDZVTDOAYTFAE";
const Lawrence = "JUDGEZENUFSP3UGRQLGN7Q5QE4V3YIYQNZ76SI7Z7IXMKBYMK2JAJE4PWU";
const Jen = "DHTJB4G5KZI3H3AUBFMREUPPLQJMLG65NOREYDLUYUPVKTKJPQM5WF2WNA";
const RonaldVirginia = "3BHZPTXX6Q3GRS7URKAXSO7BT36HI2NLV4SLSUDTSFKMIH56NPZKK7HKUU";
const SarahRara = "WELR5BBI456XXE4GOVX4FK3GE2T2PA3LJ3VTPY7RHPDCL5H3CIXKUWNGS4";
const Lacma = "QQX5Y647GO7VLG33ZQWKEHO2OPXPVCEY7QNNE2AK2AVA4HYFFD4MJNFYFM";
let epochAddress = "VTAUB5LOVTWKXICWEDBO5UG2JNNGEW7ULRB4PQB23DGRKSAXDVPORQNZJE";
const ZeroAddress = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ";
const nftEdition = 1
const isApEdition = 0
const initialPrice = 9494;
(async () => {
    try{
        const token = { 'X-API-Key':'ADRySlL0NK5trzqZGAE3q1xxIqlQdSfk1nbHxTNe'};
        const server = "https://testnet-algorand.api.purestake.io/ps2"
        const port = "";
        const client = new algosdk.Algodv2(token, server, port);
        let params = await client.getTransactionParams().do();

        let assetId = 70775149;
        const assetCreator =  algosdk.mnemonicToSecretKey( "tunnel key rocket artist response dish glass people neglect engine apple ripple orchard arch era electric glow cousin token adjust shuffle horn citizen abstract topic");
        const assetBuyerAccount = algosdk.mnemonicToSecretKey( "reward rhythm legend sausage knee lizard garden update retreat trouble travel soap effort pill resource floor fix rain antenna bind history polar network ability suit");
        epochAddress = assetCreator.addr;

        const approvalProgram = await compileApprovalProgram(client);
        const clearProgram = await compileClearProgram(client);

        //Create App
        const createAppTxn = await getCreateAppTxn(assetCreator.addr, params, approvalProgram, clearProgram,
                assetCreator.addr, nftEdition, isApEdition, assetId, ZeroAddress, epochAddress, AmericanArtist,
                Muxx, Jacqueline, Lawrence, Jen, RonaldVirginia, SarahRara, Lacma, initialPrice);

        const signedCreateAppTxn = createAppTxn.signTxn(assetCreator.sk);
        const sentCreateAppTxn = await client.sendRawTransaction(signedCreateAppTxn).do();
        await waitForConfirmation(client, sentCreateAppTxn.txId);
        let ptx = await client.pendingTransactionInformation(sentCreateAppTxn.txId).do();
        const appId =  ptx['application-index'];
        console.log(appId, "AppId gotten");
        
        // Clawback Asset
        let clawback = await compileStatelessProgram(client, assetId, appId);
        clawback = clawback.hash;
        const clawbackTxn = await getAssetClawbackTxn(assetCreator.addr, params, clawback, "Clawback asset", assetId)
        const signedClawbackTxn = clawbackTxn.signTxn(assetCreator.sk);
        const sentClawbackTxn = await client.sendRawTransaction(signedClawbackTxn).do();
        await waitForConfirmation(client, sentClawbackTxn.txId);

        await fundFromFaucet(clawback);
        
        //Opt in new buyer
        const optInTxn = await getOptInTxn(assetBuyerAccount.addr, params, "opt in txn", assetId);
        const signedOptInTxn =  optInTxn.signTxn(assetBuyerAccount.sk);
        const sentSignedTxn  =  await client.sendRawTransaction(signedOptInTxn).do();
        await waitForConfirmation(client, sentSignedTxn.txId);


        //Perform primary sale txn
        const primarySaleTxns = await getPrimarySaleTxn(initialPrice, assetBuyerAccount.addr, assetId, appId, client, params, "Primary sale");
        const lsig = await getLsig(client, assetId, appId);
        let rawSignedTxns = primarySaleTxns.map((el, index) =>{
            if(index == 0 ){
                return algosdk.signLogicSigTransaction(el, lsig).blob;
            }else{
            return el.signTxn(assetBuyerAccount.sk);  
            }
        });
        let sentPrimarySaleTxn = await client.sendRawTransaction(rawSignedTxns).do();
        console.log(sentPrimarySaleTxn);
    }catch(error){
        console.error(error);
    }



})();