import React, { useEffect, useState  } from 'react';
import axios from 'axios';

import { Button , Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

import {useResultMatrixContext} from "../context/ResultMatrixContext"

const useStyles = makeStyles(theme => ({
    gridContainer:{
        justifyContent: 'center',
        marginTop: 15
    },
    grid: {
        textAlign: 'center'
    },
    text:{
        textAlign: 'center',
        color:'white',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Helvetica'
    },
    button: {
        color: 'black',
        fontWeight: 'bold',
        margintop: 50,
        width: 220
    }
}));

export default function ChooseNonogram() {

    const classes = useStyles();
    const [nonograms,setNanograms] = useState([])

    const [ , setresultMatrix ] = useResultMatrixContext()

    useEffect( () => {
        async function getNonos() {
            try {
                const response = await axios.get('/controller/get_nonograms');
                setNanograms(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        getNonos()
    },[])

    function onClickHandler(pixel_color){
        setresultMatrix(pixel_color)
    }

    return(
        
        <Grid container spacing={2} className={classes.gridContainer}>
            <Grid item xs = {12}className={classes.text}>
                {nonograms.length ? "Escolha um nonograma" : ""  }
            </Grid>
            {nonograms.map( nono => 
            <Grid  item xs = {12}className={classes.grid}>
                <Button 
                    variant='contained' 
                    className={classes.button}
                    onClick={() => onClickHandler(nono.pixel_color)}
                >
                    {nono.name}
                </Button>
            </Grid>)}
        </Grid>
    )
}