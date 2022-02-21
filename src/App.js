import "./App.css";
import Buttonbuilder from "./components/Buttonbuilder";
import { ThemeProvider  } from "@mui/material/styles";
import theme from "./components/theme";
// import HeaderBuilder from "./components/HeaderBuilder";
import ModeChanger from "./components/ModeChanger";
import Accordian from "./components/Accordian";

import NormalFormValidation from "./components/NormalFormValidation";
// import FormicValidation from "./components/FormicValidation";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Buttonbuilder />
        {/* <HeaderBuilder/> */}
      </ThemeProvider>
      <ModeChanger/>
      {/* <FormicValidation/> */}
      <NormalFormValidation/>
      <Accordian/>
      
    </div>
  );
}

export default App;
