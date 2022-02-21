import { Accordion, AccordionDetails, AccordionSummary, Typography,  } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"



function Accordian() {
  return (
    <div className='center'>
    <Typography style={{marginTop:50}} variant='h4'>Accordian</Typography>
        <Accordion sx={{width:"50%", margin:"0 auto"}} style={{margin: "10px auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          
        >
          <Typography style={{width:"100%"}}>Accordion 1</Typography>
          <Typography sx={{width:'50%', marginLeft:50}}>Summary 1</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{width:"50%", margin:"0 auto"}} style={{margin: "10px auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          
        >
          <Typography style={{width:"100%"}}>Accordion 2</Typography>
          <Typography sx={{width:'50%', marginLeft:50}}>Summary 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{width:"50%", margin:"0 auto"}} disabled style={{margin: "10px auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          
        >
          <Typography style={{width:"100%"}}>Disabled Accordion</Typography>
          <Typography sx={{width:'60%', marginLeft:50 }}>Summary 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{width:"50%", margin:"0 auto"}} style={{margin: "10px auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          
        >
          <Typography style={{width:"100%"}}>Accordion 4</Typography>
          <Typography sx={{width:'50%', marginLeft:50}}>Summary 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Accordian