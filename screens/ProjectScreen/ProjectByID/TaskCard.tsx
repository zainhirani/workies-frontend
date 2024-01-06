//@ts-nocheck
import { Autocomplete, Avatar, AvatarGroup, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Link, TextField, Typography, styled } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Item } from '.';
import { Person, PersonOutline } from '@mui/icons-material';
import DrawerComponent from 'components/Views/Drawer';
import { Field, Form, Formik } from 'formik';

type TaskCardProps = {
    value: boolean;
    item: Item;
};

function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }
  
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        color:"#fff",
        border:"1px solid",
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  
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
const Priority = [
    {label:"Low",value:"Low"}, 
    {label:"Medium",value:"Medium"}, 
    {label:"High",value:"High"}, 
]
const TaskCard = (prop: TaskCardProps) => {
    const [value, setValue] = useState(false);
    const [open,setOpen] = useState(false);
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Box sx={{ background: '#fff', borderRadius: '10px', boxShadow: (theme)=>theme.shadow.boxShadow, p: 1 }}>
            <Box
                sx={{
                    display: 'flex ',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #edecec',
                    pb: 1,
                    position:"relative"
                }}
            >
                <Link sx={{ textDecoration: 'none', cursor: 'pointer', color: '#333',width:"100%" }}>
                    <Typography sx={{ fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>{prop?.item?.taskName}</Typography>
                </Link>
                <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%', justifyContent: 'flex-end' }} onClick={() => setValue(!value)}>
                    <MoreHorizIcon />
                    {value && 
                    <Box sx={{position:"absolute",top:"60%",right:"5%",display:"grid",background:(theme)=>theme.palette.background.paper,boxShadow:(theme)=>theme.shadow.boxShadow,borderRadius:1}}>
                        <Button variant="text" onClick={handleDrawerOpen} sx={{textTransform:"capitalize",justifyContent:"start"}}>Edit</Button>
                        <Button variant="text" onClick={handleOpen} sx={{textTransform:"capitalize",justifyContent:"start"}}>Delete</Button>
                    </Box>
                    }
                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: '10px',
                }}
            >
                <Box >
                    <Link sx={{ textDecoration: 'none', cursor: 'pointer', color: '#333' }}>
                        <Typography sx={{ fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>{prop?.item?.content}</Typography>
                    </Link>
                    <AvatarGroup max={4} sx={{display:"flex",justifyContent:"start",my:1}}>
                    {prop?.item?.assignee?.map((item)=>(
                        <Avatar  {...stringAvatar(item?.name)} />
                    ))}
                    </AvatarGroup>
                </Box>
            </Box>
            <DrawerComponent title="Task Details" isOpen={isDrawerOpen} onClose={handleDrawerClose}>
            <>
                <Formik
                initialValues={{}}
                onSubmit={(values, actions) => {
                    console.log('Form submitted with values:', values);
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <Grid spacing={1} container alignItems="center" sx={{ mt: 1 }}>
                            <Grid item xs={6}>
                                <Typography sx={LabelStyle}>Task Name</Typography>
                                <Field style={BoxStyle} defaultValue={prop?.item?.taskName} name="TaskName" placeholder="Task Name" />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={LabelStyle}>Task Details</Typography>
                                <Field style={BoxStyle} defaultValue={prop?.item?.content} name="TaskDetail" placeholder="Task Details" />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={LabelStyle}>Deadline</Typography>
                                <Field style={BoxStyle} defaultValue="1/1/2024" name="Deadline" type="date" />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={LabelStyle}>Task Status</Typography>
                                <Field style={BoxStyle} defaultValue="Todo" name="TaskStatus" placeholder="Task Status" />
                            </Grid>
                            <Grid item xs={6}>
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
                            <Grid item xs={6}>
                                <Typography sx={LabelStyle}>Priority</Typography>
                                <Autocomplete
                                    size="small"
                                    renderInput={(params) => <TextField {...params} placeholder="Priority" />}
                                    options={Priority}
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
                     <Grid item my={2} container xs={12}>
                            <Button variant="contained" sx={{borderRadius:"5px"}} onClick={handleDrawerClose}>
                                Update
                            </Button>
                        </Grid>
                </Form>
            </Formik>
                        </>
            </DrawerComponent>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle sx={{ color: 'red' }}>{'Are you sure to delete this task?'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        By deleting this you will lose all the information regarding this task.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="error" sx={{color:"#FFF"}} onClick={handleClose} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default TaskCard;
