import React from "react";
import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomBarChart from "components/BarChart";
import { revenueChartData, revenueChartKeys } from "./data";

interface RevenueChartProps {
  title?: JSX.Element | string;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ title }) => {
  // local
  var theme = useTheme();

  return (
    <Paper sx={{boxShadow:(theme)=>theme.shadow.boxShadow}}>
      <Typography
        variant="h5"
        color="text"
        sx={{ padding: theme.spacing(3, 3, 0) }}
      >
        {title}
      </Typography>

      <CustomBarChart
        chart={revenueChartData}
        chartKeys={revenueChartKeys}
        legend={true}
        tooltip={true}
      />
    </Paper>
  );
};

export default RevenueChart;
