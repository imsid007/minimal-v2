import { Grid, Typography, Button } from '@mui/material';
import React from 'react';

const descriptionList = [
  {
    title: 'Club Management',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique consequat enim etiam consequat lobortis. Tortor massa morbi egestas tristique. In neque massa morbi placerat et diam etiam nisi tristique.',
    cta: '#',
    imageUrl: '/images/home/club-management.svg',
    layout: 'left',
  },

  {
    title: 'Hasselfree Communications',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique consequat enim etiam consequat lobortis. Tortor massa morbi egestas tristique. In neque massa morbi placerat et diam etiam nisi tristique.',
    cta: '#',
    imageUrl: '/images/home/hasselfree.svg',
    layout: 'right',
  },
  {
    title: 'Custom Workflows',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique consequat enim etiam consequat lobortis. Tortor massa morbi egestas tristique. In neque massa morbi placerat et diam etiam nisi tristique.',
    cta: '#',
    imageUrl: '/images/home/custom-workflow.svg',
    layout: 'left',
  },
  {
    title: 'Club Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique consequat enim etiam consequat lobortis. Tortor massa morbi egestas tristique. In neque massa morbi placerat et diam etiam nisi tristique.',
    cta: '#',
    imageUrl: '/images/home/club-branding.svg',
    layout: 'right',
  },
  {
    title: 'Mobile App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique consequat enim etiam consequat lobortis. Tortor massa morbi egestas tristique. In neque massa morbi placerat et diam etiam nisi tristique.',
    cta: '#',
    imageUrl: '/images/home/mobile-app.svg',
    layout: 'left',
  },
];

export default function FeaturesDescriptopn() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <Typography variant="h3" sx={{ mb: 1, mt: 1 }}>
            Lorem ipsum
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: '400', color: 'rgba(102, 102, 102, 1)' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, sit sodales mauris
            porttitor sed felis.
          </Typography>
        </div>
        {descriptionList.map((item) =>
          item.layout == 'left' ? (
            <Grid sx={{ mt: 10 }} key={Math.random()} container alignItems="center">
              <Grid item xs={12} md={6}>
                <img className="features-description-img" src={item.imageUrl} />
              </Grid>
              <Grid className="feature-description-right" item xs={12} md={6} sx={{ p: 2 }}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography
                  variant="h6"
                  sx={{ mt: 2, mb: 4, fontWeight: '400', color: 'rgba(102, 102, 102, 1)' }}
                >
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  style={{ background: '#212B36', marginRight: '20px' }}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid sx={{ mt: 10 }} key={Math.random()} container alignItems="center">
              <Grid
                item
                xs={12}
                md={6}
                className="feature-description-left"
                sx={{ p: 2 }}
                order={{ xs: 2, sm: 1 }}
              >
                <Typography variant="h4">{item.title}</Typography>
                <Typography
                  variant="h6"
                  sx={{ mt: 2, mb: 4, fontWeight: '400', color: 'rgba(102, 102, 102, 1)' }}
                >
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  style={{ background: '#212B36', marginRight: '20px' }}
                >
                  Learn More
                </Button>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, sm: 2 }}>
                <img className="features-description-img" src={item.imageUrl} />
              </Grid>
            </Grid>
          )
        )}
      </div>
    </div>
  );
}
