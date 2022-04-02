import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const center = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const Page = ({
  state,
  loading,
  handleChange,
  handleSubmit,
  disabledSubmit,
}) => (
  <>
    <CssBaseline />
    <Box
      sx={{
        height: "100vh",
        ...center,
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Avatar sx={{ marginBottom: "8px", width: 48, height: 48 }}>
        <PeopleAltIcon sx={{ fontSize: 32 }} />
      </Avatar>
      <Typography component="p" variant="h5">
        Login
      </Typography>
      <Box mt={4} mb={2}>
        <TextField
          id="username"
          name="username"
          label="Cédula"
          size="small"
          variant="standard"
          value={state.username}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <TextField
          id="password"
          name="password"
          label="Contraseña"
          variant="standard"
          size="small"
          type="password"
          value={state.password}
          onChange={handleChange}
        />
      </Box>
      <Box mt={6}>
        {!loading ? (
          <Button disabled={disabledSubmit} type="submit" variant="outlined">
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
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
