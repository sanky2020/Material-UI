import { Button, createTheme, Paper, Switch, ThemeProvider, Typography } from '@mui/material';
import React,{useState} from 'react'
import TableData from "./TableData";

function ModeChanger() {
    const[darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette:{
            mode: darkMode ? "dark" : "light",
        }
    })

  return (
    <ThemeProvider theme={theme}>
        <Paper elevation={12} square>
            <Typography variant='h2'>This is a ModeChanger</Typography>
            <Button onClick={()=> setDarkMode(!darkMode)}>Click me to Toggle Mode</Button>
            <Switch checked={darkMode} onChange={()=> setDarkMode(!darkMode)} />
        
        <Typography variant="h5">IPL Table</Typography>
        <TableData/>
        </Paper>
    </ThemeProvider>
  )
}

export default ModeChanger