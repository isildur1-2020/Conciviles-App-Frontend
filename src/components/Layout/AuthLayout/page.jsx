import Box from "@mui/material/Box";
import { Header } from "../../Header/index";
import { Footer } from "../../Footer/index";
import { Drawer } from "../../Drawer/index";

export const Page = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Drawer />
      <Header />
      {children}
      <Footer />
    </Box>
  </Box>
);
