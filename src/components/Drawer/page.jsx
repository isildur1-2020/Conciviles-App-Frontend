import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { supervisor } from "../../utilities/token";
import logo from "../../assets/logo.png";
import style from "./style.module.scss";

export const Page = ({
  showDrawer,
  handleClose,
  handleInput,
  handleLogout,
  handleDownloadXSLX,
}) => (
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
        width: 340,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      mt={3}
    >
      <List>
        <Box mb={2}>
          <ListItem>
            <ListItemIcon>
              <VerifiedUserIcon />
            </ListItemIcon>
            <ListItemText primary={supervisor() ?? ""} />
          </ListItem>
        </Box>
        <Divider />
        <ListItem button onClick={() => handleInput(false)}>
          <ListItemIcon>
            <KeyboardDoubleArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="REGISTRO ENTRADA" />
        </ListItem>
        <ListItem button onClick={() => handleInput(true)}>
          <ListItemIcon>
            <KeyboardDoubleArrowLeftIcon />
          </ListItemIcon>
          <ListItemText primary="REGISTRO SALIDA" />
        </ListItem>
        <ListItem button onClick={handleDownloadXSLX}>
          <ListItemIcon>
            <AssignmentReturnedIcon />
          </ListItemIcon>
          <ListItemText primary="DESCARGAR ASISTENCIA" />
        </ListItem>
      </List>
      <List>
        <Divider />
        <ListItem button onClick={handleLogout}>
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
  handleLogout: PropTypes.func.isRequired,
};
