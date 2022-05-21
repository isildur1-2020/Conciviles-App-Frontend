import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Footer = () => (
  <Box
    sx={{
      backgroundColor: "#fad201",
      display: "flex",
      justifyContent: "center",
    }}
    py={1}
    mt={6}
  >
    <Typography component="span" variant="button" sx={{ fontSize: 16 }}>
      Conciviles Copyright {new Date().getFullYear()} Colombia
    </Typography>
  </Box>
);
