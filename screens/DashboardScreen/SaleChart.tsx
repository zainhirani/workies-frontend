import React from "react";
import { Paper, Select, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomAreaChart from "components/AreaChart";
import { saleChartData, saleChartKeys } from "./data";

interface SaleChartProps {
  title?: JSX.Element | string;
}

const SaleChart: React.FC<SaleChartProps> = ({ title }) => {
  // local
  var theme = useTheme();

  return (
    <Paper>
      <Typography
        variant="h5"
        color="text"
        sx={{ padding: theme.spacing(3, 3, 0) }}
      >
        {title}
      </Typography>

      <CustomAreaChart
        chart={saleChartData}
        chartKeys={saleChartKeys}
        legend={true}
        tooltip={true}
      />
    </Paper>
  );
};

export default SaleChart;
