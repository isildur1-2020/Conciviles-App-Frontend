import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../assets/logo.png";
import style from "./style.module.scss";

export const Page = ({ showDrawer, handleClose }) => (
  <Drawer
    anchor="left"
    open={showDrawer}
    onClose={handleClose}
    className={style.Drawer}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={logo}
        tite="conciviles"
        alt="conciviles"
        className={style.Drawer__logo}
      />
    </Box>
    <Box
      sx={{
        width: 300,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      mt={3}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText primary=" Registrar Asistencia" />
        </ListItem>
      </List>
      <List>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar Sesión" />
        </ListItem>
      </List>
    </Box>
  </Drawer>
);

Page.propTypes = {
  showDrawer: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
