// @mui

import { Typography, Grid, Stack, Card, CardHeader } from '@mui/material';

// hooks
import useSettings from 'src/hooks/useSettings';
// layouts
import Layout from 'src/layouts';

import Page from 'src/components/Page';

import { styled } from '@mui/material/styles';
import { AppWidget } from 'src/sections/@dashboard/general/app';
import { BankingRecentTransitions } from 'src/sections/@dashboard/general/banking';
import {
  AnalyticsCurrentVisits,
  AnalyticsNewsUpdate,
  AnalyticsOrderTimeline,
  AnalyticsTasks,
} from 'src/sections/@dashboard/general/analytics';
import NavbarDocs from 'src/layouts/dashboard/navbar/NavbarDocs';

// ----------------------------------------------------------------------

EventGeneral.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export default function EventGeneral() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: Account">
      <Grid container spacing={2}>
        <Grid item md={4}>
          <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
        </Grid>
        <Grid item md={4}>
          <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
        </Grid>
        <Grid item md={4}>
          <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={8}>
          <Stack spacing={3} sx={{ mt: 2, mb: 2 }}>
            <BankingRecentTransitions />
            <AnalyticsTasks />
            <AnalyticsNewsUpdate />
          </Stack>
        </Grid>
        <Grid item sm={4}>
          <Stack spacing={3} sx={{ mt: 2, mb: 2 }}>
            <NavbarDocs />
            <AnalyticsCurrentVisits />
            <AnalyticsOrderTimeline title="Order Timeline" />
          </Stack>
        </Grid>
      </Grid>
    </Page>
  );
}
