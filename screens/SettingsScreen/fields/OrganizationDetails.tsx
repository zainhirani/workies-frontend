//@ts-nocheck
import {
  Box,
  CardContent,
  FormHelperText,
  Grid,
  TextField,
  Typography, 
  Avatar
} from "@mui/material";
import {
  ButtonWrapper,
  IconButtonWrapper,
  LoadingButtonWrapper,
} from "../Styled";

import {
  CardHeaderWrapper,
  InputLabelWrapper,
} from "../Styled"
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "../messages";
import { useState, useEffect, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useRegister } from "providers/Auth";
import { useSnackbar } from "notistack";
import CircularImageUpload from "components/CircularImageUpload/CircularImageUpload";

const validationSchema = Yup.object().shape({
  organizationName: Yup.string().required().label("Organization Name"),
  displayName: Yup.string().required().label("Display Name"),
  noOfEmployees: Yup.string().required().label("No. of Employees"),
  logo: Yup.mixed().required("Logo"),
  primaryThemeColor: Yup.string().label("Primary Color"),
  secondaryThemeColor: Yup.string().label("Secondary Color"),
  photo: Yup.mixed().required('Please upload a photo'),
});

interface IStepOneProps {
  handleNext: () => void;
  formValues:any;
  setFormValues:any;
}

