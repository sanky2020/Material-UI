import React from 'react'
import { Button } from '@mui/material';
import SaveIcon from "@mui/icons-material/Save";
import SaveAltIcon from '@mui/icons-material/SaveAlt';

//color of the buttons are overridden with custom colors in theme.js
function Buttonbuilder() {
  
  return (
    <>
    <Button variant='text' fullWidth>Click here</Button>
    <Button variant='contained' color='secondary' startIcon={<SaveIcon/>} endIcon={<SaveAltIcon/>} style={{fontSize:24}}>Click here</Button>
    <Button variant='contained' disabled >Click here</Button>0
    <Button variant='outlined' >Click here</Button>
    </>
  )
}

export default Buttonbuilder;