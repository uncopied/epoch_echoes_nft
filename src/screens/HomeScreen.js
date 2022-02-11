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
import { Buffer } from 'buffer';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route, useHistory} from 'react-router-dom';




function HomeScreen(){
    const classes = useStyles();
    let history = useHistory();
    return( <div  className ={classes.root}>
``              <Grid container spacing ={3}>
                    {/* <Grid item xs = {4}>
                        <Paper elevation = {3} className = {classes.paper}>
                            <img src = {replicantImage} className = {classes.replicantImage}/>
                            <h1 className ={classes.itemTitle}>Replicant Nft</h1>
                            <Button variant ="contained" onClick = {moveToNftCreationScreen} color="primary"  className = {classes.itemButton}>
                                Create Replicant Nft 
                            </Button>
                        </Paper>
                    </Grid> */}
                    <Grid item xs = {4}>
                        <Paper elevation = {3} className = {classes.paper}>
                            <img src = {replicantImage} className = {classes.replicantImage}/>
                            <h1 className ={classes.itemTitle}>Replicant Nft</h1>
                            <Button variant ="contained" onClick = {moveToNftManageScreen} color="primary"  className = {classes.itemButton}>
                                Manage Replicant Nft 
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
        </div>)

    function moveToNftCreationScreen(){
        history.push('/replicant-creation')
    }

    function moveToNftManageScreen(){
        history.push('/replicant-manage')
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
      height:340,
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
        height: 'auto',
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
    itemButton:{
        marginLeft:'auto',
        marginRight:'auto'
    }
  }));

  export default HomeScreen;