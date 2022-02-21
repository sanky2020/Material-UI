import { Accordion, AccordionDetails, AccordionSummary, Typography,  } from '@mui/material'
import React, {useState} from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"



function Accordian() {

  const [expandAccord, setExpandAccord] = useState(false)

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
      <Typography variant='h6'>Controlled Accordian</Typography>
      <Accordion sx={{width:"50%", margin:"0 auto"}} style={{margin: "10px auto"}} expanded={expandAccord === "accord5"} onChange={()=> setExpandAccord("accord5") }>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          
        >
          <Typography style={{width:"100%"}}>Accordion 5</Typography>
          <Typography sx={{width:'50%', marginLeft:50}}>Summary 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{width:"50%", margin:"0 auto"}} style={{margin: "10px auto"}} expanded={expandAccord === "accord6"} onChange={()=> setExpandAccord("accord6") }>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          
        >
          <Typography style={{width:"100%"}}>Accordion 6</Typography>
          <Typography sx={{width:'50%', marginLeft:50}}>Summary 6</Typography>
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