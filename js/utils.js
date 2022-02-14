const fs = require('fs');
const algosdk = require('algosdk');

const AmericanArtist = "JQ3QOVBYDKSMZA42HB3DCWJWS4L6KR7ZMFUG5IYECEAM4WE3PP74GG6ZNM";
const Muxx = "HGIMASMUMZAI5SCNOYR65TIQM4JWLE736FERTFPCPUNZSQRXK42Q5VMNMQ";
const Jacqueline = "5EP6AOHJBRLL7G2W74Q6NNOZOUCDT6F35ZRXSNTU4UHTHWDZVTDOAYTFAE";
const Lawrence = "JUDGEZENUFSP3UGRQLGN7Q5QE4V3YIYQNZ76SI7Z7IXMKBYMK2JAJE4PWU";
const Jen = "DHTJB4G5KZI3H3AUBFMREUPPLQJMLG65NOREYDLUYUPVKTKJPQM5WF2WNA";
const RonaldVirginia = "3BHZPTXX6Q3GRS7URKAXSO7BT36HI2NLV4SLSUDTSFKMIH56NPZKK7HKUU";
const SarahRara = "WELR5BBI456XXE4GOVX4FK3GE2T2PA3LJ3VTPY7RHPDCL5H3CIXKUWNGS4";
const Lacma = "QQX5Y647GO7VLG33ZQWKEHO2OPXPVCEY7QNNE2AK2AVA4HYFFD4MJNFYFM";
const epochAddress = "VTAUB5LOVTWKXICWEDBO5UG2JNNGEW7ULRB4PQB23DGRKSAXDVPORQNZJE";

async function compileStatelessProgram(client, asaId, appId ){
    var replicantProgram = `#pragma version 4
    txn RekeyTo
    global ZeroAddress
    ==
    txn CloseRemainderTo
    global ZeroAddress
    ==
    &&
    txn  XferAsset
    int  ${asaId}
    ==
    &&
    gtxn 1 ApplicationID
    int ${appId}
    ==
    &&
    return`
    return new Promise(async(resolve,reject)=>{
        try{
            const results = await client.compile(replicantProgram).do();
            resolve(results)
        }catch(error){
           reject(error) 
        }
       
    })
}

async function compileProgram(client, programSource) {
    let encoder = new TextEncoder();
    let programBytes = encoder.encode(programSource);
    let compileResponse = await client.compile(programBytes).do();
    let compiledBytes = new Uint8Array(Buffer.from(compileResponse.result, "base64"));
    return compiledBytes;
}

async function compileApprovalProgram(client){
    const approvalProgramSource = fs.readFileSync("../contracts/stateful.teal");
    const approvalProgram = await compileProgram(client, approvalProgramSource);
    return approvalProgram;
}

async function compileClearProgram(client){
    const clearProgramSource = fs.readFileSync('../contracts/clear.teal', 'utf8');
    const clearProgram = await compileProgram(client, clearProgramSource);
    return clearProgram;
}

async function getCreateAppTxn(sender, params, approvalProgram, clearProgram,
     creatorAdddress, nftEdition, isApEdition, assetId, apArtist, epochAddress,
      AmericanArtist, Muxx, KiyhomRhett,Lawrence, Jen, RonaldVirginia, SarahRara, 
      Lacma, initialPrice ){
    const onComplete = algosdk.OnApplicationComplete.NoOpOC;
    const localInts = 1;
    const localBytes = 1;
    const globalInts = 6;
    const globalBytes = 15;
    const arguments = [algosdk.decodeAddress(creatorAdddress).publicKey, algosdk.encodeUint64(nftEdition), algosdk.encodeUint64(isApEdition),
                       algosdk.encodeUint64(assetId), algosdk.decodeAddress(apArtist).publicKey, algosdk.decodeAddress(epochAddress).publicKey,
                       algosdk.decodeAddress(AmericanArtist).publicKey, algosdk.decodeAddress(Muxx).publicKey, algosdk.decodeAddress(KiyhomRhett).publicKey,
                       algosdk.decodeAddress(Lawrence).publicKey, algosdk.decodeAddress(Jen).publicKey, algosdk.decodeAddress(RonaldVirginia).publicKey,
                       algosdk.decodeAddress(SarahRara).publicKey, algosdk.decodeAddress(Lacma).publicKey, algosdk.encodeUint64(initialPrice) ]
    const txn = algosdk.makeApplicationCreateTxn(sender, params, onComplete, 
        approvalProgram, clearProgram, 
        localInts, localBytes, globalInts, globalBytes, arguments);

    return txn;
}

const waitForConfirmation = async function (algodclient, txId) {
    let response = await algodclient.status().do();
    let lastround = response["last-round"];
    while (true) {
        const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
        if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
            //Got the completed Transaction
            console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
            break;
        }
        lastround++;
        await algodclient.statusAfterBlock(lastround).do();
    }
};


