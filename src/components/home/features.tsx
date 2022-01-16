import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { MotionViewport, varFade } from '../animate';
import { m } from 'framer-motion';

const FeaturesList = [
  {
    title: 'Club Management',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, sit sodales mauris porttitor sed felis.',
    background: '#467292',
    shadow: '#4672926e',
    imgUrl: '/icons/club-management.svg',
  },
  {
    title: 'Hasselfree Communications',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, sit sodales mauris porttitor sed felis.',
    background: '#FFB563',
    shadow: '#FFB5636e',
    imgUrl: '/icons/hasselfree.svg',
  },
  {
    title: 'Custom workflows',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, sit sodales mauris porttitor sed felis.',
    background: '#FA5862',
    shadow: '#FA58626e',
    imgUrl: '/icons/custom-workflow.svg',
  },
  {
    title: 'Club Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, sit sodales mauris porttitor sed felis.',
    background: '#942E88',
    shadow: '#942E886e',
    imgUrl: '/icons/club-branding.svg',
  },
  {
    title: 'Mobile App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, sit sodales mauris porttitor sed felis.',
    background: '#106EE8',
    shadow: '#106EE86e',
    imgUrl: '/icons/mobile-app.svg',
  },
];

export default function Features() {
  return (
    <Container component={MotionViewport}>
      <div style={{ background: '#fff', minHeight: '100vh' }}>
        <div
          style={{ maxWidth: '1080px', textAlign: 'center', margin: 'auto', paddingTop: '70px' }}
        >
          <Typography variant="h3" sx={{ mb: 1 }}>
            Features
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: '400', color: 'rgba(102, 102, 102, 1)' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, sit sodales mauris
            porttitor sed felis.
          </Typography>
          <Grid container justifyContent="center">
            {FeaturesList.map((list) => (
              <Grid key={list.title} item xs={12} sm={6} md={4} sx={{ p: 2 }}>
                <m.div variants={varFade().inUp}>
                  <span>
                    <img
                      style={{
                        backgroundColor: list.background,
                        padding: '15px',
                        borderRadius: '15px',
                        margin: '50px auto 20px',
                        boxShadow: `0px 0px 20px ${list.shadow}`,
                      }}
                      alt="feature"
                      src={list.imgUrl}
                    />
                  </span>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {list.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(102, 102, 102, 1)' }}>
                    {list.description}
                  </Typography>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Container>
  );
}
