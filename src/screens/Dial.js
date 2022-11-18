import { Avatar, Grid } from "@mui/material";
import { green } from "@mui/material/colors";
import { display } from "@mui/system";
import { useState } from "react";
import './Dial.css';


export default function Dial() {
const numbers = [1,2,3,4,5,6,7,8,9,0];
const [display,setDisplay]=useState('');
function add(event){
    const newDisplayValue=display + event.target.textContent
    setDisplay(newDisplayValue)
}


    return <>

       <h1>Dialog screen</h1>
       <b>{display}</b>
       <Grid container spacing={{sm:2}} columns={{sm:3}}>
        {numbers.map((number,i)=>(
        <Grid item sm={1} key={i}>
         <Avatar sx={{ bgcolor: green[500] }}
         onClick={add}>
            {number}
            </Avatar>
         </Grid>
         ))}
       </Grid>

    </>
}