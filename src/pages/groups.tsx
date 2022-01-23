import Layout from '../layouts';
import Page from '../components/Page';
import { Box, Container } from '@mui/material';
import { _userCards } from 'src/_mock';
import { UserCard } from 'src/sections/@dashboard/user/cards';
import TabsHeader from 'src/components/dashbaord/tabs-header';
import { getAllClubsAPI } from 'src/api';
import Club from 'src/@types/club';
import { useEffect, useState } from 'react';
import GroupCard from 'src/sections/@dashboard/user/cards/groupCard';

Groups.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout tab={2} variant="main" filter={true}>
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function Groups() {
  const [clubs, setClubs] = useState<Club[]>();

  const getClubs = () => {
    getAllClubsAPI().then((r) => {
      setClubs(r.data);
      console.log(r.data);
    });
  };

  useEffect(() => {
    getClubs();
  }, []);

  return (
    <Page title="The starting point for your next project">
      <Container sx={{ mt: 25, mb: 10 }} style={{ maxWidth: '1120px' }}>
        <TabsHeader heading="Groups" />
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
          {clubs?.map((club) => (
            <GroupCard key={Math.random()} club={club} />
            // <UserCard key={Math.random()} club={club} />
          ))}
        </Box>
      </Container>
    </Page>
  );
}
