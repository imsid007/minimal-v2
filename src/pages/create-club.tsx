// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';

import { Box, Container, Grid, Card, Typography } from '@mui/material';
import { _userCards } from 'src/_mock';
import CustomizedSteppers from 'src/sections/overview/mui/stepper/CustomizedStepper';
import CustomStepper from 'src/components/dashbaord/custom-stepper';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

CreateClub.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout tab={1} variant="club" filter={true}>
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function CreateClub() {
  return (
    <Page title="The starting point for your next project">
      <Container>
        <Grid
          alignItems="center"
          spacing={2}
          container
          style={{ minHeight: '100vh', padding: '100px 0' }}
        >
          <Grid item xs={12} sm={5}>
            <img alt="" style={{ width: '100%', margin: 'auto' }} src="/images/walk.png" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Card sx={{ p: 5, textAlign: 'center' }}>
              <Typography variant="h4">New Club</Typography>
              <Typography sx={{ opacity: 0.72 }}>Few steps to create your community</Typography>
              <CustomStepper />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
