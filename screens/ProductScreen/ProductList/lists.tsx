import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Chip, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useProductsListing, useProductsRemove } from "providers/Products";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useSnackbar } from "notistack";
import { Error, Success, Warning } from "configs";
import { TableButtonWrapper } from "theme/Buttons";
import FormattedMessage from "theme/FormattedMessage";

import { rows } from "./data";
import messages from "./messages";

const Lists = () => {
  const { enqueueSnackbar } = useSnackbar();
  const productList = useProductsListing();
  const deleteProduct = useProductsRemove();
  const router = useRouter();

  useEffect(() => {
    if (deleteProduct.isSuccess) {
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
        variant: "success",
      });
    }
  }, [deleteProduct.isSuccess, enqueueSnackbar, router]);

  const columns: GridColDef[] = [
    {
      field: "_id",
      headerName: "ID",
      width: 90,
      hide: true,
    },
    {
      field: "image",
      headerName: "Image",
      width: 90,
      hide: true,
    },
    {
      field: "title",
      headerName: "Title",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => {
        return params.value?.name;
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
      hide: true,
    },
    {
      field: "createdBy",
      headerName: "Created By",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => {
        return params.value?.name;
      },
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      minWidth: 150,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <TableButtonWrapper
              startIcon={<ModeEditIcon fontSize="small" />}
              sx={{ mr: 1 }}
              variant="contained"
              // href="#outlined-buttons"
              onClick={() => {
                router.push(`products/${params.row.slug}`);
              }}
            >
              <FormattedMessage {...messages.editButton} />
            </TableButtonWrapper>
            <TableButtonWrapper
              startIcon={<DeleteIcon fontSize="small" />}
              sx={{ mr: 1 }}
              variant="outlined"
              // href="#outlined-buttons"
              onClick={() => {
                deleteProduct.mutate({ slug: params.row.slug });
              }}
            >
              <FormattedMessage {...messages.deleteButton} />
            </TableButtonWrapper>
          </>
        );
      },
    },
  ];
  return (
    <Box mt={2}>
      <DataGrid
        autoHeight
        getRowId={(row) => row._id}
        {...rows}
        rowHeight={75}
        rows={productList?.data?.data || []}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        loading={productList.isFetching}
      />
    </Box>
  );
};

export default Lists;
