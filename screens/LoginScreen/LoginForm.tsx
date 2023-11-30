import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import { ButtonWrapper } from "./Styled";
import { useRouter } from "next/router";
import Loader from "components/Loader/Loader";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
        setLoading(true)
        router.push("/dashboard");
      },
    });
    const handleSignupClick = () =>{
      router.push("/register");
      setLoading(true);
    }

  // handleResetPass
  const handleResetPass = (email: string) => {};

  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);

  return (
    <><Loader show={loading} /><form onSubmit={handleSubmit}>
      <Grid container direction={"column"} spacing={2}>
        <Grid item>
          <TextField
            id="email"
            label={<FormattedMessage {...messages.emailLabel} />}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder={emailPlaceholder}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            autoComplete="off"
            sx={{ ".MuiOutlinedInput-notchedOutline": { color: "rgba(76, 78, 100, 0.68)" }, "fieldset": { borderColor: "rgba(76, 78, 100, 0.68)" }, ".MuiInputBase-input": { color: "rgba(76, 78, 100, 0.68)" }, ".MuiFormLabel-root,.MuiInputLabel-root": { color: "rgba(76, 78, 100, 0.68)" } }} />
        </Grid>

        <Grid item>
          <TextField
            id="password"
            label={<FormattedMessage {...messages.passwordLabel} />}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            placeholder={passwordPlaceholder}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            autoComplete="off"
            sx={{ ".MuiOutlinedInput-notchedOutline": { color: "rgba(76, 78, 100, 0.68)" }, "fieldset": { borderColor: "rgba(76, 78, 100, 0.68)" }, ".MuiInputBase-input": { color: "rgba(76, 78, 100, 0.68)" }, ".MuiFormLabel-root,.MuiInputLabel-root": { color: "rgba(76, 78, 100, 0.68)" } }} />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          margin: "20px 0",
        }}
      >
        <FormControlLabel
          control={<Checkbox
            id="Remember"
            name="fav_language"
            value="Remember"
            sx={{ color: "rgba(76, 78, 100, 0.68)", "span": { color: "rgba(76, 78, 100, 0.68)" } }} />}
          label={<FormattedMessage {...messages.rememberLabel} />} />
        <Link
          href="#"
          underline="none"
          sx={{ color: "#666CFF" }}
          onClick={() => handleResetPass(values.email)}
        >
          <FormattedMessage {...messages.forgot} />
        </Link>
      </Box>

      <Box>
        <ButtonWrapper sx={{ background: "#666CFF", textTransform: "uppercase", "&:hover": { background: "#666CFF" } }} type="submit" variant="contained">
          <FormattedMessage {...messages.signIn} />
        </ButtonWrapper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
          gap: "10px"
        }}
      >
        <Typography sx={{ color: "rgba(76, 78, 100, 0.68)" }}>
          <FormattedMessage {...messages.textSignUp} />
        </Typography>
        <Link sx={{ color: "#666CFF",cursor:"pointer" }} onClick={handleSignupClick} underline="none">
          <FormattedMessage {...messages.signUp} />
        </Link>
      </Box>
    </form></>
  );
};

export default LoginForm;
