import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const Page = ({
  data,
  employee,
  chargeItems,
  employeeInfo,
  handleInputChange,
  handleChangeEmployee,
}) => (
  <Box mt={2} mb={6}>
    <Grid container rowSpacing={2}>
      <Autocomplete
        fullWidth
        disablePortal
        id="autocomplete-employee"
        options={data}
        onChange={handleChangeEmployee}
        sx={{}}
        renderInput={(params) => <TextField {...params} label="Empleado" />}
      />
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Apellidos y nombres"
          variant="outlined"
          value={employee?.name}
          onChange={handleInputChange}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="charge"
          name="charge"
          label="Cargo"
          variant="outlined"
          value={chargeItems?.[employee?.charge] ?? ""}
          onChange={handleInputChange}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="class"
          name="class"
          label="Clase"
          variant="outlined"
          value={employeeInfo?.clase?.[employee?.class] ?? ""}
          onChange={handleInputChange}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
    </Grid>
  </Box>
);

// Page.propTypes = {
//   data,
//   handleChangeEmployee,
//   employee,
//   chargeItems,
// };handleInputChange
