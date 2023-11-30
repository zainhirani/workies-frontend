import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useProductsDetail, useProductsUpdate } from "providers/Products";
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

const ProductEdit = () => {
  const [disableField, setDisableField] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const updateProduct = useProductsUpdate({
    slug: router?.query?.slug?.toString(),
  });
  const singleProduct = useProductsDetail({
    slug: router?.query?.slug?.toString(),
  });

  const handleEnable = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setDisableField(false);
  };

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
    initialValues: {
      title: singleProduct.data?.data.title || "",
      description: singleProduct.data?.data.description || "",
      price: singleProduct.data?.data.price || 0,
      category: singleProduct.data?.data.category.name || "",
      image: singleProduct.data?.data.image || "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      updateProduct.mutate({
        title: values.title || "",
        description: values.description || "",
        price: values.price || 0,
        category: values.category || "",
        image: values.image || "",
      });
      resetForm();
    },
  });

  useEffect(() => {
    if (updateProduct.isSuccess) {
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
        variant: "success",
      });
      router.push("/app/products");
    }
  }, [enqueueSnackbar, router, updateProduct.isSuccess]);

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
                {disableField ? (
                  <FormattedMessage {...messages.defaultTitle} />
                ) : (
                  <FormattedMessage {...messages.editTitle} />
                )}
              </Typography>
              <Box sx={{ m: 1 }}>
                {disableField ? (
                  <ButtonWrapper
                    color="primary"
                    variant="contained"
                    onClick={handleEnable}
                    sx={{ mr: 1 }}
                  >
                    <FormattedMessage {...messages.defaultButton} />
                  </ButtonWrapper>
                ) : (
                  <>
                    <LoadingButton
                      type="submit"
                      color="primary"
                      variant="contained"
                      loading={updateProduct.isLoading}
                      sx={{
                        padding: "8px",
                        borderRadius: "7px",
                      }}
                    >
                      <FormattedMessage {...messages.editButton} />
                    </LoadingButton>
                  </>
                )}
                {/* <ButtonWrapper
                  color="primary"
                  variant="contained"
                  onClick={handleEnable}
                  sx={{ mr: 1 }}
                >
                  <FormattedMessage {...messages.defaultButton} />
                </ButtonWrapper> */}
                {/* <ButtonWrapper
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  <FormattedMessage {...messages.editButton} />
                </ButtonWrapper> */}
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
                  disable={disableField}
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
                  disable={disableField}
                />

                <ProductOrganization
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  values={values}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  disable={disableField}
                />
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default ProductEdit;
