import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
// CssBaseline used in react to provide initial delegant and better setup to to setup project
const App = () => {
  return (
    <div>
      <CssBaseline>
        <Outlet />
        <h1>This is Medify</h1>
      </CssBaseline>
    </div>
  );
};

export default App;
