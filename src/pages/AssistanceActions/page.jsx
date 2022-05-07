import { AuthLayout } from "../../components/Layout/AuthLayout";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export const Page = ({
  info,
  closeAssistance,
  getAssistanceXLSX,
  disabled,
}) => {
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
        <Box mt={3}>
          <ButtonGroup variant="outlined">
            <Button disabled={disabled} onClick={closeAssistance}>
              CERRAR ASISTENCIA
            </Button>
            <Button onClick={getAssistanceXLSX}>DESCARGAR ASISTENCIA</Button>
          </ButtonGroup>
        </Box>
      </Container>
    </AuthLayout>
  );
};
