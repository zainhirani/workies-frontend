import { Box, Grid, TextField, Autocomplete } from "@mui/material";

import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";

const categories = [
  { label: "Electronics", value: 1 },
  { label: "Clothes", value: 2 },
  { label: "Mobile", value: 3 },
];
const Filters = () => (
  <Grid
    container
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    spacing={3}
  >
    <Grid item xs>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={categories}
        sx={{ width: 325 }}
        renderInput={(params) => <TextField {...params} label={<FormattedMessage {...messages.categoriesLabel} />} />}
      />
    </Grid>
    <Grid item xs="auto">
      <Box sx={{ display: "flex", gap: "20px" }}>
        <TextField
          id="date"
          label="Select"
          type="date"
          defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={categories}
          sx={{ width: 220 }}
          renderInput={(params) => <TextField  {...params} label={<FormattedMessage {...messages.statusLabel} />} />}
        />
      </Box>
    </Grid>
  </Grid>
);

export default Filters;
