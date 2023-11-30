// @mui
import {
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Typography,
  CardHeader,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NewsFeed from "components/NewsFeed";
// ----------------------------------------------------------------------

interface listProps {
  id: number;
  title: string;
  description: string;
  image: string;
  postedAt: string;
}

interface NewsUpdateProps {
  title?: JSX.Element | string;
  subheader?: JSX.Element | string;
  button: JSX.Element;
  list: listProps[];
}

const NewsUpdate: React.FC<NewsUpdateProps> = ({
  title,
  subheader,
  list,
  button,
}) => {
  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
        {list.map((news, index) => (
          <NewsFeed
            key={index}
            title={news.title}
            image={news.image}
            description={news.description}
            postedAt={news.postedAt}
          />
        ))}
      </Stack>

      <Divider />

      <Box sx={{ p: 2, textAlign: "right" }}>
        <Button size="small" color="inherit" endIcon={<ChevronRightIcon />}>
          {button}
        </Button>
      </Box>
    </Card>
  );
};

export default NewsUpdate;
