import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import style from "./style.module.scss";

export const Page = ({ handleShow, handleLogout }) => (
  <AppBar
    position="static"
    sx={{
      backgroundColor: "#fad201",
    }}
  >
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleShow}
      >
        <MenuIcon sx={{ color: "#000" }} />
      </IconButton>
      <div className={style.logoContainer}>
        <img src={logo} title="conciviles" alt="conciviles" />
      </div>
      <Button color="inherit" onClick={handleLogout} sx={{ color: "#000" }}>
        Cerrar Sesión
      </Button>
    </Toolbar>
  </AppBar>
);

Page.propTypes = {
  handleShow: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
