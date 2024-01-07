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
  Chip,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NewsFeed from "components/NewsFeed";
import TableView from "components/Views/TableView";
// ----------------------------------------------------------------------

interface listProps {
  id: number;
  title: string;
  description: string;
  priority: string;
}

interface TodayTaskProps {
  title?: JSX.Element | string;
  subheader?: JSX.Element | string;
  button: JSX.Element;
  list: listProps[];
}

const TodayTask: React.FC<TodayTaskProps> = ({
  title,
  subheader,
  list,
  button,
}) => {
  const TaskColumn = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      hide:true,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
      renderCell:(params:any)=>{
        const status = params.row.priority;
        return(
            <Chip
            label={status}
            sx={{
              color: status == "High" ? "#e7494a" : "inherit",
              background:"none",
              fontWeight: "700",
            }}
          />
        )
      }
    },
  ];
  return (
    <Card sx={{boxShadow:(theme)=>theme.shadow.boxShadow}}>
        <CardHeader title={title} subheader={subheader} />
        <TableView ID="id" rows={list} columns={TaskColumn} height="50vh" style={{".MuiPaper-root":{borderBottomLeftRadius:0,borderBottomRightRadius:0,boxShadow:"none"}}} />
    </Card>
  );
};

export default TodayTask;
