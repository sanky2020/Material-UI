import "./App.css";
import Buttonbuilder from "./components/Buttonbuilder";
import { ThemeProvider  } from "@mui/material/styles";
import theme from "./components/theme";
import HeaderBuilder from "./components/HeaderBuilder";
import ModeChanger from "./components/ModeChanger";


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Buttonbuilder />
        <HeaderBuilder/>
      </ThemeProvider>
      <ModeChanger/>
      
      
    </div>
  );
}

export default App;
