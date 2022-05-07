import { AuthLayout } from "../../components/Layout/AuthLayout";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Page = ({ info, getAssistanceXLSX }) => {
  return (
    <AuthLayout>
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h2" variant="h6" align="center">
          ID tabla Actual: {info?.id}
        </Typography>
        <Typography component="h2" variant="h6" align="center">
          Nombre tabla Actual: {info?.name}
        </Typography>
        <Button onClick={getAssistanceXLSX} variant="contained">
          DESCARGAR ASISTENCIA
        </Button>
      </Container>
    </AuthLayout>
  );
};
