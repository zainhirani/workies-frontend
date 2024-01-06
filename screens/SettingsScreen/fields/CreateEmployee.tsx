import {
  Box,
  Button,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
  Grid,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  styled,
  useRadioGroup,
  IconButton,
} from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

import {
  IconButtonWrapper,
  InputLabelWrapper,
  LoadingButtonWrapper,
} from "../Styled";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import * as Yup from "yup";
import {maritalSelect} from "./data";
import messages from "../messages";
import { useEffect, useState, useCallback, ChangeEvent } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
// import { useProfile } from "providers/Users";
import { useSnackbar } from "notistack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface StepTwoProps{
  handlePrev:() => void;
  handleNext: () => void;
  formValues:any;
  setFormValues:any;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().label("Name"),
  mobileNo: Yup.string().label("Mobile No."),
  cnic: Yup.string().label("CNIC No."),
  dob: Yup.string().label("Date of Birth"),
  doj: Yup.string().label("Date of Joining"),
  maritalStatus: Yup.string().label("Marital Status"),
  nationality: Yup.string().label("Nationality"),
  designation: Yup.string().label("Designation"),
  profileImg: Yup.string().label("Profile Image"),
  manager: Yup.string().label("Manager"),
  residentialAddress: Yup.string().label("Residential Address"),
  permanentAddress: Yup.string().label("Permanent Address"),
  city: Yup.string().label("City"),
  country: Yup.string().label("Country"),
  state: Yup.string().label("State/Province"),
  zip: Yup.string().label("ZIP Code"),
});

