import { purple } from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';
// import { orange } from '@mui/material/colors';

// const theme = createTheme({
//     palette: {
//       primary: orange
//       },
      
//     },
//   );

//to create more specific custom color theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#C05D69"
    }
    },
    secondary: purple //we can also specify color object directly from mui
  },
);

export default theme