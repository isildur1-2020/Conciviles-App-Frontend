import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { EmployeeInfo } from "../../components/EmployeeInfo/index";
import { AuthLayout } from "../../components/Layout/AuthLayout/index";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import CircularProgress from "@mui/material/CircularProgress";

// Fecha (la registra el sistema)
// Clase ( Operativo, Administrativo ) VIENE CON EL EMPLEADO
// Hora Ingreso (Se hace con el sistema)

// Empleado (llamar datos desde el sistema)
// Turno (  )
// Planta ( Planta 1, Planta 2 )
// Novedad ( OBRA, DESCANSO, PERMISO, INCAPACIDAD, SUSPENSION, VACACIONES, OTROS )
// Observaciones

const Wrap = ({ children }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    {children}
  </LocalizationProvider>
);

export const Page = ({
  data,
  info,
  state,
  setInfo,
  loading,
  handleChange,
  handleSubmit,
  submitDisabled,
}) => (
  <AuthLayout>
    <form onSubmit={handleSubmit}>
      <Container maxWidth="xs">
        <Box my={6}>
          <Typography component="h2" variant="h5" align="center">
            Registro Asistencia
          </Typography>
        </Box>
        <EmployeeInfo />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="location-label">Ubicación</InputLabel>
              <Select
                labelId="location-label"
                id="location"
                name="location"
                value={info?.location}
                label="Ubicación"
                onChange={handleChange}
              >
                <MenuItem value="">Seleccionar...</MenuItem>
                {data?.ubicaci_n?.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Wrap>
              <DatePicker
                label="Fecha"
                readOnly
                value={info?.date}
                onChange={(newValue) =>
                  setInfo({
                    ...info,
                    date: newValue,
                  })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </Wrap>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="turn-label">Turno</InputLabel>
              <Select
                labelId="turn-label"
                id="turn"
                name="turn"
                value={info?.turn}
                label="Turno"
                onChange={handleChange}
              >
                <MenuItem value="">Seleccionar...</MenuItem>
                {data?.men__desplegable79?.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Wrap>
              <TimePicker
                disabled={state?.updateItem}
                label="Hora entrada"
                value={!state?.updateItem ? info?.input : null}
                onChange={(newValue) => {
                  setInfo({
                    ...info,
                    input: newValue,
                  });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Wrap>
          </Grid>
          <Grid item xs={6}>
            <Wrap>
              <TimePicker
                disabled={!state?.updateItem}
                label="Hora salida"
                value={state?.updateItem ? info?.output : null}
                onChange={(newValue) =>
                  setInfo({
                    ...info,
                    output: newValue,
                  })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </Wrap>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="novelity-label">Novedad</InputLabel>
              <Select
                labelId="novelity-label"
                id="novelity"
                name="novelity"
                value={info?.novelity}
                label="Novedad"
                onChange={handleChange}
              >
                <MenuItem value="">Seleccionar...</MenuItem>
                {data &&
                  Object.keys(data?.novedad)?.map((id) => {
                    const value = data?.novedad?.[id];
                    return (
                      <MenuItem key={id} value={id}>
                        {value}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              rows={3}
              fullWidth
              multiline
              value={info?.observations}
              onChange={handleChange}
              id="observations"
              name="observations"
              label="Observaciones"
            />
          </Grid>
          <Grid item xs={12} mt={3}>
            {!loading ? (
              <Button
                fullWidth
                type="submit"
                size="large"
                variant="contained"
                disabled={submitDisabled}
              >
                Guardar
              </Button>
            ) : (
              <Container>
                <CircularProgress />
              </Container>
            )}
          </Grid>
        </Grid>
      </Container>
    </form>
  </AuthLayout>
);
