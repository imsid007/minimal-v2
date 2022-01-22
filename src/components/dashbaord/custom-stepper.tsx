import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  TextField,
  Step,
  Paper,
  Button,
  Stepper,
  StepLabel,
  Typography,
  StepConnector,
  stepConnectorClasses,
  MenuItem,
  Grid,
  Stack,
  InputAdornment,
  Autocomplete,
  Chip,
} from '@mui/material';
import { StepIconProps } from '@mui/material/StepIcon';
// components

import Iconify from 'src/components/Iconify';
import { Controller } from 'react-hook-form';

// ----------------------------------------------------------------------

const STEPS = ['Step1', 'Step2', 'Step3'];

const TAGS_OPTION = [
  'Toy Story 3',
  'Logan',
  'Full Metal Jacket',
  'Dangal',
  'The Sting',
  '2001: A Space Odyssey',
  "Singin' in the Rain",
  'Toy Story',
  'Bicycle Thieves',
  'The Kid',
  'Inglourious Basterds',
  'Snatch',
  '3 Idiots',
];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: 'rgb(0, 171, 85)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: 'rgb(0, 171, 85)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    borderRadius: 1,
    backgroundColor: theme.palette.divider,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  zIndex: 1,
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
  ...(ownerState.active && {
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    color: theme.palette.common.white,
    backgroundColor: 'rgb(0, 171, 85)',
  }),
  ...(ownerState.completed && {
    color: theme.palette.common.white,
    backgroundColor: 'rgb(0, 171, 85)',
  }),
}));
const options = ['Pune ', 'Mumbai'];

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <Iconify icon="eva:settings-2-outline" width={24} height={24} />,
    2: <Iconify icon="eva:settings-2-outline" width={24} height={24} />,
    3: <Iconify icon="eva:settings-2-outline" width={24} height={24} />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return (
        <Stack spacing={2}>
          <TextField fullWidth multiline label="Club Name" />
          <TextField
            select
            fullWidth
            label="Select Locality"
            value="Player"
            // onChange={handleChangeCurrency}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="carbon:location-filled" width={24} height={24} />
                </InputAdornment>
              ),
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Stack sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{ opacity: 0.72, mb: 2, fontWeight: '500' }}>
              Describe the purpose of group and what you do at your events
            </Typography>

            <TextField rows={5} fullWidth multiline label="Describe" />
          </Stack>
        </Stack>
      );
    case 1:
      return (
        <Stack spacing={2} style={{ textAlign: 'left' }}>
          <Typography variant="h6" sx={{ opacity: 0.72, mb: 2, fontWeight: '500' }}>
            Select category of your club
          </Typography>
          <TextField
            select
            fullWidth
            placeholder="Bike riding"
            label="Select Locality"
            value="Player"
            // onChange={handleChangeCurrency}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="carbon:location-filled" width={24} height={24} />
                </InputAdornment>
              ),
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Stack sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{ opacity: 0.72, mb: 2, fontWeight: '500' }}>
              Sub categories.Be specific so that we can recomend to the relevent people
            </Typography>
            {/* <Controller
              name="tags"
              control={control}
              render={({ field }) => ( */}
            <Autocomplete
              // {...field}

              multiple
              freeSolo
              // onChange={(event, newValue) => field.onChange(newValue)}
              options={TAGS_OPTION.map((option) => option)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip {...getTagProps({ index })} key={option} size="small" label={option} />
                ))
              }
              renderInput={(params) => <TextField label="Tags" {...params} />}
            />
            {/* )}
            /> */}
          </Stack>
        </Stack>
      );
    case 2:
      return (
        <Stack spacing={2} sx={{ textAlign: 'left' }}>
          <Typography sx={{ opacity: 0.72, mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: '500' }}>
              Almost there!
            </Typography>
            Someone from the expedition tram will review and verify your club before publishing.
            This will help us to better categorizing your club and share with relevent community
            member
          </Typography>

          <Stack sx={{ textAlign: 'left' }}>
            <Typography sx={{ opacity: 0.72, mb: 2 }}>
              Meanwhile(optional),you can provide us additional links or contact details about your
              club which will help us to verify you it quickly
            </Typography>

            <TextField rows={5} fullWidth multiline label="Describe" />
          </Stack>
        </Stack>
      );

    default:
      return 'Unknown step';
  }
}

export default function CustomStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Stepper
        sx={{ mt: 3, mb: 3 }}
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {STEPS.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box>
        <Typography sx={{ my: 1 }}>{getStepContent(activeStep)}</Typography>
      </Box>

      <Box sx={{ textAlign: 'right' }}>
        <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }}>
          {activeStep === STEPS.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </Box>
    </>
  );
}
