import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useProductsCreate } from "providers/Products";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import * as Yup from "yup";
import PageLayout from "components/PageLayout";
import { ButtonWrapper } from "theme/Buttons";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import { ProductBasic } from "../fields/ProductBasic";
import { ProductMedia } from "../fields/ProductMedia";
import { ProductOrganization } from "../fields/ProductOrganization";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("title"),
  price: Yup.string().required().label("Regular Price"),
  category: Yup.string().required().label("Category"),
});

const ProductAdd = () => {
  const { enqueueSnackbar } = useSnackbar();
  const createProduct = useProductsCreate();
  const router = useRouter();
  const [initial, setInitial] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
    image: "",
  });

  useEffect(() => {
    if (createProduct.isSuccess) {
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
        variant: "success",
      });
      router.push("/app/products");
    }
  }, [createProduct.isSuccess, enqueueSnackbar, router]);

  // use formik
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    errors,
    values,
    touched,
  } = useFormik({
    initialValues: initial,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      createProduct.mutate({
        title: values.title,
        description: values.description,
        price: values.price,
        category: values.category,
        image: values.image,
      });
      resetForm();
    },
  });

  return (
    <PageLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth={false}>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              mb={2}
            >
              <Typography sx={{ m: 1 }} variant="h4">
                <FormattedMessage {...messages.addTitle} />
              </Typography>
              <Box sx={{ m: 1 }}>
                <>
                  <LoadingButton
                    type="submit"
                    color="primary"
                    variant="contained"
                    loading={createProduct.isLoading}
                    sx={{
                      padding: "8px",
                      borderRadius: "7px",
                    }}
                  >
                    <FormattedMessage {...messages.publishButton} />
                  </LoadingButton>
                </>
              </Box>
            </Box>

            <Grid container direction="row" spacing={3}>
              <Grid item xs={12} md={6} lg={12}>
                <ProductBasic
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  values={values}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  disable={false}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={12}>
                <ProductMedia
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  values={values}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  disable={false}
                />

                <ProductOrganization
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  values={values}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  disable={false}
                />
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default ProductAdd;
