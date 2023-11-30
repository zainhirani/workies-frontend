import { Box, Grid, Typography } from "@mui/material";
import PageLayout from "components/PageLayout";
import FormattedMessage from "theme/FormattedMessage";

import { cardData, newsData, orderData } from "./data";
import LatestOrder from "./LatestOrder";
import messages from "./messages";
import NewsUpdate from "./NewsUpdate";
import OrderTimeline from "./OrderTimeline";
import RevenueChart from "./RevenueChart";
import SaleChart from "./SaleChart";
import StatisticsCard from "./StatisticsCard";

const DashboardScreen: React.FC = () => {
  return (
    <>
      <PageLayout>
        <Box sx={{ padding: "20px",background:theme=>theme.palette.background.default }}>
          <Grid container spacing={3} mb={3}>
            <StatisticsCard />
          </Grid>
                    <Grid container spacing={3} mb={3}>
            <Grid item sm={12} md={8}>
              <NewsUpdate
                title={<FormattedMessage {...messages.newsTitle} />}
                subheader={<FormattedMessage {...messages.newsSubTitle} />}
                button={<FormattedMessage {...messages.newsButton} />}
                list={newsData}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <OrderTimeline
                title={<FormattedMessage {...messages.orderTimelineTitle} />}
                subheader={
                  <FormattedMessage {...messages.orderTimelineSubTitle} />
                }
                list={orderData}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} mb={3}>
            <Grid item sm={12} md={8}>
              <SaleChart title={<FormattedMessage {...messages.saleTitle} />} />
            </Grid>

            <Grid item sm={12} md={4}>
              <RevenueChart
                title={<FormattedMessage {...messages.revenueTitle} />}
              />
            </Grid>
          </Grid>

          {/* <Grid container spacing={3} mb={3}>
            <Grid item sm={12}>
              <LatestOrder
                title={<FormattedMessage {...messages.orderTitle} />}
              />
            </Grid>
          </Grid> */}
        </Box>
      </PageLayout>
    </>
  );
};

export default DashboardScreen;
