import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/logo.svg";
import { MyButton } from "../Button";

export const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        paddingX: "3.12rem",
        backgroundColor: 'white'
      }}
    >
      <Toolbar>
        <img src={logo} alt="Logo LQDI" />
        <Box sx={{ flexGrow: 1 }} />
        <MyButton text="Começar" type="primary" width="7.4rem"/>
      </Toolbar>
    </AppBar>
  );
};
