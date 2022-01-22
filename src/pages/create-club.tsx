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
        <Grid alignItems="center" spacing={2} container style={{ minHeight: '100vh' }}>
          <Grid item xs={12} sm={5}>
            <img
              alt=""
              style={{ width: '100%', margin: 'auto' }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1qPL-Aqv1BIE1DHGyvaN5PHHiGWMG3I11Q&usqp=CAU"
            />
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
