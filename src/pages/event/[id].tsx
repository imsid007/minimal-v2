import { capitalCase } from 'change-case';
import { useEffect, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Tab, Box, Card, Tabs, Container, Button } from '@mui/material';

// hooks

import useSettings from 'src/hooks/useSettings';
// _mock_
import { _userAbout } from 'src/_mock';
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import Iconify from 'src/components/Iconify';

// sections

import SocialLinks from 'src/components/dashbaord/account//socialLinks';

import { ProfileCover } from 'src/sections/@dashboard/user/profile';
import { getConversations, getContacts } from 'src/redux/slices/chat';
import { useDispatch } from 'src/redux/store';
import ClubGeneral from 'src/components/dashbaord/event/event-general';
import EventDetails from 'src/components/dashbaord/event/event-details';

// ----------------------------------------------------------------------

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

UserProfile.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function UserProfile() {
  const { themeStretch } = useSettings();

  const [currentTab, setCurrentTab] = useState('Event Details');
  const [isOwner, setIsOwner] = useState(true);

  const handleChangeTab = (newValue: string) => {
    setCurrentTab(newValue);
  };

  const CLUB_TABS = [
    {
      value: 'Event Details',
      icon: <Iconify icon={'ic:round-receipt'} width={20} height={20} />,
      component: <EventDetails />,
    },
    {
      value: 'Staticstics',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <ClubGeneral />,
    },

    {
      value: 'social_links',
      icon: <Iconify icon={'eva:share-fill'} width={20} height={20} />,
      component: <SocialLinks myProfile={_userAbout} />,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConversations());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Page title="User: Profile">
      <Container sx={{ mt: 15 }} maxWidth={themeStretch ? false : 'lg'}>
        <Card
          sx={{
            mb: 3,
            height: 280,
            position: 'relative',
          }}
        >
          <ProfileCover myProfile={_userAbout} />

          <Button
            style={{ position: 'absolute', right: '20px', top: '20px', zIndex: '10' }}
            variant="contained"
            startIcon={<Iconify icon={'ic:round-receipt'} width={20} height={20} />}
          >
            Get Ticket
          </Button>
          {isOwner ? (
            <TabsWrapperStyle>
              <Tabs
                value={currentTab}
                scrollButtons="auto"
                variant="scrollable"
                allowScrollButtonsMobile
                onChange={(e, value) => handleChangeTab(value)}
              >
                {CLUB_TABS.map((tab) => (
                  <Tab
                    disableRipple
                    key={tab.value}
                    value={tab.value}
                    icon={tab.icon}
                    label={capitalCase(tab.value)}
                  />
                ))}
              </Tabs>
            </TabsWrapperStyle>
          ) : null}
        </Card>

        {CLUB_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
