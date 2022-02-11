import React, { useState } from 'react';
import {Button,Typography,CircularProgress,LinearProgress} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import algosdk from 'algosdk';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Buffer } from 'buffer';


function ApSales(){
let neilBerloufa= ["Neil Beloufa","YGCKHAG4H3WDUQSAY5J4MK5ZIWLGIF7W6ZYO5EZY3OGZJB5FWGDNBX7BUA"];
let sarahLosena=["Sarah Rosalena Brady","IKEPBSW7RSPN4TXYC3AV6FOOGZ6PJLTJKEB2PVCTPSRFNB3CANZ5JJRZPY"];
let aliceBucknell=["Alice Bucknell","2FSBHE3XAXJHBFFUABPPBBU3ZL4PQAHI6BB3KTHJKL5IZCC7BG4LR6GRT4"];
let juanCoveli=["Juan Covelli","UONII5HLZPHGDCBCETVTFGX42I5MJWEYKM5NUIFQW3A47CSDIHZN74AYUA"];
let alexandra=["Alexandra Koumantaki","EMMEIOWLZPMUCXSLGB5QOR33HCQZAQT6KSRGCXHBO54W7LNLQCJXSGJ4IQ"];
let amandaRoss=["Amanda Ross Ho","UNH443RNFL4NWFCP5AI3N34C6IK6SWDEPZRLFKXGWYTXBZ5BTLJJLGWLRQ"];
let hiradSab=["Hirad Sab","QPNWTRS3FLRUICYYLVPQV7QZIJPBNM2EV6S5BF6JOFQL7DGCLU5HKQSUK4"];

let epochClawedBackAddress = "CZJCFCUDUL5GU5IIIADMA4XBDTJEG6JZG5MBYKBTP4NQCFTOT4PDSDN6QU"
let epochBase64Address = "AyADkE4GgtaLdTMAIDIDEjMBIDIDEhAzAiAyAxIQMwAJMgMSEDMBCTIDEhAzAgkyAxIQMwAVMgMSEDMBFTIDEhAzAhUyAxIQMQEiDhAzAhAjEhAzAhgkEhA=";

let[P1Loading,setP1Loading] = useState(false);
let[P2Loading,setP2Loading] = useState(false);
let[P3Loading,setP3Loading] = useState(false);
let[P4Loading,setP4Loading] = useState(false);
let[P5Loading,setP5Loading] = useState(false);
let[P6Loading,setP6Loading] = useState(false);
let[P7Loading,setP7Loading] = useState(false);

let[D1Visible,setD1Visible] = useState(false);
let[D1Text,setD1Text] = useState("D1 Text");
let[D1Title,setD1Title]= useState("D1 Title");
let handleCloseD1=()=>{
    setD1Visible(false)
}


let[D2Visible,setD2Visible] = useState(false);
let[D2Text,setD2Text] = useState("D1 Text");
let[D2Title,setD2Title]= useState("D1 Title");
let handleCloseD2=()=>{
    setD2Visible(false)
}


let[D3Visible,setD3Visible] = useState(false);
let[D3Text,setD3Text] = useState("D1 Text");
let[D3Title,setD3Title]= useState("D1 Title");
let handleCloseD3=()=>{
    setD3Visible(false)
}


let[D4Visible,setD4Visible] = useState(false);
let[D4Text,setD4Text] = useState("D1 Text");
let[D4Title,setD4Title]= useState("D1 Title");
let handleCloseD4=()=>{
    setD4Visible(false)
}


let[D5Visible,setD5Visible] = useState(false);
let[D5Text,setD5Text] = useState("D1 Text");
let[D5Title,setD5Title]= useState("D1 Title");
let handleCloseD5=()=>{
    setD5Visible(false)
}


let[D6Visible,setD6Visible] = useState(false);
let[D6Text,setD6Text] = useState("D1 Text");
let[D6Title,setD6Title]= useState("D1 Title");
let handleCloseD6=()=>{
    setD6Visible(false)
}

let[D7Visible,setD7Visible] = useState(false);
let[D7Text,setD7Text] = useState("D1 Text");
let[D7Title,setD7Title]= useState("D1 Title");
let handleCloseD7=()=>{
    setD7Visible(false)
}








let program = new Uint8Array(Buffer.from(epochBase64Address,"base64"))
const lsig = algosdk.makeLogicSig(program);   
// let [addresses, setAddresses] =useState([]);
let addresses =[];
let myalgoconnect = new MyAlgoConnect();
let assetIds = [245558023,245558024,245558025,245558026,245558027,245558028,245558029,245558030]
let applicationId = 245558018;
const token = { 'X-API-Key':'ADRySlL0NK5trzqZGAE3q1xxIqlQdSfk1nbHxTNe'};
const server = "https://mainnet-algorand.api.purestake.io/ps2";
const baseServer = "https://mainnet-algorand.api.purestake.io/idx2";
const port = '';
const client = new algosdk.Algodv2(token, server, port);
let indexerClient = new algosdk.Indexer(token, baseServer, port);

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs ={4}>
                <Paper  elevation={3} className={classes.paper}>
                        <Dialog
                            open={D1Visible}
                            onClose={handleCloseD1}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">

                            <DialogTitle id="alert-dialog-title">{D1Title}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">{D1Text}</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleCloseD1} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleCloseD1} color="primary" autoFocus>
                                Ok
                            </Button>
                            </DialogActions>
                        </Dialog>

                    {P1Loading? <CircularProgress color="primary" className={classes.progress}/>:null}
                    <Typography className={classes.typohraphy}>Name: {neilBerloufa[0]} </Typography>
                    <div className={classes.horDiv}>
                    <Typography variant="subtitle1" className={classes.typohraphy}>Address: </Typography>
                    <Typography variant="subtitle1" className={classes.typohraphy} style={{ wordWrap: "break-word",width:"480px" }}>{neilBerloufa[1]}</Typography>
                    </div>
                    <Typography className={classes.typohraphy}>Edition: Epoch 1/8</Typography>

                    {/* <Typography variant="subtitle1" className={classes.typohraphy}>Received : true</Typography> */}
                    <div className={classes.buttonDiv}>
                        <Button variant ="contained" color = "primary" onClick={sendEdition1}>Send Epoch edition 1</Button>
                    </div>
                </Paper>
                </Grid>
            
                <Grid item xs ={4}>
                <Paper  elevation={3} className={classes.paper}>
                <Dialog
                            open={D2Visible}
                            onClose={handleCloseD2}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">

                            <DialogTitle id="alert-dialog-title">{D2Title}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">{D2Text}</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleCloseD2} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleCloseD2} color="primary" autoFocus>
                                Ok
                            </Button>
                            </DialogActions>
                        </Dialog>

                    {P2Loading? <CircularProgress color="primary" className={classes.progress}/>:null}
                {P2Loading? <CircularProgress color="primary" className={classes.progress}/>:null}
                <Typography className={classes.typohraphy}>Name: {sarahLosena[0]} </Typography>
                    <div className={classes.horDiv}>
                    <Typography variant="subtitle1" className={classes.typohraphy}>Address: </Typography>
                    <Typography variant="subtitle1" className={classes.typohraphy} style={{ wordWrap: "break-word",width:"480px" }}>{sarahLosena[1]}</Typography>
                    </div>
                    <Typography className={classes.typohraphy}>Edition: Epoch 2/8</Typography>

                    {/* <Typography variant="subtitle1" className={classes.typohraphy}>Received : true</Typography> */}
                    <div className={classes.buttonDiv}>
                        <Button variant ="contained" color = "primary" onClick={sendEdition2}>Send Epoch edition 2</Button>
                    </div>
                </Paper>
                </Grid>

                
                <Grid item xs ={4}>
                <Paper  elevation={3} className={classes.paper}>
                <Dialog
                            open={D3Visible}
                            onClose={handleCloseD3}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">

                            <DialogTitle id="alert-dialog-title">{D3Title}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">{D3Text}</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleCloseD3} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleCloseD3} color="primary" autoFocus>
                                Ok
                            </Button>
                            </DialogActions>
                        </Dialog>

                
                {P3Loading? <CircularProgress color="primary" className={classes.progress}/>:null}
                <Typography className={classes.typohraphy}>Name: {aliceBucknell[0]} </Typography>
                    <div className={classes.horDiv}>
                    <Typography variant="subtitle1" className={classes.typohraphy}>Address: </Typography>
                    <Typography variant="subtitle1" className={classes.typohraphy} style={{ wordWrap: "break-word",width:"480px" }}>{aliceBucknell[1]}</Typography>
                    </div>
                    <Typography className={classes.typohraphy}>Edition: Epoch 3/8</Typography>

                    {/* <Typography variant="subtitle1" className={classes.typohraphy}>Received : true</Typography> */}
                    <div className={classes.buttonDiv}>
                        <Button variant ="contained" color = "primary" onClick={sendEdition3}>Send Epoch edition 3</Button>
                    </div>
                </Paper>
                </Grid>
               
                <Grid item xs ={4}>
                <Paper  elevation={3} className={classes.paper}>
                    <Dialog
                                open={D4Visible}
                                onClose={handleCloseD4}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description">

                                <DialogTitle id="alert-dialog-title">{D4Title}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">{D4Text}</DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleCloseD4} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleCloseD4} color="primary" autoFocus>
                                    Ok
                                </Button>
                                </DialogActions>
                            </Dialog>


                {P4Loading? <CircularProgress color="primary" className={classes.progress}/>:null}
                    <Typography className={classes.typohraphy}>Name: {juanCoveli[0]} </Typography>
                    <div className={classes.horDiv}>
                    <Typography variant="subtitle1" className={classes.typohraphy}>Address: </Typography>
                    <Typography variant="subtitle1" className={classes.typohraphy} style={{ wordWrap: "break-word",width:"480px" }}>{juanCoveli[1]}</Typography>
                    </div>
                    <Typography className={classes.typohraphy}>Edition: Epoch 4/8</Typography>

                    {/* <Typography variant="subtitle1" className={classes.typohraphy}>Received : true</Typography> */}
                    <div className={classes.buttonDiv}>
                        <Button variant ="contained" color = "primary" onClick={sendEdition4}>Send Epoch edition 4</Button>
                    </div>
                </Paper>
                </Grid>
            
                <Grid item xs ={4}>
                <Paper  elevation={3} className={classes.paper}>

                <Dialog
                            open={D5Visible}
                            onClose={handleCloseD5}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">

                            <DialogTitle id="alert-dialog-title">{D5Title}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">{D5Text}</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleCloseD5} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleCloseD5} color="primary" autoFocus>
                                Ok
                            </Button>
                            </DialogActions>
                        </Dialog>

                {P5Loading? <CircularProgress color="primary" className={classes.progress}/>:null}
                <Typography className={classes.typohraphy}>Name:{alexandra[0]} </Typography>
                    <div className={classes.horDiv}>
                    <Typography variant="subtitle1" className={classes.typohraphy}>Address: </Typography>
                    <Typography variant="subtitle1" className={classes.typohraphy} style={{ wordWrap: "break-word",width:"480px" }}>{alexandra[1]}</Typography>
                    </div>
                    <Typography className={classes.typohraphy}>Edition: Epoch 5/8</Typography>

                    {/* <Typography variant="subtitle1" className={classes.typohraphy}>Received : true</Typography> */}
                    <div className={classes.buttonDiv}>
                        <Button variant ="contained" color = "primary"  onClick={sendEdition5}>Send Epoch edition 5</Button>
                    </div>
                </Paper>
                </Grid>

                
                <Grid item xs ={4}>
                <Paper  elevation={3} className={classes.paper}>
                <Dialog
                                open={D6Visible}
                                onClose={handleCloseD6}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description">

                                <DialogTitle id="alert-dialog-title">{D6Title}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">{D6Text}</DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleCloseD6} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleCloseD6} color="primary" autoFocus>
                                    Ok
                                </Button>
                                </DialogActions>
                            </Dialog>
                {P6Loading? <CircularProgress color="primary" className={classes.progress}/>:null}
                <Typography className={classes.typohraphy}>Name: {amandaRoss[0]} </Typography>
                    <div className={classes.horDiv}>
                    <Typography variant="subtitle1" className={classes.typohraphy}>Address: </Typography>
                    <Typography inline variant="subtitle1" className={classes.typohraphy} style={{ wordWrap: "break-word",width:"480px" }}>{amandaRoss[1]}</Typography>
                    </div>
                    <Typography className={classes.typohraphy}>Edition: Epoch 6/8</Typography>

                    {/* <Typography variant="subtitle1" className={classes.typohraphy}>Received : true</Typography> */}
                    <div className={classes.buttonDiv}>
                        <Button variant ="contained" color = "primary"  onClick={sendEdition6}>Send Epoch edition 6</Button>
                    </div>
                </Paper>
                </Grid>

                <Grid item xs ={4}>
                <Paper  elevation={3} className={classes.paper}>
                <Dialog
                                open={D7Visible}
                                onClose={handleCloseD7}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description">

                                <DialogTitle id="alert-dialog-title">{D7Title}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">{D7Text}</DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleCloseD7} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleCloseD7} color="primary" autoFocus>
                                    Ok
                                </Button>
                                </DialogActions>
                            </Dialog>
                {P7Loading? <CircularProgress color="primary" className={classes.progress}/>:null}
                <Typography className={classes.typohraphy}>Name: {hiradSab[0]} </Typography>
                    <div className={classes.horDiv}>
                    <Typography variant="subtitle1" className={classes.typohraphy}>Address:  </Typography>
                    <Typography variant="subtitle1" className={classes.typohraphy}  style={{ wordWrap: "break-word",width:"480px" }}>{hiradSab[1]}</Typography>
                    </div>
                    <Typography className={classes.typohraphy}>Edition: Epoch 7/8</Typography>

                    {/* <Typography variant="subtitle1" className={classes.typohraphy}>Received : true</Typography> */}
                    <div className={classes.buttonDiv}>
                        <Button variant ="contained" color = "primary" onClick={sendEdition7}>Send Epoch edition 7</Button>
                    </div>
                </Paper>
                </Grid>

            </Grid>
        </div>
    );

    async function connectToWallet(){
        return new Promise(async(resolve,reject)=>{
            let addresses;
            try{
                addresses = await myalgoconnect.connect();
                resolve(addresses)
            }catch(error){
                reject(error);
            }       
        });
     
    }
    async function isConnected(){
        return new Promise(async(resolve,reject)=>{
            if(addresses.length==0){
                try{
                   let addr =  await connectToWallet()
                   addresses= addr;
                   console.log(addr);
                   resolve(true);
                }catch(error){
                 console.error(error);
                  reject(false);    
                } 
             }else{
                  resolve(true);
             }
        })
       
    }

    async function sendEdition1(){
        setP1Loading(true);
        let boolVal = await isConnected();
        if(!boolVal){
            setP1Loading(false);
            return;
        }
        console.log(addresses);
    
        let params = await client.getTransactionParams().do();
        let appCallTxn =  makeApplicationCallTransaction(addresses[0].address,applicationId,[],params);
        let zeroSendTxn = sendFunds(addresses[0].address,neilBerloufa[1],0,params);
        let assetSendTxn = sendAsset(assetIds[0],addresses[0].address,neilBerloufa[1],1,client,params);

        console.log(appCallTxn);
        console.log(zeroSendTxn);
        console.log(assetSendTxn);

        let txns = [assetSendTxn,zeroSendTxn,appCallTxn];
        let groupId = algosdk.computeGroupID(txns);
                txns = txns.map((el)=>{
                el.group=groupId;
                return el;
                });

    let signedTxn0 = algosdk.signLogicSigTransaction(txns[0], lsig)
    let signedTxns ={};
    try{
        signedTxns =  await myalgoconnect.signTransaction([txns[1], txns[2]]);
    }catch(error){
        console.error("Error ocurred ", error);
        // alert(error)
        setD1Title("An Error occurred")
        setD1Text(JSON.stringify(error));
        setD1Visible(true);
        setP1Loading(false)
    }
   
    let blobs = signedTxns.map((el,index)=>{
        return el.blob
    })

    let signedTest = [signedTxn0.blob,...blobs];
    console.log(signedTest)
    let txTest={};
    try{
        txTest=(await client.sendRawTransaction(signedTest).do());
        setP1Loading(false);
        if(txTest.txId!=null&&txTest.txId!=undefined){
            setD1Title("Success");
            setD1Text(`Transaction id: ${txTest.txId}`);
        }
      }catch(error){
        console.error("Error ocurred ", error);
                // alert(error)
                setD1Title("An Error occurred")
                setD1Text(JSON.stringify(error));
                setD1Visible(true);
                setP1Loading(false)
                return;
        }
    }


    async function sendEdition2(){
        setP2Loading(true);
        let boolVal = await isConnected();
        if(!boolVal){
            setP2Loading(false);
            return;
        }
        console.log(addresses);
    
        let params = await client.getTransactionParams().do();
        let appCallTxn =  makeApplicationCallTransaction(addresses[0].address,applicationId,[],params);
        let zeroSendTxn = sendFunds(addresses[0].address,sarahLosena[1],0,params);
        let assetSendTxn = sendAsset(assetIds[1],addresses[0].address,sarahLosena[1],1,client,params);

        console.log(appCallTxn);
        console.log(zeroSendTxn);
        console.log(assetSendTxn);

        let txns = [assetSendTxn,zeroSendTxn,appCallTxn];
        let groupId = algosdk.computeGroupID(txns);
                txns = txns.map((el)=>{
                el.group=groupId;
                return el;
                });

    let signedTxn0 = algosdk.signLogicSigTransaction(txns[0], lsig)
    let signedTxns ={};
    try{
        signedTxns =  await myalgoconnect.signTransaction([txns[1], txns[2]]);
    }catch(error){
        console.error("Error ocurred ", error);
        // alert(error)
        setD2Title("An Error occurred")
        setD2Text(JSON.stringify(error));
        setD2Visible(true);
        setP2Loading(false)
    }
   
    let blobs = signedTxns.map((el,index)=>{
        return el.blob
    })

    let signedTest = [signedTxn0.blob,...blobs];
    console.log(signedTest)
    let txTest={};
    try{
        txTest=(await client.sendRawTransaction(signedTest).do());
        setP2Loading(false);
        if(txTest.txId!=null&&txTest.txId!=undefined){
            setD2Title("Success");
            setD2Text(`Transaction id: ${txTest.txId}`);
        }
      }catch(error){
        console.error("Error ocurred ", error);
                // alert(error)
                setD2Title("An Error occurred")
                setD2Text(JSON.stringify(error));
                setD2Visible(true);
                setP2Loading(false);
                return;
        }

    }


    async function sendEdition3(){
        setP3Loading(true);
        let boolVal = await isConnected();
        if(!boolVal){
            setP3Loading(false);
            return;
        }
        console.log(addresses);
    
        let params = await client.getTransactionParams().do();
        let appCallTxn =  makeApplicationCallTransaction(addresses[0].address,applicationId,[],params);
        let zeroSendTxn = sendFunds(addresses[0].address,aliceBucknell[1],0,params);
        let assetSendTxn = sendAsset(assetIds[2],addresses[0].address,aliceBucknell[1],1,client,params);

        console.log(appCallTxn);
        console.log(zeroSendTxn);
        console.log(assetSendTxn);

        let txns = [assetSendTxn,zeroSendTxn,appCallTxn];
        let groupId = algosdk.computeGroupID(txns);
                txns = txns.map((el)=>{
                el.group=groupId;
                return el;
                });

    let signedTxn0 = algosdk.signLogicSigTransaction(txns[0], lsig)
    let signedTxns ={};
    try{
        signedTxns =  await myalgoconnect.signTransaction([txns[1], txns[2]]);
    }catch(error){
        console.error("Error ocurred ", error);
        // alert(error)
        setD3Title("An Error occurred")
        setD3Text(JSON.stringify(error));
        setD3Visible(true);
        setP3Loading(false)
    }
   
    let blobs = signedTxns.map((el,index)=>{
        return el.blob
    })

    let signedTest = [signedTxn0.blob,...blobs];
    console.log(signedTest)
    let txTest={};
    try{
        txTest=(await client.sendRawTransaction(signedTest).do());
        setP3Loading(false);
        if(txTest.txId!=null&&txTest.txId!=undefined){
            setD3Title("Success");
            setD3Text(`Transaction id: ${txTest.txId}`);
        }
      }catch(error){
        console.error("Error ocurred ", error);
                // alert(error)
                setD3Title("An Error occurred")
                setD3Text(JSON.stringify(error));
                setD3Visible(true);
                setP3Loading(false);
                return;
        }

    }
    async function sendEdition4(){
        setP4Loading(true);
        let boolVal = await isConnected();
        if(!boolVal){
            setP4Loading(false);
            return;
        }
        console.log(addresses);
    
        let params = await client.getTransactionParams().do();
        let appCallTxn =  makeApplicationCallTransaction(addresses[0].address,applicationId,[],params);
        let zeroSendTxn = sendFunds(addresses[0].address,juanCoveli[1],0,params);
        let assetSendTxn = sendAsset(assetIds[3],addresses[0].address,juanCoveli[1],1,client,params);

        console.log(appCallTxn);
        console.log(zeroSendTxn);
        console.log(assetSendTxn);

        let txns = [assetSendTxn,zeroSendTxn,appCallTxn];
        let groupId = algosdk.computeGroupID(txns);
                txns = txns.map((el)=>{
                el.group=groupId;
                return el;
                });

    let signedTxn0 = algosdk.signLogicSigTransaction(txns[0], lsig)
    let signedTxns ={};
    try{
        signedTxns =  await myalgoconnect.signTransaction([txns[1], txns[2]]);
    }catch(error){
        console.error("Error ocurred ", error);
        // alert(error)
        setD4Title("An Error occurred")
        setD4Text(JSON.stringify(error));
        setD4Visible(true);
        setP4Loading(false)
    }
   
    let blobs = signedTxns.map((el,index)=>{
        return el.blob
    })

    let signedTest = [signedTxn0.blob,...blobs];
    console.log(signedTest)
    let txTest={};
    try{
        txTest=(await client.sendRawTransaction(signedTest).do());
        setP4Loading(false);
        if(txTest.txId!=null&&txTest.txId!=undefined){
            setD4Title("Success");
            setD4Text(`Transaction id: ${txTest.txId}`);
        }
      }catch(error){
        console.error("Error ocurred ", error);
                // alert(error)
                setD4Title("An Error occurred")
                setD4Text(JSON.stringify(error));
                setD4Visible(true);
                setP4Loading(false);
                return;
        }


    }
    async function sendEdition5(){
        setP5Loading(true);
        let boolVal = await isConnected();
        if(!boolVal){
            setP5Loading(false);
            return;
        }
        console.log(addresses);
    
        let params = await client.getTransactionParams().do();
        let appCallTxn =  makeApplicationCallTransaction(addresses[0].address,applicationId,[],params);
        let zeroSendTxn = sendFunds(addresses[0].address,alexandra[1],0,params);
        let assetSendTxn = sendAsset(assetIds[4],addresses[0].address,alexandra[1],1,client,params);

        console.log(appCallTxn);
        console.log(zeroSendTxn);
        console.log(assetSendTxn);

        let txns = [assetSendTxn,zeroSendTxn,appCallTxn];
        let groupId = algosdk.computeGroupID(txns);
                txns = txns.map((el)=>{
                el.group=groupId;
                return el;
                });

    let signedTxn0 = algosdk.signLogicSigTransaction(txns[0], lsig)
    let signedTxns ={};
    try{
        signedTxns =  await myalgoconnect.signTransaction([txns[1], txns[2]]);
    }catch(error){
        console.error("Error ocurred ", error);
        // alert(error)
        setD5Title("An Error occurred")
        setD5Text(JSON.stringify(error));
        setD5Visible(true);
        setP5Loading(false)
    }
   
    let blobs = signedTxns.map((el,index)=>{
        return el.blob
    })

    let signedTest = [signedTxn0.blob,...blobs];
    console.log(signedTest)
    let txTest={};
    try{
        txTest=(await client.sendRawTransaction(signedTest).do());
        setP5Loading(false);
        if(txTest.txId!=null&&txTest.txId!=undefined){
            setD5Title("Success");
            setD5Text(`Transaction id: ${txTest.txId}`);
        }
      }catch(error){
        console.error("Error ocurred ", error);
                // alert(error)
                setD5Title("An Error occurred")
                setD5Text(JSON.stringify(error));
                setD5Visible(true);
                setP5Loading(false);
                return;
        }
    }


    async function sendEdition6(){
        setP6Loading(true);
        let boolVal = await isConnected();
        if(!boolVal){
            setP6Loading(false);
            return;
        }
        console.log(addresses);
    
        let params = await client.getTransactionParams().do();
        let appCallTxn =  makeApplicationCallTransaction(addresses[0].address,applicationId,[],params);
        let zeroSendTxn = sendFunds(addresses[0].address,amandaRoss[1],0,params);
        let assetSendTxn = sendAsset(assetIds[5],addresses[0].address,amandaRoss[1],1,client,params);

        console.log(appCallTxn);
        console.log(zeroSendTxn);
        console.log(assetSendTxn);

        let txns = [assetSendTxn,zeroSendTxn,appCallTxn];
        let groupId = algosdk.computeGroupID(txns);
                txns = txns.map((el)=>{
                el.group=groupId;
                return el;
                });

    let signedTxn0 = algosdk.signLogicSigTransaction(txns[0], lsig)
    let signedTxns ={};
    try{
        signedTxns =  await myalgoconnect.signTransaction([txns[1], txns[2]]);
    }catch(error){
        console.error("Error ocurred ", error);
        // alert(error)
        setD6Title("An Error occurred")
        setD6Text(JSON.stringify(error));
        setD6Visible(true);
        setP6Loading(false)
    }
   
    let blobs = signedTxns.map((el,index)=>{
        return el.blob
    })

    let signedTest = [signedTxn0.blob,...blobs];
    console.log(signedTest)
    let txTest={};
    try{
        txTest=(await client.sendRawTransaction(signedTest).do());
        setP6Loading(false);
        if(txTest.txId!=null&&txTest.txId!=undefined){
            setD6Title("Success");
            setD6Text(`Transaction id: ${txTest.txId}`);
        }
      }catch(error){
        console.error("Error ocurred ", error);
                // alert(error)
                setD6Title("An Error occurred")
                setD6Text(JSON.stringify(error));
                setD6Visible(true);
                setP6Loading(false);
                return;
        }
    }





    async function sendEdition7(){
        setP7Loading(true);
        let boolVal = await isConnected();
        if(!boolVal){
            setP7Loading(false);
            return;
        }
        console.log(addresses);
    
        let params = await client.getTransactionParams().do();
        let appCallTxn =  makeApplicationCallTransaction(addresses[0].address,applicationId,[],params);
        let zeroSendTxn = sendFunds(addresses[0].address,hiradSab[1],0,params);
        let assetSendTxn = sendAsset(assetIds[6],addresses[0].address,hiradSab[1],1,client,params);

        console.log(appCallTxn);
        console.log(zeroSendTxn);
        console.log(assetSendTxn);

        let txns = [assetSendTxn,zeroSendTxn,appCallTxn];
        let groupId = algosdk.computeGroupID(txns);
                txns = txns.map((el)=>{
                el.group=groupId;
                return el;
                });

    let signedTxn0 = algosdk.signLogicSigTransaction(txns[0], lsig)
    let signedTxns ={};
    try{
        signedTxns =  await myalgoconnect.signTransaction([txns[1], txns[2]]);
    }catch(error){
        console.error("Error ocurred ", error);
        // alert(error)
        setD7Title("An Error occurred")
        setD7Text(JSON.stringify(error));
        setD7Visible(true);
        setP7Loading(false)
    }
   
    let blobs = signedTxns.map((el,index)=>{
        return el.blob
    })

    let signedTest = [signedTxn0.blob,...blobs];
    console.log(signedTest)
    let txTest={};
    try{
        txTest=(await client.sendRawTransaction(signedTest).do());
        setP7Loading(false);
        if(txTest.txId!=null&&txTest.txId!=undefined){
            setD7Title("Success");
            setD7Text(`Transaction id: ${txTest.txId}`);
        }
      }catch(error){
        console.error("Error ocurred ", error);
                // alert(error)
                setD7Title("An Error occurred")
                setD7Text(JSON.stringify(error));
                setD7Visible(true);
                setP7Loading(false);
                return;
        }
    }

    function makeApplicationCallTransaction(sender,appId,appArgs,params){
        let txn = {
            type: "appl",
            appOnComplete: 0,
            from: sender,
            appIndex: appId,
            fee: 1000,
            flatFee: true,
            ...params
    };
        return txn;
    }

    function sendFunds(sender,receiver,amount,params){
        let    txn = {
              ...params,
              fee: 1000,
              flatFee: true,
              type: 'pay',
              from: sender,
              to:  receiver,
              amount: amount,
              note: new Uint8Array(Buffer.from('“FREEPORT” – featuring Neïl Beloufa, Sarah Rosalena Brady, Alice Bucknell, Juan Covelli, Alexandra Koumantaki, Amanda Ross-Ho, Hirad Sab", 2001'))
      };
       
          return txn;
      }

      function sendAsset(assetID,revocationTarget,recipient, units,algodClient,params){   

       let closeRemainderTo = undefined;
        //Amount of the asset to transfer
       let  amount = units;

        // signing and sending "txn" will send "amount" assets from "sender" to "recipient"
        let xtxn = algosdk.makeAssetTransferTxnWithSuggestedParams(epochClawedBackAddress, recipient, closeRemainderTo, revocationTarget,
                amount,  new Uint8Array(Buffer.from("FREEPORT” – featuring Neïl Beloufa, Sarah Rosalena Brady, Alice Bucknell, Juan Covelli, Alexandra Koumantaki, Amanda Ross-Ho, Hirad Sab")), assetID, params);
        let program = new Uint8Array(Buffer.from(epochBase64Address,"base64"))
        const lsig = algosdk.makeLogicSig(program);   
       console.log(lsig.address());
        // let rawSignedTxn = algosdk.signLogicSigTransactionObject(xtxn, lsig)
        return xtxn;
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
      height:300,
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

    }
  }));
export default ApSales;
