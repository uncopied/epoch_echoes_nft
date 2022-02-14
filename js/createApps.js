const algosdk = require('algosdk');
var {compileStatelessProgram, compileProgram, compileApprovalProgram,
    compileClearProgram, getCreateAppTxn, waitForConfirmation,
   getAssetClawbackTxn, getOptInTxn, groupTxns, getPrimarySaleTxn, fundFromFaucet, getLsig } = require('./utils.js');

//Create apps and get addresses

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


const apAddresses = [AmericanArtist, Muxx, Jacqueline, Lawrence, Jen, RonaldVirginia, SarahRara, epochAddress]

const nftEdition = 1
const isApEdition = 0
const initialPrice = 9494000000;
( async () => {

    try{
        const asas = [603960750, 603964812, 603964911, 603964993, 603965069, 603965212, 603965306, 603965386, 603965457, 603965554, 603965592, 603965647, 603965731];
        const appCreator = algosdk.generateAccount();
        const appCreator1 = algosdk.generateAccount();
        console.log(appCreator.sk);
        console.log(appCreator1.sk);

        await fundFromFaucet(appCreator.addr);
        await fundFromFaucet(appCreator1.addr);

        const token = { 'X-API-Key':'ADRySlL0NK5trzqZGAE3q1xxIqlQdSfk1nbHxTNe'};
        const server = "https://mainnet-algorand.api.purestake.io/ps2"
        const port = "";
        const client = new algosdk.Algodv2(token, server, port);
        const assetCreatorAddress = epochAddress;
        let params = await client.getTransactionParams().do();
        const approvalProgram = await compileApprovalProgram(client);
        const clearProgram = await compileClearProgram(client);
        // epochAddress = assetCreatorAddress;
        console.log(appCreator.addr);
        let apTxns = [];
        let nonApTxns = []
        let createAppTxns = await Promise.all (asas.map( async (el, index) => {
            let res =  await getCreateAppTxn( index <= 4 ? appCreator.addr : appCreator1.addr, params, approvalProgram, clearProgram,
                assetCreatorAddress, index +1 , index <= 4 ? 0 : 1, el, index <= 4 ? ZeroAddress: apAddresses[index - 5], epochAddress, AmericanArtist,
                Muxx, Jacqueline, Lawrence, Jen, RonaldVirginia, SarahRara, Lacma, initialPrice);
                if(index <= 4){
                    nonApTxns.push(res);
                }else{
                    apTxns.push(res);
                }

                return res;
        }));

         
        // console.log(apTxns);
        // console.log(nonApTxns);
        apTxns = await groupTxns(apTxns);
        nonApTxns = await groupTxns(nonApTxns);
        let signedApTxns = apTxns.map(el =>{
           return el.signTxn(appCreator1.sk);
        });
        let signedNonApTxns = nonApTxns.map(el =>{
            return el.signTxn(appCreator.sk);
         });
    
      let nonApTxt1 =  await client.sendRawTransaction(signedNonApTxns).do();
      let apTxt1 =  await client.sendRawTransaction(signedApTxns).do();
    
    console.log(nonApTxt1);
    console.log(apTxt1);
    }catch(error){
        console.error(error)
    }
 

    
})()

