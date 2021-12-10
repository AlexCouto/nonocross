import React, {useState} from 'react';
import {makeStyles, Button ,Slide, Dialog , DialogContent, DialogContentText , DialogTitle } from '@material-ui/core';
import exemploNonograma from '../assets/exemploNonograma.png'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
const useStyles = makeStyles(theme => ({
    title: {
        backgroundColor: '#1C1C20',
        color: 'white',
    },
    content:{
        backgroundColor: '#1C1C20',
    },
    paragraph: {
        color: 'white',
    },
    rightButton: {
        borderColor: 'white', 
        color: '#FFFFFF',
        float:'right',
        marginRight: 10,
        marginTop: 6,
    }
}));

export default function Howtoplay(props){

    const classes = useStyles();

    const [ dialogOpen , setDialogOpen] = useState(false);

    const handleClickOpen = () => {
        setDialogOpen(true);
      };
    
      const handleClose = () => {
        setDialogOpen(false);
      };

    return(
        <>
            <Button variant="outlined" className={classes.rightButton}onClick={handleClickOpen}>Como Jogar</Button> 
            <Dialog
                open={dialogOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                >
                <DialogTitle className={classes.title} >{"Como Jogar"}</DialogTitle>
                <DialogContent className={classes.content}>
                    <DialogContentText className={classes.paragraph}>
                        O objetivo do quebra-cabeças é colorir a grade de pixels na tela do jogo da maneira especificada pelas dicas.
                    </DialogContentText> 
                    <DialogContentText className={classes.paragraph}>
                        As dicas especificam blocos contínuos de quadrados de uma mesma cor em uma linha ou coluna.
                    </DialogContentText>
                    <DialogContentText className={classes.paragraph}>
                        Existe pelo menos um quadrado vazio entre dois blocos da mesma cor. Porém, não é nescessario que existam
                        espaço vazios entre blocos de cores diferentes.
                    </DialogContentText>
                    <img src={exemploNonograma} style={{ maxWidth: "100%", maxHeight: "calc(100vh - 64px)" }} alt="exemplo" />
                </DialogContent>
        </Dialog>
      </>
    )
}