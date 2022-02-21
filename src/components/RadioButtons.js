import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, {useState} from 'react'

function RadioButtons() {
    const [dynamicValue, setDynamicValue] = useState("css")

    const handleChange = (e)=>{
        setDynamicValue(e.target.value)
    }

  return (
      <FormControl>
      <FormLabel>Select Languages:</FormLabel>
      <RadioGroup row onChange={handleChange} value={dynamicValue}>
        <FormControlLabel label={"HTML"} value={"html"} control={<Radio/>}/>
        <FormControlLabel label={"CSS"} value={"css"} control={<Radio/>}/>
        <FormControlLabel label={"JAVASCRIPT"} value={"javascript"} control={<Radio/>}/>
        <FormControlLabel disabled label={"PYTHON"} value={"python"} control={<Radio/>}/>
    </RadioGroup>
    </FormControl>
  )
}

export default RadioButtons