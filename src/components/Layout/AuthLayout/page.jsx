import Box from "@mui/material/Box";
import { Header } from "../../Header/index";
import { Footer } from "../../Footer/index";
import { Drawer } from "../../Drawer/index";

export const Page = ({ children }) => (
  <>
    <Drawer />
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <Box sx={{ height: "100%" }}>{children}</Box>
      <Footer />
    </Box>
  </>
);
