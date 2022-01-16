import { Grid, Typography, Stack, Button } from '@mui/material';
import { m } from 'framer-motion';
import { varFade } from '../animate';

export default function HomeHero() {
  return (
    <Grid alignItems="center" justifyContent="center" container style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
        <m.div className="hero-title" variants={varFade().inUp}>
          <Typography variant="h1" sx={{ color: 'common.black' }}>
            The best way to {/* <br /> */}{' '}
            <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
              &nbsp;Organize{' '}
            </Typography>
            your next{' '}
            <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
              Adventure.
            </Typography>
          </Typography>
        </m.div>
        <Typography
          variant="h4"
          sx={{
            color: 'rgba(102, 102, 102, 1)',

            mt: 3,
            mb: 5,
            fontWeight: '500',
          }}
          className="hero-sub-title"
        >
          Organize your rides. treks, overlanders and more in one app.
        </Typography>
        <Stack direction="row">
          <Button
            variant="contained"
            size="large"
            style={{ background: '#212B36', marginRight: '20px' }}
          >
            Features{' '}
          </Button>
          <Button variant="contained" size="large" style={{ background: '#212B36' }}>
            Join waiting List
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={4} order={{ xs: 1, sm: 2 }}>
        <img className="hero-img" src="/images/hero-img.png" />
      </Grid>
    </Grid>
  );
}
