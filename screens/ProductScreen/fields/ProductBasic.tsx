import {
  Card,
  CardContent,
  FormHelperText,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

import {
  CardHeaderWrapper,
  InputLabelWrapper,
} from "screens/ProductScreen/Styled";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import { ProductsProps } from "./formProps";
import { currencies } from "../ProductAdd/data";
import messages from "../ProductAdd/messages";

export const ProductBasic: React.FC<ProductsProps> = ({
  touched,
  values,
  errors,
  handleBlur,
  handleChange,
  setFieldValue,
  disable,
}) => {
  const textPlaceholder = useFormattedMessage(messages.textPlaceholder);
  const pricePlaceholder = useFormattedMessage(messages.pricePlaceholder);
  const percentPlaceholder = useFormattedMessage(messages.percentPlaceholder);

  return (
    <Card sx={{ marginBottom: (theme) => theme.spacing(3) }}>
      <CardHeaderWrapper
        title={<FormattedMessage {...messages.basicDetail} />}
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabelWrapper htmlFor="product-title">
              <FormattedMessage {...messages.productTitle} />
            </InputLabelWrapper>
            <OutlinedInput
              id="product-title"
              name="title"
              placeholder={textPlaceholder}
              fullWidth
              value={values.title}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.title && errors.title)}
              disabled={disable}
            />
            {touched.title && errors.title && (
              <FormHelperText error id="standard-weight-helper-text-title">
                {errors.title}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <InputLabelWrapper htmlFor="product-description">
              <FormattedMessage {...messages.productDescription} />
            </InputLabelWrapper>
            <OutlinedInput
              id="product-description"
              name="description"
              placeholder={textPlaceholder}
              multiline
              rows={4}
              fullWidth
              value={values.description}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.description && errors.description)}
              disabled={disable}
            />
            {touched.description && errors.description && (
              <FormHelperText
                error
                id="standard-weight-helper-text-description"
              >
                {errors.description}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} lg={4}>
            <InputLabelWrapper htmlFor="rate-price">
              <FormattedMessage {...messages.regularPrice} />
            </InputLabelWrapper>
            <OutlinedInput
              fullWidth
              id="rate-price"
              name="price"
              placeholder={pricePlaceholder}
              value={values.price}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.price && errors.price)}
              disabled={disable}
            />
            {touched.price && errors.price && (
              <FormHelperText error id="standard-weight-helper-text-price">
                {errors.price}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