async function getAssetClawbackTxn(sender, params, clawback, note, assetId) {
    note = new Uint8Array(Buffer.from(note,"base64"));
    let ctxn = algosdk.makeAssetConfigTxnWithSuggestedParams(sender, note, 
        assetId, sender, sender, sender, clawback, params);
    return ctxn;
}

async function getOptInTxn(sender, params, note, assetId){
    note = new Uint8Array(Buffer.from(note,"base64"));
    let opttxn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, sender, undefined, undefined,
        0, note, assetId, params);
    return opttxn;
}

async function groupTxns(txns){
    let groupId = algosdk.computeGroupID(txns);
    txns = txns.map((el)=>{
        el.group=groupId;
        return el;
        });
    return txns;
}

async function getPrimarySaleTxn(salePrice, assetBuyer, assetId, appId, client, params, note) {
    let clawback = await compileStatelessProgram(client, assetId, appId);
    clawback = clawback.hash;
    note = new Uint8Array(Buffer.from(note,"base64"));

    const artistPercent = Math.ceil((10/100) * salePrice)
    const lacmaPercent = Math.ceil((20/100) * salePrice);
    const txnFee = 100000;
    const assetSendTxn =  algosdk.makeAssetTransferTxnWithSuggestedParams(clawback, assetBuyer, undefined, epochAddress,
        1, note, assetId, params);  
    const appCallTxn = algosdk.makeApplicationNoOpTxn(assetBuyer, params, appId, [new Uint8Array(Buffer.from('sell_nft'))]);   
    const paymentTxn = algosdk.makePaymentTxnWithSuggestedParams(assetBuyer, epochAddress, artistPercent, undefined, note, params);
    const paymentTxn1 = algosdk.makePaymentTxnWithSuggestedParams(assetBuyer, AmericanArtist, artistPercent, undefined, note, params);
    const paymentTxn2 = algosdk.makePaymentTxnWithSuggestedParams(assetBuyer, Muxx, artistPercent, undefined, note, params);
    const paymentTxn3 = algosdk.makePaymentTxnWithSuggestedParams(assetBuyer, Jacqueline, artistPercent, undefined, note, params);
    const paymentTxn4 = algosdk.makePaymentTxnWithSuggestedParams(assetBuyer, Lawrence, artistPercent, undefined, note, params);
    const paymentTxn5 = algosdk.makePaymentTxnWithSuggestedParams(assetBuyer, Jen, artistPercent, undefined, note, params);
    const paymentTxn6 = algosdk.makePaymentTxnWithSuggestedParams(assetBuyer, RonaldVirginia, artistPercent, undefined, note, params);
    const paymentTxn7 = algosdk.makePaymentTxnWithSuggestedParams(assetBuyer, SarahRara, artistPercent, undefined, note, params);
    const paymentTxn8 = algosdk.makePaymentTxnWithSuggestedParams(assetBuyer, Lacma, lacmaPercent, undefined, note, params);
    const paymentTxn9 = algosdk.makePaymentTxnWithSuggestedParams(assetBuyer, clawback, txnFee, undefined, note, params);

    let txns = [assetSendTxn, appCallTxn, paymentTxn, paymentTxn1, paymentTxn2, paymentTxn3, paymentTxn4, paymentTxn5, paymentTxn6, paymentTxn7, paymentTxn8, paymentTxn9];
    txns = groupTxns(txns);
    return txns;
}
async function fundFromFaucet(address){
    try{
        const token = { 'X-API-Key':'ADRySlL0NK5trzqZGAE3q1xxIqlQdSfk1nbHxTNe'};
        const server = "https://mainnet-algorand.api.purestake.io/ps2"
        const port = "";
        let note = algosdk.encodeObj("showing prefix");
        const client = new algosdk.Algodv2(token, server, port);
        let params = await client.getTransactionParams().do();
        const faucetAccount = algosdk.mnemonicToSecretKey("");
        const paymentTxn = algosdk.makePaymentTxnWithSuggestedParams(faucetAccount.addr, address, 9000000, undefined, note, params);
        let signedTxn = paymentTxn.signTxn(faucetAccount.sk); 
        let sentTxn = await client.sendRawTransaction(signedTxn).do();
        await waitForConfirmation(client, sentTxn.txId)
        return sentTxn;
    }catch(error){
        console.error(error);
    }
}

async function getLsig(client, asaId, appId){
    let compiledStatelessProgram = await compileStatelessProgram(client, asaId, appId);
    let program = new Uint8Array(Buffer.from(compiledStatelessProgram.result,"base64"));
    const lsig = algosdk.makeLogicSig(program);
    return lsig;
}

module.exports = {compileStatelessProgram, compileProgram, compileApprovalProgram,
                 compileClearProgram, getCreateAppTxn, waitForConfirmation,
                getAssetClawbackTxn, getOptInTxn, groupTxns, getPrimarySaleTxn, fundFromFaucet, getLsig};