export const StepTwo = ({handlePrev,handleNext,formValues,setFormValues}:StepTwoProps) => {
  const mobilePlaceholder = useFormattedMessage(messages.mobilePlaceholder);
  const namePlaceholder = useFormattedMessage(messages.namePlaceholder);
  const cnicPlaceholder = useFormattedMessage(messages.cnicPlaceholder);
  const nationPlaceholder = useFormattedMessage(messages.nationPlaceholder);
  const designationPlaceholder = useFormattedMessage(messages.designationPlaceholder);
  const reportingPlaceholder = useFormattedMessage(messages.reportingPlaceholder);
  const residentialAddressPlaceholder = useFormattedMessage(messages.residentialAddressPlaceholder);
  const permanentAddressPlaceholder = useFormattedMessage(messages.permanentAddressPlaceholder);
  const cityPlaceholder = useFormattedMessage(messages.cityPlaceholder);
  const countryPlaceholder = useFormattedMessage(messages.countryPlaceholder);
  const statePlaceholder = useFormattedMessage(messages.statePlaceholder);
  const zipPlaceholder = useFormattedMessage(messages.zipPlaceholder);
  const [maritalStatus, setMaritalStatus] = useState("Select from the list");
  const [experience, setExperience] = useState(0);
  const [dobValue, setDobValue] = useState(null);
  const [dojValue, setDojValue] = useState(null);
  const [checkedValues, setCheckedValues] = useState([]);
  // const profile = useProfile();
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // useEffect(() => {
  //   if (profile.isSuccess) {
  //     enqueueSnackbar(
  //       <FormattedMessage {...messages.profileSuccessMessage} />,
  //       {
  //         variant: "success",
  //         action: (key) => (
  //           <IconButton onClick={() => closeSnackbar(key)} size="small">
  //             <CloseIcon sx={{ color: "#fff" }} />
  //           </IconButton>
  //         ),
  //       },
  //     );
  //     router.replace("/");
  //   }
  // }, [profile.isSuccess]);

  // useEffect(() => {
  //   if (profile.isError) {
  //     const errorMessage = profile.error.message;
  //     enqueueSnackbar(errorMessage, {
  //       variant: "error",
  //       action: (key) => (
  //         <IconButton onClick={() => closeSnackbar(key)} size="small">
  //           <CloseIcon sx={{ color: "#fff" }} />
  //         </IconButton>
  //       ),
  //     });
  //   }
  // }, [profile.isError]);

  const onSubmit = (data: any) => {
    // profile.mutate({
    //   date_of_birth: dobValue,
    //   experience: experience,
    //   working_part_time: data.partTime === "Yes" ? true : false,
    //   athlete: checkedValues.join(", "),
    //   concept: data.learn,
    //   hobbies: data.hobbies,
    //   learning_sequence: data.sequence,
    //   math_skills: data.maths,
    //   study_prefer: data.study,
    //   taken_biochemistry: data.bioChemistry === "Yes" ? true : false,
    //   volunteer: data.volunteer === "Yes" ? true : false,
    // });
    setFormValues((prevState:any) => ({
      ...prevState,
      data,
    }));
    console.log(data,"data")
    handleNext();
  };

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
      name:formValues?.data?.name || "",
      mobileNo:formValues?.data?.mobileNo || "",
      cnic:formValues?.data?.cnic || "",
      dob: formValues?.data?.dob || "",
      doj: formValues?.data?.doj || "",
      maritalStatus: formValues?.data?.maritalStatus || "",
      nationality: formValues?.data?.nationality || "",
      designation: formValues?.data?.designation || "",
      profileImg: formValues?.data?.profileImg || "",
      manager: formValues?.data?.manager || "",
      residentialAddress: formValues?.data?.residentialAddress || "",
      permanentAddress: formValues?.data?.permanentAddress || "",
      city: formValues?.data?.city || "",
      country: formValues?.data?.country || "",
      state: formValues?.data?.state || "",
      zip: formValues?.data?.zip || "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="name">
                <FormattedMessage {...messages.nameLabel} />
              </InputLabelWrapper>
              <TextField
                id="name"
                name="name"
                size="small"
                placeholder={namePlaceholder}
                fullWidth
                value={values.name}
                // defaultValue={values.organizationName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.name && errors.name)}
                variant="outlined"
              />
              {touched.name && errors.name && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-name"
                >
                  {errors.name}
                </FormHelperText>
              )}
              {touched.dob && errors.dob && (
                <FormHelperText error id="standard-weight-helper-text-dob">
                  {errors.dob}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="mobileNo">
                <FormattedMessage {...messages.mobileLabel} />
              </InputLabelWrapper>
              <TextField
                id="mobileNo"
                name="mobileNo"
                size="small"
                placeholder={mobilePlaceholder}
                fullWidth
                value={values.mobileNo}
                // defaultValue={values.organizationName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.mobileNo && errors.mobileNo)}
                variant="outlined"
              />
              {touched.mobileNo && errors.mobileNo && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-mobileNo"
                >
                  {errors.mobileNo}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="cnic">
                <FormattedMessage {...messages.cnicLabel} />
              </InputLabelWrapper>
              <TextField
                id="cnic"
                name="cnic"
                size="small"
                placeholder={cnicPlaceholder}
                fullWidth
                value={values.cnic}
                // defaultValue={values.organizationName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.cnic && errors.cnic)}
                variant="outlined"
              />
              {touched.cnic && errors.cnic && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-cnic"
                >
                  {errors.cnic}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="dob">
                <FormattedMessage {...messages.dobLabel} />
              </InputLabelWrapper>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
                disableFuture={true}
                value={dobValue}
                onChange={(e: any) => {
                  setDobValue(e);
                  handleChange;
                }}
                // components={{ OpenPickerIcon: CalendarMonthIcon }}
                sx={{
                  ".MuiBox-root": { borderLeft: "none" },
                  width: "100%",
                  ".MuiSvgIcon-root": {
                    color: (theme: any) => theme.palette.primary.main,
                  },
                  ".MuiInputBase-input": {
                    padding: "8px 10px",
                  },
                }}
              />
              {touched.dob && errors.dob && (
                <FormHelperText error id="standard-weight-helper-text-dob">
                  {errors.dob}
                </FormHelperText>
              )}
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="doj">
                <FormattedMessage {...messages.dojLabel} />
              </InputLabelWrapper>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
                disableFuture={true}
                value={dojValue}
                onChange={(e: any) => {
                  setDobValue(e);
                  handleChange;
                }}
                // components={{ OpenPickerIcon: CalendarMonthIcon }}
                sx={{
                  ".MuiBox-root": { borderLeft: "none" },
                  width: "100%",
                  ".MuiSvgIcon-root": {
                    color: (theme: any) => theme.palette.primary.main,
                  },
                  ".MuiInputBase-input": {
                    padding: "8px 10px",
                  },
                }}
              />
              {touched.doj && errors.doj && (
                <FormHelperText error id="standard-weight-helper-text-doj">
                  {errors.doj}
                </FormHelperText>
              )}
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="learn">
                <FormattedMessage {...messages.maritalLabel} />
              </InputLabelWrapper>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={values.maritalStatus}
                size="small"
                onChange={(e) => {
                  if (setFieldValue) {
                    setFieldValue("maritalStatus", e.target.value);
                  }
                  setMaritalStatus(e.target.value);
                }}
                variant="outlined"
                fullWidth
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  ".MuiSvgIcon-root ": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                {maritalSelect?.map((status) =>
                  status.id === 0 ? (
                    <MenuItem disabled value={status.name} key={status.id}>
                      {status.name}
                    </MenuItem>
                  ) : (
                    <MenuItem value={status.name} key={status.id}>
                      {status.name}
                    </MenuItem>
                  ),
                )}
              </Select>
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="nationality">
                <FormattedMessage {...messages.nationLabel} />
              </InputLabelWrapper>
              <TextField
                id="nationality"
                name="nationality"
                size="small"
                placeholder={nationPlaceholder}
                fullWidth
                value={values.nationality}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.nationality && errors.nationality)}
                variant="outlined"
              />
              {touched.nationality && errors.nationality && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-nationality"
                >
                  {errors.nationality}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="designation">
                <FormattedMessage {...messages.designationLabel} />
              </InputLabelWrapper>
              <TextField
                id="designation"
                name="designation"
                size="small"
                placeholder={designationPlaceholder}
                fullWidth
                value={values.designation}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.designation && errors.designation)}
                variant="outlined"
              />
              {touched.designation && errors.designation && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-designation"
                >
                  {errors.designation}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="profileImg">
                <FormattedMessage {...messages.profileLabel} />
              </InputLabelWrapper>
              <TextField
                id="profileImg"
                name="profileImg"
                size="small"
                type="file"
                fullWidth
                value={values.profileImg}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.profileImg && errors.profileImg)}
                variant="outlined"
                sx={{"#profileImg":{pl:0},".MuiOutlinedInput-notchedOutline":{border:"none"}}}
              />
              {touched.profileImg && errors.profileImg && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-profileImg"
                >
                  {errors.profileImg}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="manager">
                <FormattedMessage {...messages.managerLabel} />
              </InputLabelWrapper>
              <TextField
                id="manager"
                name="manager"
                size="small"
                placeholder={reportingPlaceholder}
                fullWidth
                value={values.manager}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.manager && errors.manager)}
                variant="outlined"
              />
              {touched.manager && errors.manager && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-manager"
                >
                  {errors.manager}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="residentialAddress">
                <FormattedMessage {...messages.residentialAddressLabel} />
              </InputLabelWrapper>
              <TextField
                id="residentialAddress"
                name="residentialAddress"
                size="small"
                placeholder={residentialAddressPlaceholder}
                fullWidth
                value={values.residentialAddress}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.residentialAddress && errors.residentialAddress)}
                variant="outlined"
                sx={{ marginTop: "12px" }}
              />
              {touched.residentialAddress && errors.residentialAddress && (
                <FormHelperText error id="standard-weight-helper-text-residentialAddress">
                  {errors.residentialAddress}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="permanentAddress">
                <FormattedMessage {...messages.permanentAddressLabel} />
              </InputLabelWrapper>
              <TextField
                id="permanentAddress"
                name="permanentAddress"
                placeholder={permanentAddressPlaceholder}
                fullWidth
                size="small"
                value={values.permanentAddress}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.permanentAddress && errors.permanentAddress)}
                variant="outlined"
                sx={{ marginTop: "12px" }}
              />
              {touched.permanentAddress && errors.permanentAddress && (
                <FormHelperText error id="standard-weight-helper-text-permanentAddress">
                  {errors.permanentAddress}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="city">
                <FormattedMessage {...messages.cityLabel} />
              </InputLabelWrapper>
              <TextField
                id="city"
                name="city"
                size="small"
                placeholder={cityPlaceholder}
                fullWidth
                value={values.city}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.city && errors.city)}
                variant="outlined"
                sx={{ marginTop: "12px" }}
              />
              {touched.city && errors.city && (
                <FormHelperText error id="standard-weight-helper-text-city">
                  {errors.city}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="country">
                <FormattedMessage {...messages.countryLabel} />
              </InputLabelWrapper>
              <TextField
                id="country"
                name="country"
                size="small"
                placeholder={countryPlaceholder}
                fullWidth
                value={values.country}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.country && errors.country)}
                variant="outlined"
                sx={{ marginTop: "12px" }}
              />
              {touched.country && errors.country && (
                <FormHelperText error id="standard-weight-helper-text-country">
                  {errors.country}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="state">
                <FormattedMessage {...messages.stateLabel} />
              </InputLabelWrapper>
              <TextField
                id="state"
                name="state"
                size="small"
                placeholder={statePlaceholder}
                fullWidth
                value={values.state}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.state && errors.state)}
                variant="outlined"
                sx={{ marginTop: "12px" }}
              />
              {touched.state && errors.state && (
                <FormHelperText error id="standard-weight-helper-text-state">
                  {errors.state}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="zip">
                <FormattedMessage {...messages.zipLabel} />
              </InputLabelWrapper>
              <TextField
                id="zip"
                name="zip"
                size="small"
                placeholder={zipPlaceholder}
                fullWidth
                value={values.zip}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.zip && errors.zip)}
                variant="outlined"
                sx={{ marginTop: "12px" }}
              />
              {touched.zip && errors.zip && (
                <FormHelperText error id="standard-weight-helper-text-zip">
                  {errors.zip}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", xl: "65%" },
              display: "flex",
              mt: "10px",
              justifyContent: { xs: "center", md: "space-between" },
            }}
          >
             <Button
              onClick={handlePrev}
               variant="contained"
              sx={{
                textDecoration: "none",
                color: "#fff",
                textTransform: "initial",
                fontWeight: "500",
                width: { xs: "100%", md: "250px" },
              }}
            >
              <FormattedMessage {...messages.prev} />
            </Button>
            <LoadingButtonWrapper
              variant="contained"
              type="submit"
              disabled={
                (values.name &&
                  values.mobileNo &&
                  values.cnic &&
                  values.dob &&
                  values.doj &&
                  values.maritalStatus &&
                  values.nationality &&
                  values.designation &&
                  values.profileImg &&
                  values.manager &&
                  values.residentialAddress &&
                  values.permanentAddress &&
                  values.city &&
                  values.country &&
                  values.state &&
                  values.zip
                  ) === ""
              }
              // loading={profile.isLoading}
              loadingPosition="end"
              sx={{
                width: { xs: "100%", md: "250px" },
                ".MuiLoadingButton-loadingIndicator": {
                  top: "35%",
                  right: "32%",
                },
              }}
            >
              <FormattedMessage {...messages.profile} />
            </LoadingButtonWrapper>
          </Box>
        </Box>
      </form>
    </>
  );
};
