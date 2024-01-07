import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Box, Button, Card, Typography } from '@mui/material';
import { ArrowBack, ArrowForward, Save } from '@mui/icons-material';
import { useFormik } from 'formik';

interface EmployeeDocumentsProps{
  handlePrev:() => void;
  handleNext: () => void;
  formValues:any;
  setFormValues:any;
  }

const EmployeeDocuments = ({handlePrev,handleNext,formValues,setFormValues}:EmployeeDocumentsProps) => {
    // const { values } = formik;
    const Schema = Yup.object({
      Question0: Yup.string().required('Please select an option'),
      Question1: Yup.string().required('Please select an option'),
      Question2: Yup.string().required('Please select an option'),
      Question3: Yup.string().required('Please select an option'),
      Question4: Yup.string().required('Please select an option'),
      Question5: Yup.string().required('Please select an option'),
    });
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    }, []);
    const { handleSubmit, setFieldValue, errors, touched } = useFormik({
      initialValues: {
        Question0: formValues?.qualificationQuestion?.Question0 || '',
        Question1: formValues?.qualificationQuestion?.Question1 || '',
        Question2: formValues?.qualificationQuestion?.Question2 || '',
        Question3: formValues?.qualificationQuestion?.Question3 || '',
        Question4: formValues?.qualificationQuestion?.Question4 || '',
        Question5: formValues?.qualificationQuestion?.Question5 || ''
      },
      validationSchema: Schema,
      enableReinitialize: true,
      onSubmit: (formsData, { setSubmitting }) => {
        const hasYes = Object.values(formsData).some((value) => value === 'Yes');
          setSubmitting(false);
          setFormValues((prevState:any) => ({
            ...prevState,
            qualificationQuestion: formsData,
          }));
          // nextStep();
  
      }
    })
  return (
    <>
       {/* <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box>
            <Typography sx={{ fontSize: { xs: '22px', md: '26px' }, fontWeight: '500' }}>
              {' '}
              STEP {step}: <span>Employee Documents </span>
            </Typography>
            <Typography sx={{ fontSize: { xs: '16px', md: '18px' }, fontWeight: '400', mt: 1, color: '#8c8c8c' }}>
              {' '}
            </Typography>
          </Box>
        </Box>
        <Box
            sx={{ pt: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Button
              onClick={() => prevStep()}
              startIcon={<ArrowBack />}
              variant="contained"
              sx={{ minWidth: { xs: '100%', sm: 'inherit' } }}
            >
              Previous
            </Button>
            <Box sx={{ width: { xs: '100%', sm: 'inherit' } }}>
              <Button
                type="submit"
               
                variant="contained"
                sx={{ minWidth: { xs: '100%', sm: 'inherit' }, marginTop: { xs: '10px', sm: 'inherit' } }}
              >
                Submit
              </Button>
            </Box>
          </Box>
    </form> */}
      {/* <Typography variant="overline" >
        Account Details
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Email"
            secondary={values.email}
          />
        </ListItem>
      </List>
      <Typography variant="overline">
        Personal Information
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="First Name"
            secondary={values.firstName}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Last Name"
            secondary={values.lastName}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Phone Number"
            secondary={values.phone}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Residence"
            secondary={values.residence}
          />
        </ListItem>
      </List> */}
    </>
  )
}

export default EmployeeDocuments
