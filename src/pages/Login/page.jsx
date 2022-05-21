import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import CircularProgress from "@mui/material/CircularProgress";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import logotipo from "../../assets/logo.png";
import styles from "./styles.module.scss";

export const Page = ({
  state,
  loading,
  handleChange,
  handleSubmit,
  handleShowPassword,
}) => (
  <>
    <CssBaseline />
    <Box component="form" className={styles.Login} onSubmit={handleSubmit}>
      <Box mb={1} className={styles.Login__logotipo}>
        <img src={logotipo} alt="conciviles" title="conciviles" />
      </Box>
      <Box className={styles.Login__credentials}>
        <Box mt={4} mb={2}>
          <TextField
            autoComplete="username"
            name="username"
            label="Usuario"
            size="small"
            variant="standard"
            value={state.username}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <TextField
            autoComplete="current-password"
            id="password"
            name="password"
            label="Cédula"
            variant="standard"
            type={state.showPassword ? "text" : "password"}
            value={state.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FeaturedPlayListIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleShowPassword}>
                    {state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Box mt={6}>
        {!loading ? (
          <Button
            type="submit"
            variant="outlined"
            disabled={state.disabledSubmit}
          >
            Iniciar Sesión
          </Button>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Box>
  </>
);

Page.propTypes = {
  state: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleShowPassword: PropTypes.func.isRequired,
};
