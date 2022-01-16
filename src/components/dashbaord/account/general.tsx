// @mui

import { Grid, Container, Typography } from '@mui/material';
import { _addressBooks } from 'src/_mock';

// hooks
import useSettings from 'src/hooks/useSettings';
// layouts
import Layout from 'src/layouts';

import Page from 'src/components/Page';
import AccountUserNewForm from './userfrom';

import AccountBillingAddressBook from 'src/components/dashbaord/account/accountbilling';
import { styled } from '@mui/material/styles';
import { RHFUploadSingleFile } from 'src/components/hook-form';

// ----------------------------------------------------------------------

General.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function General() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: Account">
      <Container sx={{ mt: 0 }} maxWidth={themeStretch ? false : 'lg'}>
        <Grid item xs={12}>
          <div>
            {/* <LabelStyle>Cover</LabelStyle> */}
            <RHFUploadSingleFile name="cover" accept="image/*" maxSize={3145728} />
          </div>
        </Grid>

        <AccountUserNewForm />
        <Grid container sx={{ mt: 2, mb: 5 }} spacing={2}>
          <Grid item md={4}>
            {null}
          </Grid>
          <Grid item xs={12} md={8}>
            <AccountBillingAddressBook addressBook={_addressBooks} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
