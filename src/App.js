import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer/Footer";
import AppDownload from "./components/Sections/AppDownload/AppDownload";
// CssBaseline used in react to provide initial delegant and better setup to to setup project
const App = () => {
  return (
    <div>
      <CssBaseline>
        <Outlet />
        <h1>This is Medify</h1>
        <AppDownload/>
        <Footer/>
      </CssBaseline>
    </div>
  );
};

export default App;
