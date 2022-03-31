import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Footer = () => (
  <Box
    sx={{
      backgroundColor: "primary.main",
      display: "flex",
      justifyContent: "center",
    }}
    py={1}
    mt={6}
  >
    <Typography sx={{ color: "#fff" }} component="span" variant="body2">
      Conciviles Copyright {new Date().getFullYear()} Colombia
    </Typography>
  </Box>
);
