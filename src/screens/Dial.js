import { Backspace, PhoneForwarded } from "@mui/icons-material";
import { Avatar, Button, Grid, Modal, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box, style } from "@mui/system";
import React, { useState } from "react";
import './Dial.css';


export default function Dial() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const [display, setDisplay] = useState('');
    const [open, setOpen] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    function add(event) {
        const newDisplayValue = display + event.target.textContent
        setDisplay(newDisplayValue)
    }
    function remove() {
        setDisplay('');
    }

    return <>

        <Box sx={{ textAlign: 'center' }}>
            <Grid container justifyContent={'center'} sx={{ p: 2 }} columns={{ sm: 3 }} >
                <Grid item sm={2}>
                    <b>{display}</b>
                </Grid>
                <Grid item sm={1}>
                    <Button
                        onClick={remove}>
                        <Backspace />
                    </Button>
                </Grid>
            </Grid>

        </Box >
        <Box sx={{ width: 200, margin: 'auto' }}>
        </Box>
        <Grid container
            justifyContent={'center'} spacing={{ sm: 2 }} columns={{ sm: 3 }}>
            {numbers.map((number, i) => (
                <Grid item sm={1} key={i}>
                    <Avatar sx={{ bgcolor: blue[300], margin: 'auto' }}
                        onClick={add}>
                        {number}
                    </Avatar>
                </Grid>
            ))}
        </Grid>
        <Grid item sm={3} sx={{ textAlign: 'center', p: 2 }}>
            <Button variant="contained"
                onClick={handleOpen}
                color="primary"
                startIcon={<PhoneForwarded />}>
            </Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                sx={{  display: 'flex', 
                alignItems: 'center', 
                justifyContent:'center'}}
            >
                <Box sx={{background:'white',
                 p: 2, width: 250}}>
                    <Typography sx={{ display: 'flex',
                     alignItems: 'center', 
                     justifyContent: 'center' }}>
                        <PhoneForwarded sx={{p:2}}/>{ display}
                    </Typography>
                </Box>
            </Modal>
        </Grid>

    </>
}