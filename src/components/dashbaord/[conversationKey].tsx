import { useEffect } from 'react';
// @mui
import { Card, Container } from '@mui/material';
// redux
import { useDispatch } from 'react-redux';

import { getConversations, getContacts } from 'src/redux/slices/chat';
// routes


// hooks
import useSettings from 'src/hooks/useSettings';

// layouts
import Layout from 'src/layouts';

// components
import Page from '../Page';

// sections

import { ChatSidebar, ChatWindow } from 'src/sections/@dashboard/chat';

// ----------------------------------------------------------------------

Chat.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Chat() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversations());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Page title="Chat">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Card sx={{ height: '72vh', display: 'flex' }}>
          <ChatSidebar />
          <ChatWindow />
        </Card>
      </Container>
    </Page>
  );
}
