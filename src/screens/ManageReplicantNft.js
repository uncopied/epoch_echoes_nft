import React, { useState } from 'react';
import replicantImage from '../assets/images/replicantImage.jpeg'
import {Button,Typography,CircularProgress,LinearProgress} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import algosdk from 'algosdk';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { formatJsonRpcRequest } from "@json-rpc-tools/utils";
import { Buffer } from 'buffer';
import Home from './Home';
import {createAsa,clawbackAsa,connectToWallet,isConnected,replicantAsaInfo,getAsaToClawbackInfo, compileClearProgram, compileReplicantProgram, updateApplication} from '../utils/utils';


function ReplicantNftCreation(){
    let signerAddress = []
    let epochAddress = "VTAUB5LOVTWKXICWEDBO5UG2JNNGEW7ULRB4PQB23DGRKSAXDVPORQNZJE";
    const token = { 'X-API-Key':'QIbtJ2qVvz8IUKIJiprmm2pRf2yutg14eOS98d15'};
    const server = "https://mainnet-algorand.api.purestake.io/ps2";
    const baseServer = "https://mainnet-algorand.api.purestake.io/idx2";
    const port = '';
    const client = new algosdk.Algodv2(token, server, port);
    let indexerClient = new algosdk.Indexer(token, baseServer, port);
    const classes = useStyles();
    const [loading,setLoading] = useState(false);
    const [dialogVisible, controlDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("");
    const [dialogDescription, setDialogDescription] = useState("")
    return (<div className = {classes.root}>
                <Grid container spacing = {2}>
                    {/* <Paper elevation = {3}><CircularProgress color="primary" className={classes.progress}/></Paper> */}
                    <Grid item xs = {12}>
                        <Paper elevation = {3} className = {classes.paper}>
                            { loading? <CircularProgress color="secondary" className={classes.progress}/>: null}
                            <Dialog
                            open={dialogVisible}
                            onClose={() => controlDialog(false)}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">

                            <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">{dialogDescription}</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={() => controlDialog(false)} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={() => controlDialog(false)} color="primary" autoFocus>
                                Ok
                            </Button>
                            </DialogActions>
                        </Dialog>
                        <h1 className ={classes.itemTitle}>Create and Configure Replicant NFTS</h1>
                            <img src = {replicantImage} className = {classes.replicantImage}/>
                            <h1 className ={classes.itemTitle}>Kindly click on the respective buttons to update the Replicant Nfts</h1>
                        </Paper>
                    </Grid>
                    <Grid item xs = {6} className = {classes.centerGridItem}>
                    <Button onClick = {update16OfTheNft} variant ="contained" color="primary"  className = {classes.itemButton}>
                            Update 16 of the Replicant Nfts 
                    </Button>
                    </Grid>
                    <Grid item xs = {6}  className = {classes.centerGridItem}>
                    <Button onClick = {updateTheRemaining14OfTheNft} variant ="contained" color="primary"  className = {classes.itemButton}>
                            Update the remaining 14 of the Replicant Nfts
                    </Button>
                    </Grid>
                    
                </Grid>
            </div>);

     async function update16OfTheNft(){
        let myalgoconnect = new MyAlgoConnect();
        if(signerAddress.length == 0){
            setLoading(true)
            try{
                signerAddress = await isConnected(signerAddress,myalgoconnect);
            }catch(error){
                setLoading(false);
                controlDialog(true);
                setDialogTitle("Error");
                setDialogDescription(JSON.stringify(error));
                return;
            }
        }
        // if(signerAddress[0] != epochAddress){
        //     alert(`The address ${signerAddress[0].address} does not match the epoch address`);
        //     console.log(signerAddress[0])
        //     return;
        // }
        epochAddress = signerAddress[0].address;
        let compiledApprovalProgram = await compileReplicantProgram(client);
        let compiledClearProgram = await compileClearProgram(client);

        console.log(compiledApprovalProgram);
        console.log(compiledClearProgram)

        let approvalProgram =  new Uint8Array(Buffer.from(compiledApprovalProgram.result,"base64"));
        let clearProgram =  new Uint8Array(Buffer.from(compiledClearProgram.result,"base64"));

        console.log(approvalProgram);
        console.log(clearProgram);
        let params = {};
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        let appIds = [387031352, 387031353, 387031354, 387031355, 387031356, 387031357, 387031358, 387031359, 387031360, 387031361, 387031362, 387031363, 387031364, 387031365, 387031366, 387034557, 387034558, 387034559, 387034560, 387034561, 387034562, 387161797, 387166820, 387169663, 387171644, 387175171, 387176902, 387179258, 387181363, 387185953 ];
        
        let updateAppTxns =  [];
        appIds.map((el, index) => {
            if(index < 16){
            let   updateAppTxn =   updateApplication(el, approvalProgram,clearProgram,params,epochAddress);
            updateAppTxns.push(updateAppTxn);
            }
        })

        console.log(updateAppTxns);
        let groupId = algosdk.computeGroupID(updateAppTxns);
        updateAppTxns = updateAppTxns.map((el) => {
                 el.group=groupId;
                 return el;
                 });
         let signedTxns = {};
         try{
             signedTxns =  await myalgoconnect.signTransaction(updateAppTxns);
         }catch(error){
             console.error("Error ocurred ", error);
             alert(error)
             setLoading(false);
         }
         let blobs = signedTxns.map((el,index)=>{
             return el.blob
         });
         console.log(blobs);
        
         let txTest={};
         try{
             txTest=(await client.sendRawTransaction(blobs).do());
             console.log(txTest);
             setLoading(false);
             controlDialog(true);
             setDialogTitle("Transaction Success");
             setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
           }catch(error){
             console.error("Error ocurred ", error);
             controlDialog(true);
             setDialogTitle("Error");
             setDialogDescription(JSON.stringify(error));
             setLoading(false);
             return;
             }     
         
      
     }

     async function updateTheRemaining14OfTheNft(){
        let myalgoconnect = new MyAlgoConnect();
        if(signerAddress.length == 0){
            setLoading(true)
            try{
                signerAddress = await isConnected(signerAddress,myalgoconnect);
            }catch(error){
                setLoading(false);
                controlDialog(true);
                setDialogTitle("Error");
                setDialogDescription(JSON.stringify(error));
                return;
            }
        }
        // if(signerAddress[0] != epochAddress){
        //     alert(`The address ${signerAddress[0].address} does not match the epoch address`);
        //     console.log(signerAddress[0])
        //     return;
        // }
        epochAddress = signerAddress[0].address;
        let compiledApprovalProgram = await compileReplicantProgram(client);
        let compiledClearProgram = await compileClearProgram(client);

        console.log(compiledApprovalProgram);
        console.log(compiledClearProgram)

        let approvalProgram =  new Uint8Array(Buffer.from(compiledApprovalProgram.result,"base64"));
        let clearProgram =  new Uint8Array(Buffer.from(compiledClearProgram.result,"base64"));

        console.log(approvalProgram);
        console.log(clearProgram);
        let params = {};
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        let appIds = [387031352, 387031353, 387031354, 387031355, 387031356, 387031357, 387031358, 387031359, 387031360, 387031361, 387031362, 387031363, 387031364, 387031365, 387031366, 387034557, 387034558, 387034559, 387034560, 387034561, 387034562, 387161797, 387166820, 387169663, 387171644, 387175171, 387176902, 387179258, 387181363, 387185953 ];
        
        let updateAppTxns =  [];
        appIds.map((el, index) => {
            if(index >= 16 && index < 30){
            let   updateAppTxn =   updateApplication(el, approvalProgram,clearProgram,params,epochAddress);
            updateAppTxns.push(updateAppTxn);
            }
        })

        console.log(updateAppTxns);
        let groupId = algosdk.computeGroupID(updateAppTxns);
        updateAppTxns = updateAppTxns.map((el) => {
                 el.group=groupId;
                 return el;
                 });
         let signedTxns = {};
         try{
             signedTxns =  await myalgoconnect.signTransaction(updateAppTxns);
         }catch(error){
             console.error("Error ocurred ", error);
             alert(error)
             setLoading(false);
         }
         let blobs = signedTxns.map((el,index)=>{
             return el.blob
         });
         console.log(blobs);
        
         let txTest={};
         try{
             txTest=(await client.sendRawTransaction(blobs).do());
             console.log(txTest);
             setLoading(false);
             controlDialog(true);
             setDialogTitle("Transaction Success");
             setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
           }catch(error){
             console.error("Error ocurred ", error);
             controlDialog(true);
             setDialogTitle("Error");
             setDialogDescription(JSON.stringify(error));
             setLoading(false);
             return;
             }     
         
      
     }

  
    async function createRemaining14OfReplicantNFTs(){
        let myalgoconnect = new MyAlgoConnect();
        if(signerAddress.length == 0){
            setLoading(true)
            try{
                signerAddress = await isConnected(signerAddress,myalgoconnect);
            }catch(error){
                setLoading(false);
                controlDialog(true);
                setDialogTitle("Error");
                setDialogDescription(JSON.stringify(error));
                return;
            }
        }
        // if(signerAddress[0] != epochAddress){
        //     alert(`The address ${signerAddress[0].address} does not match the epoch address`);
        //     console.log(signerAddress[0])
        //     return;
        // }
        epochAddress = signerAddress[0].address;
        let params = {}
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        console.log(params);
        let txnsToSign = [];
        replicantAsaInfo.map((el,index) => {
            if(index >= 16 && index < 30){
                txnsToSign.push(createAsa(params, epochAddress, el.name, el.unit ,el.decimals, el.total, el.url, epochAddress, epochAddress, epochAddress, true, el.metadataHash, el.note))
            }  
        })
       console.log(txnsToSign.length);
       console.log(txnsToSign);

       let groupId = algosdk.computeGroupID(txnsToSign);
       txnsToSign = txnsToSign.map((el) => {
                el.group=groupId;
                return el;
                });
        let signedTxns = {};
        try{
            signedTxns =  await myalgoconnect.signTransaction(txnsToSign);
        }catch(error){
            console.error("Error ocurred ", error);
            alert(error)
            setLoading(false);
        }
        let blobs = signedTxns.map((el,index)=>{
            return el.blob
        })
        console.log(blobs);
       
        let txTest={};
        try{
            txTest=(await client.sendRawTransaction(blobs).do());
            console.log(txTest);
            setLoading(false);
            controlDialog(true);
            setDialogTitle("Transaction Success");
            setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
          }catch(error){
            console.error("Error ocurred ", error);
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
            return;
            }    
    }

    async function clawback16OfReplicantNFTs(){
        let myalgoconnect = new MyAlgoConnect();
        if(signerAddress.length == 0){
            setLoading(true)
            try{
                signerAddress = await isConnected(signerAddress,myalgoconnect);
            }catch(error){
                setLoading(false);
                controlDialog(true);
                setDialogTitle("Error");
                setDialogDescription(JSON.stringify(error));
                return;
            }
        }
        // if(signerAddress[0] != epochAddress){
        //     alert(`The address ${signerAddress[0].address} does not match the epoch address`);
        //     console.log(signerAddress[0])
        //     return;
        // }
        epochAddress = signerAddress[0].address;
        let params = {}
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        let txnsToSign = getAsaToClawbackInfo(params,epochAddress,epochAddress,epochAddress,epochAddress,epochAddress).map((el,index) => {
            if(index < 16){
                return el;
            }
        });
        console.log(txnsToSign.length);
        console.log(txnsToSign);
 
        let groupId = algosdk.computeGroupID(txnsToSign);
        txnsToSign = txnsToSign.map((el) => {
                 el.group=groupId;
                 return el;
                 });
         let signedTxns = {};
         try{
             signedTxns =  await myalgoconnect.signTransaction(txnsToSign);
         }catch(error){
             console.error("Error ocurred ", error);
             alert(error)
             setLoading(false);
         }
         let blobs = signedTxns.map((el,index)=>{
             return el.blob
         })
         console.log(blobs);
        
         let txTest={};
         try{
             txTest=(await client.sendRawTransaction(blobs).do());
             console.log(txTest);
             setLoading(false);
             controlDialog(true);
             setDialogTitle("Transaction Success");
             setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
           }catch(error){
             console.error("Error ocurred ", error);
             controlDialog(true);
             setDialogTitle("Error");
             setDialogDescription(JSON.stringify(error));
             setLoading(false);
             return;
             }    

    }
   async function clawbackRemaining14OfReplicantNFTs(){
        let myalgoconnect = new MyAlgoConnect();
        if(signerAddress.length == 0){
            setLoading(true)
            try{
                signerAddress = await isConnected(signerAddress,myalgoconnect);
            }catch(error){
                setLoading(false);
                controlDialog(true);
                setDialogTitle("Error");
                setDialogDescription(JSON.stringify(error));
                return;
            }
        }
        // if(signerAddress[0] != epochAddress){
        //     alert(`The address ${signerAddress[0].address} does not match the epoch address`);
        //     console.log(signerAddress[0])
        //     return;
        // }
        epochAddress = signerAddress[0].address;
        let params = {}
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        let txnsToSign = getAsaToClawbackInfo(params,epochAddress,epochAddress,epochAddress,epochAddress,epochAddress).map((el,index) => {
            if(index >= 16 && index < 30){
                return el;
            }
        });
        console.log(txnsToSign.length);
        console.log(txnsToSign);
 
        let groupId = algosdk.computeGroupID(txnsToSign);
        txnsToSign = txnsToSign.map((el) => {
                 el.group=groupId;
                 return el;
                 });
         let signedTxns = {};
         try{
             signedTxns =  await myalgoconnect.signTransaction(txnsToSign);
         }catch(error){
             console.error("Error ocurred ", error);
             alert(error)
             setLoading(false);
         }
         let blobs = signedTxns.map((el,index)=>{
             return el.blob
         })
         console.log(blobs);
        
         let txTest={};
         try{
             txTest=(await client.sendRawTransaction(blobs).do());
             console.log(txTest);
             setLoading(false);
             controlDialog(true);
             setDialogTitle("Transaction Success");
             setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
           }catch(error){
             console.error("Error ocurred ", error);
             controlDialog(true);
             setDialogTitle("Error");
             setDialogDescription(JSON.stringify(error));
             setLoading(false);
             return;
             }    
    }

    async function create16OfReplicantNftsUsingWalletConnect(){
        setLoading(true)
        let txns = [];
        let params = {}
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        console.log(params)
        const connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org", // Required
            qrcodeModal: QRCodeModal,
          });

          // Check if connection is already established
            if (!connector.connected) {
                // create new session
                connector.createSession();
            }
            
            // Subscribe to connection events
            connector.on("connect", async(error, payload) => {
                if (error) {
                throw error;
                }
            try {
                // Get provided accounts
                const { accounts } = payload.params[0];
                console.log(accounts,"connect");
                replicantAsaInfo.map((el,index) => {
                    if(index < 16){
                        txns.push(algosdk.makeAssetCreateTxnWithSuggestedParams(accounts[0], el.note,
                            el.total, el.decimals, true, accounts[0], accounts[0], accounts[0],
                            accounts[0], el.unit, el.name, el.url, el.metadataHash, params));
                    }  
                });

                console.log(txns,"txns");


                let groupId = algosdk.computeGroupID(txns);
                txns = txns.map((el) => {
                         el.group=groupId;
                         return el;
                         });

                const txnsToSign = txns.map(txn => {
                    const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString("base64");
                    return {
                      txn: encodedTxn,
                      message: 'Description of transaction being signed',
                    };
                  });
                  console.log(txnsToSign,"txnsTosIGN")
                  const requestParams = [txnsToSign];
                  console.log(requestParams);
                  const request = formatJsonRpcRequest("algo_signTxn", requestParams);
                  console.log(request,"request");
                 const result = await connector.sendCustomRequest(request);
                  console.log(result,"Result");
                  const decodedResult = result.map(element => {
                    return element ? new Uint8Array(Buffer.from(element, "base64")) : null;
                  });

                  console.log(decodedResult,"decoded result");
                  let txTest={};
                  connector.killSession();
                      txTest=(await client.sendRawTransaction(decodedResult).do());
                      console.log(txTest);
                      setLoading(false);
                      controlDialog(true);
                      setDialogTitle("Transaction Success");
                      setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
                }catch(error){
                    connector.killSession();
                    console.error(error);
                    console.error("Error ocurred ", error);
                      controlDialog(true);
                      setDialogTitle("Error");
                      setDialogDescription(JSON.stringify(error));
                      setLoading(false);
                  
                }
              
            });

            connector.on("session_update", (error, payload) => {
                if (error) {
                  throw error;
                }
              
                // Get updated accounts 
                const { accounts } = payload.params[0];
                console.log(accounts,"session_update");
              });

            connector.on("disconnect", (error, payload) => {
                if (error) {
                  throw error;
                }
                console.log(payload,"disconnect")
              });
              
            //   connector.killSession();
    }


    async function create14OfReplicantNftsUsingWalletConnect(){
        setLoading(true);
        let txns = [];
        let params = {}
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        console.log(params)
        const connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org", // Required
            qrcodeModal: QRCodeModal,
          });

          // Check if connection is already established
            if (!connector.connected) {
                // create new session
                connector.createSession();
            }
            
            // Subscribe to connection events
            connector.on("connect", async(error, payload) => {
                if (error) {
                throw error;
                }
            try {
                // Get provided accounts
                const { accounts } = payload.params[0];
                console.log(accounts,"connect");
                replicantAsaInfo.map((el,index) => {
                    if(index >= 16 && index < 30){
                        txns.push(algosdk.makeAssetCreateTxnWithSuggestedParams(accounts[0], el.note,
                            el.total, el.decimals, true, accounts[0], accounts[0], accounts[0],
                            accounts[0], el.unit, el.name, el.url, el.metadataHash, params));
                    }  
                });

                console.log(txns,"txns");


                let groupId = algosdk.computeGroupID(txns);
                txns = txns.map((el) => {
                         el.group=groupId;
                         return el;
                         });

                const txnsToSign = txns.map(txn => {
                    const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString("base64");
                    return {
                      txn: encodedTxn,
                      message: 'Description of transaction being signed',
                    };
                  });
                  console.log(txnsToSign,"txnsTosIGN")
                  const requestParams = [txnsToSign];
                  console.log(requestParams);
                  const request = formatJsonRpcRequest("algo_signTxn", requestParams);
                  console.log(request,"request");
                 const result = await connector.sendCustomRequest(request);
                  console.log(result,"Result");
                  const decodedResult = result.map(element => {
                    return element ? new Uint8Array(Buffer.from(element, "base64")) : null;
                  });

                  console.log(decodedResult,"decoded result");
                  let txTest={};
                  connector.killSession();
                      txTest=(await client.sendRawTransaction(decodedResult).do());
                      console.log(txTest);
                      setLoading(false);
                      controlDialog(true);
                      setDialogTitle("Transaction Success");
                      setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
                }catch(error){
                    connector.killSession();
                    console.error(error);
                    console.error("Error ocurred ", error);
                      controlDialog(true);
                      setDialogTitle("Error");
                      setDialogDescription(JSON.stringify(error));
                      setLoading(false);
                  
                }
               
            });

            connector.on("session_update", (error, payload) => {
                if (error) {
                  throw error;
                }
              
                // Get updated accounts 
                const { accounts } = payload.params[0];
                console.log(accounts,"session_update");
              });

            connector.on("disconnect", (error, payload) => {
                if (error) {
                  throw error;
                }
                console.log(payload,"disconnect")
              });
              
            //   connector.killSession();
    }

    async function clawback14OfReplicantNftsUsingWalletConnect(){
        setLoading(true);
        let txns = [];
        let params = {}
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        console.log(params)
        const connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org", // Required
            qrcodeModal: QRCodeModal,
          });

          // Check if connection is already established
            if (!connector.connected) {
                // create new session
                connector.createSession();
            }
            
            // Subscribe to connection events
            connector.on("connect", async(error, payload) => {
                if (error) {
                throw error;
                }
            try {
                // Get provided accounts
                const { accounts } = payload.params[0];
                console.log(accounts,"connect");
                getAsaToClawbackInfo(params,accounts[0],accounts[0],accounts[0],accounts[0],accounts[0]).map((el,index) => {
                    if(index >= 16 && index < 30){
                        txns.push(algosdk.makeAssetConfigTxnWithSuggestedParams(accounts[0], el.note, 
                            el.assetIndex, accounts[0], accounts[0], accounts[0], el.assetClawback, params));
                    }  
                });

                console.log(txns,"txns");


                let groupId = algosdk.computeGroupID(txns);
                txns = txns.map((el) => {
                         el.group=groupId;
                         return el;
                         });

                const txnsToSign = txns.map(txn => {
                    const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString("base64");
                    return {
                      txn: encodedTxn,
                      message: 'Description of transaction being signed',
                    };
                  });
                  console.log(txnsToSign,"txnsTosIGN")
                  const requestParams = [txnsToSign];
                  console.log(requestParams);
                  const request = formatJsonRpcRequest("algo_signTxn", requestParams);
                  console.log(request,"request");
                 const result = await connector.sendCustomRequest(request);
                  console.log(result,"Result");
                  const decodedResult = result.map(element => {
                    return element ? new Uint8Array(Buffer.from(element, "base64")) : null;
                  });

                  console.log(decodedResult,"decoded result");
                  let txTest={};
                  connector.killSession();
                      txTest=(await client.sendRawTransaction(decodedResult).do());
                      console.log(txTest);
                      setLoading(false);
                      controlDialog(true);
                      setDialogTitle("Transaction Success");
                      setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
                }catch(error){
                    connector.killSession();
                    console.error(error);
                    console.error("Error ocurred ", error);
                      controlDialog(true);
                      setDialogTitle("Error");
                      setDialogDescription(JSON.stringify(error));
                      setLoading(false);
                  
                }
               
            });

            connector.on("session_update", (error, payload) => {
                if (error) {
                  throw error;
                }
              
                // Get updated accounts 
                const { accounts } = payload.params[0];
                console.log(accounts,"session_update");
              });

            connector.on("disconnect", (error, payload) => {
                if (error) {
                  throw error;
                }
                console.log(payload,"disconnect")
              });
              
            //   connector.killSession();
    }




    async function clawback16OfReplicantNftsUsingWalletConnect(){
        setLoading(true);
        let txns = [];
        let params = {}
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        console.log(params)
        const connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org", // Required
            qrcodeModal: QRCodeModal,
          });

          // Check if connection is already established
            if (!connector.connected) {
                // create new session
                connector.createSession();
            }
            
            // Subscribe to connection events
            connector.on("connect", async(error, payload) => {
                if (error) {
                throw error;
                }
            try {
                // Get provided accounts
                const { accounts } = payload.params[0];
                console.log(accounts,"connect");
                getAsaToClawbackInfo(params,accounts[0],accounts[0],accounts[0],accounts[0],accounts[0]).map((el,index) => {
                    if(index < 16){
                        txns.push(algosdk.makeAssetConfigTxnWithSuggestedParams(accounts[0], el.note, 
                            el.assetIndex, accounts[0], accounts[0], accounts[0], el.assetClawback, params));
                    }  
                });

                console.log(txns,"txns");


                let groupId = algosdk.computeGroupID(txns);
                txns = txns.map((el) => {
                         el.group=groupId;
                         return el;
                         });

                const txnsToSign = txns.map(txn => {
                    const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString("base64");
                    return {
                      txn: encodedTxn,
                      message: 'Description of transaction being signed',
                    };
                  });
                  console.log(txnsToSign,"txnsTosIGN")
                  const requestParams = [txnsToSign];
                  console.log(requestParams);
                  const request = formatJsonRpcRequest("algo_signTxn", requestParams);
                  console.log(request,"request");
                 const result = await connector.sendCustomRequest(request);
                  console.log(result,"Result");
                  const decodedResult = result.map(element => {
                    return element ? new Uint8Array(Buffer.from(element, "base64")) : null;
                  });

                  console.log(decodedResult,"decoded result");
                  let txTest={};
                  connector.killSession();
                      txTest=(await client.sendRawTransaction(decodedResult).do());
                      console.log(txTest);
                      setLoading(false);
                      controlDialog(true);
                      setDialogTitle("Transaction Success");
                      setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
                }catch(error){
                    connector.killSession();
                    console.error(error);
                    console.error("Error ocurred ", error);
                      controlDialog(true);
                      setDialogTitle("Error");
                      setDialogDescription(JSON.stringify(error));
                      setLoading(false);
                  
                }
               
            });

            connector.on("session_update", (error, payload) => {
                if (error) {
                  throw error;
                }
              
                // Get updated accounts 
                const { accounts } = payload.params[0];
                console.log(accounts,"session_update");
              });

            connector.on("disconnect", (error, payload) => {
                if (error) {
                  throw error;
                }
                console.log(payload,"disconnect")
                // connector.killSession();
              });
              
            //   connector.killSession();
    }
}
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:20,
      marginLeft:15,
      marginRight:15
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:390,
      display:"flex",
      flexDirection:"column",
      alignItems:'flex-start',
      position:'relative'
    },
    typohraphy:{
        fontSize:"1",
        color:"#000",
        textAlign:'start',
        marginTop:"15px"
    },
    horDiv:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    buttonDiv:{
        // border:"solid 2px #000",
        width: "100%",
        marginTop:"20px"
    },
    progress:{
        display:'flex',
        position:'absolute',
        top:"50%",
        left:'50%'

    },
    replicantImage: {
        width: '80%',
        height: '340px',
        borderRadius:'5px',
        marginTop: '0px',
        border: '5px',
        textAlign: 'center',
        borderColor: '#ff0000',
        marginLeft:'auto',
        marginRight:'auto'
    },
    itemTitle:{
        borderColor: '#ff0000',
        width:'80%',
        fontSize: '16px',
        marginTop: '8px',
        textAlign: 'center',
        color:theme.palette.primary.main,
        marginLeft:'auto',
        marginRight:'auto'
    },
    centerGridItem:{
        textAlign: 'center',
    },
    itemButton:{
        marginLeft:'auto',
        marginRight:'auto',
        width:'60%'
    }
  }));


export default ReplicantNftCreation;



