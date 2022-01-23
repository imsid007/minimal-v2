// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';

import { Box, Container } from '@mui/material';
import { _userCards } from 'src/_mock';
import { UserCard } from 'src/sections/@dashboard/user/cards';
import TabsHeader from 'src/components/dashbaord/tabs-header';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout tab={1} variant="main" filter={true}>
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      <Container sx={{ mt: 25, mb: 10 }} style={{ maxWidth: '1120px' }}>
        <TabsHeader heading="Events" />
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {_userCards.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Box>
      </Container>
    </Page>
  );
}
