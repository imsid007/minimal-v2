// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Avatar, Typography, Stack, AvatarGroup, SvgIcon } from '@mui/material';
// utils
import cssStyles from '../../../../utils/cssStyles';

// @types
import { UserData } from '../../../../@types/user';
// components
import Image from '../../../../components/Image';

import SvgIconStyle from '../../../../components/SvgIconStyle';
import TextIconLabel from 'src/components/TextIconLabel';

import Iconify from 'src/components/Iconify';
import Link from 'next/link';
import Club from 'src/@types/club';
import { getClubs } from 'src/redux/slices/club';

// ----------------------------------------------------------------------

const OverlayStyle = styled('div')(({ theme }) => ({
  ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
  top: 0,
  zIndex: 8,
  content: "''",
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------
type Props = {
  club: Club;
};

export default function GroupCard({ club }: Props) {
  const { id, name, description, category, coverImage, logo } = club;

  return (
    <Card sx={{ textAlign: 'left', cursor: 'pointer' }}>
      <Box sx={{ position: 'relative' }}>
        <SvgIconStyle
          src="https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg"
          sx={{
            width: 144,
            height: 62,
            zIndex: 10,
            left: 0,
            bottom: -26,
            mx: 'auto',
            position: 'absolute',
            color: 'background.paper',
          }}
        />
        <Avatar
          alt={name}
          src={logo}
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 40,
            bottom: -32,
            mx: 'auto',
            position: 'absolute',
          }}
        />
        <OverlayStyle />
        <Image src={coverImage} alt={name} ratio="16/9" />
      </Box>
      <Box style={{ padding: '20px' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 6 }}>
          CHANDIGARH, IN
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: '600' }}>
          Carrier & Business
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <Link href="#">
            <u>Carrier & Business</u>
          </Link>
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
          Chandigarh Entrepreneurs Group • Chandigarh, IN
        </Typography>
        <Stack
          style={{ marginTop: '20px', padding: '0 15px' }}
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <AvatarGroup
            max={5}
            sx={{
              '& .MuiAvatar-root': { width: 32, height: 32 },
            }}
            spacing="small"
          >
            <Avatar
              alt="Remy Sharp"
              src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_6.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_7.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_8.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg"
            />
          </AvatarGroup>

          <div>
            <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
              <TextIconLabel
                sx={{ mr: 2 }}
                icon={
                  <SvgIcon color="action" style={{ width: '15px' }}>
                    <Iconify sx={{ mr: '2' }} icon={'bi:calendar-check'} width={15} height={15} />
                  </SvgIcon>
                }
                value={<Typography sx={{ ml: 1 }}>45</Typography>}
              />
              <TextIconLabel
                icon={
                  <SvgIcon color="action" style={{ width: '15px' }}>
                    <Iconify icon={'fa-solid:share-alt'} width={10} height={24} />
                  </SvgIcon>
                }
                value={<Typography sx={{ ml: 1 }}>20</Typography>}
              />
            </Stack>
          </div>
        </Stack>
      </Box>
    </Card>
  );
}
