import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export const Page = ({ handleShow, handleLogout }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleShow}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Conciviles
      </Typography>
      <Button color="inherit" onClick={handleLogout}>
        Cerrar Sesión
      </Button>
    </Toolbar>
  </AppBar>
);

Page.propTypes = {
  handleShow: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
