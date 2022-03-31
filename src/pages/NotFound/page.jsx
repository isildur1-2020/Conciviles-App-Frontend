import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const Page = ({ handleRedirect }) => (
  <Box
    sx={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Typography variant="h3" component="span">
      Error 404
    </Typography>
    <Typography variant="h2" component="span">
      Esta ruta no existe
    </Typography>
    <Button
      variant="outlined"
      sx={{ marginTop: 4, fontSize: 24 }}
      onClick={handleRedirect}
    >
      Ir a inicio
    </Button>
  </Box>
);

Page.propTypes = {
  handleRedirect: PropTypes.func.isRequired,
};
