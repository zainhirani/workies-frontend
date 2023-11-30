import * as React from "react";
import {
  Autocomplete,
  Box,
  Chip,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Error, Success, Warning } from "configs";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import { ButtonWrapper } from "./Styled";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Order ID",
    width: 90,
    renderCell: (params) => {
      return (
        <Typography
          sx={{ color: (theme) => theme.palette.primary.main, fontWeight: 600 }}
        >
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "billingName",
    headerName: "Billing Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "date",
    headerName: "Date",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "total",
    headerName: "Total",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "paymentStatus",
    headerName: "Payment Status",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => {
      let style = Error;
      if (params.value == "Paid") {
        style = Success;
      } else if (params.value == "Refund") {
        style = Warning;
      }
      return <Chip label={params.value} sx={style} />;
    },
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => {
      return (
        <>
          <CreditCardIcon
            sx={{
              color: (theme) => theme.palette.secondary.light,
              fontSize: "20px",
              marginRight: "5px",
            }}
          />{" "}
          {params.value}
        </>
      );
    },
  },
  {
    field: "viewDetail",
    headerName: "View Details",
    sortable: false,
    minWidth: 150,
    flex: 1,
    renderCell: (params) => {
      return (
        <ButtonWrapper variant="contained" href="#outlined-buttons">
          <FormattedMessage {...messages.tableButton} />
        </ButtonWrapper>
      );
    },
  },
];

const rows = [
  {
    id: "#SK2540",
    billingName: "Neal Matthews",
    date: "07 Oct, 2022",
    total: "$400",
    paymentStatus: "Paid",
    paymentMethod: "Visa",
  },
  {
    id: "#SK2541",
    billingName: "Jamal Burnett",
    date: "07 Oct, 2022",
    total: "$380",
    paymentStatus: "Charge Back",
    paymentMethod: "Visa",
  },
  {
    id: "#SK2542",
    billingName: "Juan Mitchell",
    date: "07 Oct, 2022",
    total: "$380",
    paymentStatus: "Refund",
    paymentMethod: "Visa",
  },
  {
    id: "#SK2543",
    billingName: "Barry Dick",
    date: "07 Oct, 2022",
    total: "$380",
    paymentStatus: "Paid",
    paymentMethod: "Visa",
  },
  {
    id: "#SK2544",
    billingName: "Ronald Taylor",
    date: "07 Oct, 2022",
    total: "$380",
    paymentStatus: "Paid",
    paymentMethod: "Visa",
  },
  {
    id: "#SK2545",
    billingName: "Jacob Hunter",
    date: "07 Oct, 2022",
    total: "$380",
    paymentStatus: "Refund",
    paymentMethod: "Visa",
  },
  {
    id: "#SK2546",
    billingName: "Joe Doe",
    date: "07 Oct, 2022",
    total: "$380",
    paymentStatus: "Paid",
    paymentMethod: "Visa",
  },
  {
    id: "#SK2547",
    billingName: "Rock James",
    date: "07 Oct, 2022",
    total: "$380",
    paymentStatus: "Paid",
    paymentMethod: "Visa",
  },
  {
    id: "#SK2548",
    billingName: "Sean Williams",
    date: "07 Oct, 2022",
    total: "$380",
    paymentStatus: "Paid",
    paymentMethod: "Visa",
  },
  {
    id: "#SK2549",
    billingName: "Will Smith",
    date: "07 Oct, 2022",
    total: "$380",
    paymentStatus: "Paid",
    paymentMethod: "Visa",
  },
];

const clothing = [
  { label: "The Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
];

interface OrderProps {
  title?: JSX.Element | string;
}

const LatestOrder: React.FC<OrderProps> = ({ title }) => {
  return (
    <Paper sx={{ padding: (theme) => theme.spacing(3) }}>
      <Typography variant="h5" component="h5" mb={3}>
        {title}
      </Typography>

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
            options={clothing}
            sx={{ width: 250 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Grid>
        <Grid item xs="auto">
          <Box sx={{ display: "flex", gap: "20px" }}>
            <TextField
              id="date"
              label="Select"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 180 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={clothing}
              sx={{ width: 180 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          height: 400,
          width: "100%",
          marginTop: (theme) => theme.spacing(3),
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Paper>
  );
};

export default LatestOrder;
