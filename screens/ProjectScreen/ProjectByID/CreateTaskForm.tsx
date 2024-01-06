import React from 'react'
import { Grid, Typography, Autocomplete, TextField, Button, styled } from '@mui/material';
import { Formik, Form, Field } from 'formik';

const GroupItems = styled('ul')({
    padding: 0
});
const LabelStyle = {
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '5px'
};
const BoxStyle = {
    width: '100%',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #e3e3e3',
    fontSize: '13px',
    outline: 'none',
    boxSizing: 'border-box',
    height: '40px',
    boxShadow: '0 0 5px 0px #d6d6d682'
};
const Assignees = [
    {label:"AB C",value:"AB C"}, 
    {label:"DE F",value:"DE F"}, 
]
const Status = [
    {label:"Todo",value:"Todo"}, 
    {label:"Inprogress",value:"Inprogress"}, 
    {label:"Completed",value:"Completed"}, 
]

const CreateTaskForm = () => {
  return (
    <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
            console.log('Form submitted with values:', values);
            actions.setSubmitting(false);
        }}
    >
        <Form>
            <Grid spacing={1} container alignItems="center" sx={{ mt: 1 }}>
                    <Grid item xs={4}>
                        <Typography sx={LabelStyle}>Task Name</Typography>
                        <Field style={BoxStyle} name="TaskName" placeholder="Enter Task Name" />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={LabelStyle}>Task Details</Typography>
                        <Field style={BoxStyle} name="TaskDetail" placeholder="Enter Task Details" />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={LabelStyle}>Task Document</Typography>
                        <Field style={BoxStyle} name="TaskDocument" type="file" />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={LabelStyle}>Deadline</Typography>
                        <Field style={BoxStyle} name="Deadline" type="date" />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={LabelStyle}>Assignee</Typography>
                        <Autocomplete
                            size="small"
                            multiple
                            renderInput={(params) => <TextField {...params} placeholder="Assignee" />}
                            options={Assignees}
                            getOptionLabel={(option) => option.label}
                            renderGroup={(params) => {
                                console.log(params);
                                return (
                                    <li key={params.key}>
                                        <GroupItems>{params.children}</GroupItems>
                                    </li>
                                );
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={LabelStyle}>Task Status</Typography>
                        <Autocomplete
                            size="small"
                            renderInput={(params) => <TextField {...params} placeholder="Task Status" />}
                            options={Status}
                            getOptionLabel={(option) => option.label}
                            renderGroup={(params) => {
                                console.log(params);
                                return (
                                    <li key={params.key}>
                                        <GroupItems>{params.children}</GroupItems>
                                    </li>
                                );
                            }}
                        />
                    </Grid>
                </Grid>
        </Form>
    </Formik>
  )
}

export default CreateTaskForm
