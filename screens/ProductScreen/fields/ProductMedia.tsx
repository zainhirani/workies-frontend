import {
  Card,
  CardContent,
  FormHelperText,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

import { UPLOAD } from "configs";
import {
  CardHeaderWrapper,
  InputLabelWrapper,
} from "screens/ProductScreen/Styled";
import FormattedMessage from "theme/FormattedMessage";
import Image from "theme/Image";

import { ProductsProps } from "./formProps";
import messages from "../ProductAdd/messages";

export const ProductMedia: React.FC<ProductsProps> = ({
  touched,
  values,
  errors,
  handleBlur,
  handleChange,
  disable,
}) => {
  return (
    <Card sx={{ marginBottom: (theme) => theme.spacing(3) }}>
      <CardHeaderWrapper
        title={<FormattedMessage {...messages.mediaDetail} />}
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabelWrapper
              htmlFor="media-upload"
              sx={{ textAlign: "center" }}
              disabled={disable}
            >
              <Image
                height={100}
                width={100}
                alt="upload-img"
                lazyLoadProps={{ height: 100 }}
                src={UPLOAD}
                lazyLoad={true}
              />
            </InputLabelWrapper>
            <OutlinedInput
              fullWidth
              type="file"
              id="media-upload"
              name="image"
              inputProps={{ accept: "image/*" }}
              onBlur={handleBlur}
              onChange={handleChange}
              disabled={disable}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