const StepOne: React.FC<IStepOneProps> = ({ handleNext,formValues,setFormValues }) => {
  // const register = useRegister();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const organizationNamePlaceholder = useFormattedMessage(
    messages.organizationNamePlaceholder,
  );
  const displayNamePlaceholder = useFormattedMessage(messages.displayNamePlaceholder);
  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder);
  const noOfEmployeesPlaceholder = useFormattedMessage(messages.noOfEmployeesPlaceholder);

  const [primaryColor, setPrimaryColor] = useState("#000");
  const [secondaryColor, setSecondaryColor] = useState("#000");

  // useEffect(() => {
  //   if (register.isSuccess) {
  //     enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
  //       variant: "success",
  //       action: (key) => (
  //         <IconButton onClick={() => closeSnackbar(key)} size="small">
  //           <CloseIcon sx={{ color: "#fff" }} />
  //         </IconButton>
  //       ),
  //     });
  //     localStorage.setItem(TOKEN, register?.data.token);
  //     handleNext();
  //   }
  // }, [register.isSuccess]);

  // useEffect(() => {
  //   if (register.isError) {
  //     const errorMessage = register.error.message;
  //     enqueueSnackbar(errorMessage, {
  //       variant: "error",
  //       action: (key) => (
  //         <IconButton onClick={() => closeSnackbar(key)} size="small">
  //           <CloseIcon sx={{ color: "#fff" }} />
  //         </IconButton>
  //       ),
  //     });
  //   }
  // }, [register.isError]);

  const onSubmit = useCallback((data: any) => {
    // register.mutate({
    //   organizationName: data.organizationName,
    //   displayName: data.displayName,
    //   noOfEmployees: data.noOfEmployees,
    //   logo: data.logo,
    //   primaryThemeColor: data.primaryThemeColor,
    //   secondaryThemeColor: data.secondaryThemeColor,
    // });
    setFormValues((prevState) => ({
      ...prevState,
      data,
    }));
    console.log(data,"data")
    handleNext()
  }, []);

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      organizationName: formValues?.data?.organizationName || "",
      displayName: formValues?.data?.displayName || "",
      noOfEmployees: formValues?.data?.noOfEmployees || 1,
      logo: formValues.data?.logo || null,
      primaryThemeColor: formValues?.data?.primaryThemeColor || primaryColor,
      secondaryThemeColor: formValues?.data?.secondaryThemeColor ||  secondaryColor,
    },
    enableReinitialize:true,
    // validationSchema,
    onSubmit,
  });
  const handleImageChange = (file: File) => {
    setFieldValue('logo', file);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardContent sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"30px"}}>
            <Box sx={{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"}}>
              <CircularImageUpload onImageChange={handleImageChange} />
              <InputLabelWrapper htmlFor="logo">
                <FormattedMessage {...messages.logoLabel} />
              </InputLabelWrapper>
            </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="organizationName">
                <FormattedMessage {...messages.organizationNameLabel} />
              </InputLabelWrapper>
              <TextField
                id="organizationName"
                name="organizationName"
                placeholder={organizationNamePlaceholder}
                fullWidth
                value={values.organizationName}
                // defaultValue={values.organizationName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.organizationName && errors.organizationName)}
                variant="outlined"
              />
              {touched.organizationName && errors.organizationName && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-organizationName"
                >
                  {errors.organizationName}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="displayName">
                <FormattedMessage {...messages.displayNameLabel} />
              </InputLabelWrapper>
              <TextField
                id="displayName"
                name="displayName"
                placeholder={displayNamePlaceholder}
                fullWidth
                value={values.displayName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.displayName && errors.displayName)}
                variant="outlined"
              />
              {touched.displayName && errors.displayName && (
                <FormHelperText error id="standard-weight-helper-text-displayName">
                  {errors.displayName}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="noOfEmployees">
                <FormattedMessage {...messages.noOfEmployeesLabel} />
              </InputLabelWrapper>
              <TextField
                id="noOfEmployees"
                name="noOfEmployees"
                placeholder={noOfEmployeesPlaceholder}
                fullWidth
                inputProps={{ min: 0 }}
                type="number"
                value={
                  values?.noOfEmployees !== ""
                    ? values?.noOfEmployees < 1
                      ? 1
                      : parseInt(values?.noOfEmployees)
                    : ""
                }
                inputProps={{ min: 1 }}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.noOfEmployees && errors.noOfEmployees)}
                variant="outlined"
              />
              {touched.noOfEmployees && errors.noOfEmployees && (
                <FormHelperText error id="standard-weight-helper-text-noOfEmployees">
                  {errors.noOfEmployees}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="primaryThemeColor">
                <FormattedMessage {...messages.themeColorLabel} />
              </InputLabelWrapper>
              <Box sx={{display:"flex",alignItems:"center",gap:"20px"}}>
              <TextField
                id="primaryThemeColor"
                name="primaryThemeColor"
                placeholder={emailPlaceholder}
                type="color"
                value={values.primaryThemeColor}
                onBlur={handleBlur}
                onChange={(e)=>{
                  if (setFieldValue) {
                    setFieldValue("primaryThemeColor", e.target.value);
                  };
                  setPrimaryColor(e.target.value)
                }}
                error={Boolean(touched.primaryThemeColor && errors.primaryThemeColor)}
                variant="standard"
                sx={{width:"max-content",".MuiInput-root:before": {
                  borderBottom: "0",
              },"input#primaryThemeColor":{width:"40px",height:"40px"}}}
              />
              <TextField
                id="secondaryThemeColor"
                name="secondaryThemeColor"
                placeholder={emailPlaceholder}
                type="color"
                value={values.secondaryColor}
                onBlur={handleBlur}
                onChange={(e)=>{
                  setSecondaryColor(e.target.value);
                  if (setFieldValue) {
                    setFieldValue("secondaryThemeColor", e.target.value);
                  };
                }}
                error={Boolean(touched.secondaryThemeColor && errors.secondaryThemeColor)}
                variant="standard"
                sx={{width:"max-content",".MuiInput-root:before": {
                  borderBottom: "0",
              },"input#secondaryThemeColor":{width:"40px",height:"40px"}}}
              />
              {touched.secondaryThemeColor && errors.secondaryThemeColor && (
                <FormHelperText error id="standard-weight-helper-text-secondaryThemeColor">
                  {errors.secondaryThemeColor}
                </FormHelperText>
              )}
              </Box>
            </Grid>          
          </Grid>
          </Box>
          <LoadingButtonWrapper
          variant="contained"
          type="submit"
          // loading={register.isLoading}
          loadingPosition="end"
          sx={{
            flex: "1 1 auto",
            marginTop: "30px",
            ".MuiLoadingButton-loadingIndicator": {
              top: "35%",
              right: "32%",
            },
          }}
          disabled={
            (values.organizationName &&
              values.displayName &&
              values.logo &&
              values.noOfEmployees &&
              values.primaryThemeColor &&
              values.secondaryThemeColor) === ""
          }
        >
          <FormattedMessage {...messages.signUp} />
        </LoadingButtonWrapper>
        </CardContent>
      </form>
    </>
  );
};

export default StepOne;
