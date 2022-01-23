import { useCallback, useEffect, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  TextField,
  Step,
  Button,
  Stepper,
  StepLabel,
  Typography,
  StepConnector,
  stepConnectorClasses,
  Stack,
  InputAdornment,
  Autocomplete,
  Chip,
} from '@mui/material';
import { StepIconProps } from '@mui/material/StepIcon';
// components

import Iconify from 'src/components/Iconify';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { createClubAPI, getCategoriesAPI } from 'src/api';
import { CreateClubInterface } from 'src/@types/club';
import {  snakize } from 'src/utils/object-ops';
import { useRouter } from 'next/router';
import { PATH_DASHBOARD } from 'src/routes/paths';

// ----------------------------------------------------------------------

const STEPS = ['Step1', 'Step2', 'Step3'];

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
    1: <Iconify icon="mdi:airport" width={24} height={24} />,
    2: <Iconify icon="mdi:airport" width={24} height={24} />,
    3: <Iconify icon="mdi:airport" width={24} height={24} />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

interface ClubCategory {
  id: number;
  name: string;
}

interface GetStepsInterface {
  activeStep: number;
  categories: ClubCategory[];
  setClubName: any;
  setDescription: any;
  setLocality: any;
  setCategory: any;
  setSubCategoryIds: any;
}

function getStepContent({ activeStep, categories, setClubName, setDescription, setLocality, setCategory, setSubCategoryIds }: GetStepsInterface) {
  switch (activeStep) {
    case 0:
      return (
        <Stack spacing={2}>
          <TextField onChange={(e) => setClubName(e.target.value)} fullWidth multiline label="Club Name" />
          <Autocomplete
            disablePortal
            fullWidth
            id="category"
            options={options}
            getOptionLabel={(option) => option}
            onChange={(e, v: ClubCategory) => setLocality(v)}
            renderInput={(params) => <TextField {...params} label="Locality" />}
          />

          <Stack sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{ opacity: 0.72, mb: 2, fontWeight: '500' }}>
              Describe the purpose of group and what you do at your events
            </Typography>

            <TextField onChange={(e) => setDescription(e.target.value)} rows={5} fullWidth multiline label="Describe" />
          </Stack>
        </Stack>
      );
    case 1:
      return (
        <Stack spacing={2} style={{ textAlign: 'left' }}>
          <Typography variant="h6" sx={{ opacity: 0.72, mb: 2, fontWeight: '500' }}>
            Select category of your club
          </Typography>

          <Autocomplete
            disablePortal
            fullWidth
            id="category"
            options={categories}
            getOptionLabel={(option) => option.name}
            onChange={(e, v: ClubCategory) => {setCategory(v.id)}}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />


          <Stack sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{ opacity: 0.72, mb: 2, fontWeight: '500' }}>
              Sub categories.Be specific so that we can recomend to the relevent people
            </Typography>
            <Autocomplete
              multiple
              freeSolo
              onChange={(e, v: ClubCategory[]) => {
                const data = v?.map(a => a.id);
                setSubCategoryIds(data)
              }}
              options={categories}
              getOptionLabel={(option) => option.name}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip {...getTagProps({ index })} key={option.id} size="small" label={option.name} />
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

            <TextField onChange={(e)=>setDescription(e.target.value)} rows={5} fullWidth multiline label="Describe" />
          </Stack>
        </Stack>
      );

    default:
      return 'Unknown step';
  }
}

export default function CustomStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const isMountedRef = useIsMountedRef();
  const [categories, setCategories] = useState<ClubCategory[]>([]);

  const [clubName, setClubName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState();
  const [subCategoryIds, setSubCategoryIds] = useState();
  const [locality, setLocality] = useState("Pune");
  const { push } = useRouter();

  const getCategories = useCallback(async () => {
    getCategoriesAPI().then(response => {
      if (isMountedRef.current) {
        setCategories(response.data);
      }
    });
  }, [isMountedRef]);

  const createClub = () => {
    const data: CreateClubInterface = {
      categoryId: category,
      subCategories: subCategoryIds,
      locality: locality,
      description: description,
      name: clubName
    }
    console.log(data)
    createClubAPI(snakize(data)).then(r=>{
      push(PATH_DASHBOARD.root)
    });
  }

  const handleNext = () => {
    if(activeStep == 2) {
      createClub()
    }else{
      setActiveStep((prevActiveStep: number) => prevActiveStep + 1);  
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  useEffect(() => {
    getCategories();
  }, []);

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
        <Typography sx={{ my: 1 }}>{getStepContent({
          activeStep: activeStep, categories: categories, setClubName: setClubName,
          setDescription: setDescription, setLocality: setLocality, setCategory: setCategory, setSubCategoryIds: setSubCategoryIds
        })}</Typography>
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
