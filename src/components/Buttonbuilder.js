import React from 'react'
import { Button } from '@mui/material';
//color of the buttons are overridden with custom colors in theme.js
function Buttonbuilder() {
  
  return (
    <>
    <Button variant='text' fullWidth>Click here</Button>
    <Button variant='contained' disabled >Click here</Button>
    <Button variant='outlined' >Click here</Button>
    </>
  )
}

export default Buttonbuilder;