import { Box, Button, Chip, Typography } from '@mui/material'
import PageLayout from 'components/PageLayout'
import CustomDialog from 'components/Views/DialogBox'
import { ProjectsData } from 'components/Views/TableData'
import TableView from 'components/Views/TableView'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import CreateProjectForm from './CreateProjectForm'
import { Visibility } from '@mui/icons-material'

const ProjectScreen = () => {
    const router = useRouter();
    const [create,setCreate] = useState(false);

    const handleOpenDialog = () => {
        setCreate(true);
      };
    
      const handleCloseDialog = () => {
        setCreate(false);
      };
      const ProjectColumns = [
        {
          field: "ID",
          headerName: "ID",
          flex: 1,
          minWidth:150,
          hide:true,
        },
        {
          field: "ProjectName",
          headerName: "Project Name",
          flex: 1,
          minWidth:150,
        },
        {
          field: "ProjectDescription",
          headerName: "Project Description",
          flex: 1,
          minWidth:150,
        },
        {
          field: "Assignee",
          headerName: "Assignee",
          flex: 1,
          minWidth:150,
        },
        {
          field: "ProjectProgress",
          headerName: "Project Progress",
          flex: 1,
          minWidth:120,
          renderCell: (params:any) => {
            const status = params?.row?.ProjectProgress;
            return (
              <Chip
                label={status}
                sx={{
                  color: status == "Completed" ? "#719461" : "#e7494a",
                  background: "none",
                  fontWeight: "700",
                }}
              />
            );
          },
        },
        {
            field: "Completion",
            headerName: "Completion Expected",
            flex: 1,
            minWidth:150,
          },
          {
            field: "action",
            headerName: "Action",
            flex: 1,
            renderCell: (params:any) => {
              return (
                <Visibility onClick={()=>router.push(`/projects/${params.row.ID}`)} sx={{cursor:"pointer"}} color="primary" />
              );
            },
          },
      ];
  return (
    <PageLayout>
        <>
            <Box sx={{ml:2, display:"flex",flexDirection:{xs:"column",sm:"row"}, justifyContent:"space-between",alignItems:"center",mt:2,gap:1}}>
                <Typography sx={{fontWeight:"700",color:(theme)=>theme.palette.text.primary,fontSize:"24px"}}>
                    Projects
                </Typography>
                <Button variant='contained' sx={{borderRadius:"5px"}} onClick={handleOpenDialog}>
                    Create Project
                </Button>
            </Box>
            <Box sx={{ml:1}}>
                <TableView columns={ProjectColumns} rows={ProjectsData} ID="ID" url='projects' />
            </Box>
            <CustomDialog open={create} onClose={handleCloseDialog} title='Add Project' content={<CreateProjectForm />} btnText='Create'/>
        </>
    </PageLayout>
  )
}

export default ProjectScreen
