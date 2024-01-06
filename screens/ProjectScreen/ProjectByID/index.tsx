import React, { useState } from 'react';
//@ts-ignore
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Button, Grid, Typography,Box } from '@mui/material';

import TaskCard from './TaskCard';
import PageLayout from 'components/PageLayout';
import CustomDialog from 'components/Views/DialogBox';
import CreateTaskForm from './CreateTaskForm';

export interface Item {
    id: string;
    Income: number;
    content: string;
    followUp: string;
    closeDate: string;
    agentName: string;
    assignee: {
      name: string;
    }[];
    taskName: string;
    daysOpen: number;
    estimatedPremium: string;
    interestLevel: 'hot' | 'cold' | 'warm' | 'unknown';
}

interface List {
    id: string;
    title: string;
    items: Item[];
    color: string;
    heading?: string;
    borderRadius?: string;
    bg?: string;
}
const HeadingStyle = {
    fontSize: '14px',
    color: 'white',
    fontWeight: 400
};
const HeaderStyle = {
    height: '40px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 1
};

const listContainer = {
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
    width: '300px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    marginBottom: '10px',
    paddingBottom: '10px'
};

const ProjectByIDScreen: React.FC = () => {
    // const themes = useTheme();
    const initialLists: List[] = [
        {
            id: '1',
            title: 'Todo',
            bg: '#fcebe2',
            items: [
                {
                    id: 'item-1',
                    content: 'Task 1 Details',
                    Income: 200,
                    followUp: '02/08/22',
                    closeDate: '02/25/23',
                    agentName: 'John',
                    taskName: 'Task 1',
                    daysOpen: 6,
                    estimatedPremium: '10',
                    interestLevel: 'hot',
                    assignee:[{name:"A BC"},{name:"D EF"}]
                }
            ],
            color: '#EB712C',
            heading: 'Prospect',
            borderRadius: '20px 0 0 0'
        },
        {
            id: '2',
            title: 'Inprogress',
            bg: '#fffbee',
            items: [
                {
                    id: 'item-3',
                    content: 'Task 2 Details',
                    Income: 400,
                    followUp: '12/25/22',
                    closeDate: '02/21/23',
                    agentName: 'Michael',
                    taskName: 'Task 2',
                    daysOpen: 6,
                    estimatedPremium: '10',
                    interestLevel: 'cold',
                    assignee:[{name:"A BC"},{name:"D EF"}]
                }
            ],
            color: '#e2aa00',

            heading: 'Prospect'
        },
        {
            id: '3',
            title: 'Completed',
            bg: '#fcebe2',
            items: [
                {
                    id: 'item-4',
                    content: 'Task 3 Details',
                    Income: 100,
                    followUp: '12/25/22',
                    closeDate: '02/21/23',
                    agentName: 'Doe',
                    taskName: 'Task 3',
                    daysOpen: 6,
                    estimatedPremium: '10',
                    interestLevel: 'warm',
                    assignee:[{name:"A BC"},{name:"D EF"}]
                }
            ],
            color: '#EB712C',
            heading: 'Prospect',
            borderRadius: '0 20px 0 0'
        },
    ];
    const [lists, setLists] = useState<List[]>(initialLists);
    const [create,setCreate] = useState(false);

    const handleOpenDialog = () => {
        setCreate(true);
      };
    
      const handleCloseDialog = () => {
        setCreate(false);
      };

    const handleDragEnd = (result: DropResult): void => {
        if (!result.destination) return;

        const updatedLists = [...lists];
        const sourceListIndex = lists.findIndex((list) => list.id === result.source.droppableId);
        const destinationListIndex = lists.findIndex((list) => list.id === result?.destination?.droppableId);
        const [movedItem] = updatedLists[sourceListIndex].items.splice(result.source.index, 1);
        updatedLists[destinationListIndex].items.splice(result.destination.index, 0, movedItem);
        setLists(updatedLists);
    };

    return (
        <PageLayout>
            <>
            <Box sx={{ml:2}}>
            <Typography sx={{fontWeight:"700",color:(theme)=>theme.palette.text.primary,fontSize:"24px"}}>
                    Projects
                </Typography> 
            </Box>
            <Grid container sx={{ml:2, display:"flex",justifyContent:"space-between",alignItems:"center",mt:2}}>
                <Grid item xs={6} sx={{display:"flex",justifyContent:"space-between",gap:"10px"}}>
                <Typography sx={{fontWeight:"500",color:(theme)=>theme.palette.text.secondary,fontSize:"18px"}}>
                    Project Name: <span style={{fontWeight:600}}>Workies</span>
                </Typography>
                <Typography sx={{fontWeight:"500",color:(theme)=>theme.palette.text.secondary,fontSize:"18px"}}>
                    Recurring Meeting Time: <span style={{fontWeight:600}}>12:00</span>
                </Typography>
                </Grid>
                <Grid item xs={6} sx={{display:"flex",gap:"10px",justifyContent:"center"}}>
                <Button variant='contained' sx={{borderRadius:"5px"}}>
                    Quick Meeting
                </Button>
                <Button variant='contained' onClick={handleOpenDialog} sx={{borderRadius:"5px"}}>
                    Create Task
                </Button>
                </Grid>
            </Grid>
            <Box ml={1} mt={3}>
            <DragDropContext onDragEnd={handleDragEnd}>
                <div style={{display:"flex",justifyContent:"space-between",width:"fit-content"}}>
                    {lists.map((list) => {
                        const itemCount = list.items.length;
                        const totalIncome = list.items.reduce((acc, item) => acc + item.Income, 0);
                        return (
                            <Box sx={{ display: 'flex', flexDirection: 'column', mr: 2,p:1, }}>
                                <Box
                                    sx={{
                                        ...HeaderStyle,
                                        // borderTop: `3px solid ${list.color}`,
                                        boxShadow: (theme)=>theme.shadow.boxShadow,
                                        p:2,
                                        // background: list.bg,
                                        // borderBottom: `1px solid ${list.color}`
                                    }}
                                >
                                    <Typography sx={{ ...HeadingStyle, color: (theme)=>theme.palette.text.secondary }}>
                                        <span style={{ fontWeight: '600',fontSize: '20px', }}>{list.title}</span>{' '}
                                        {/* <span style={{ fontWeight: '400' }}>({itemCount})</span> */}
                                    </Typography>
                                    {/* <Typography sx={{ fontSize: '22px', color: list.color, fontWeight: '600' }}>${totalIncome}</Typography> */}
                                </Box>

                                <Droppable key={list.id} droppableId={list.id}>
                                    {(provided:any) => (
                                        <Box
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            sx={{ height: '70vh', overflow: 'scroll', ...listContainer, boxShadow: 1 }}
                                        >
                                            {list.items.map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided:any) => (
                                                        <Box
                                                            sx={{ px: 1, pt: 2 }}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            {/* {item.content} */}
                                                            <TaskCard value={false} item={item} />
                                                        </Box>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {itemCount < 1 && <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}><Typography sx={{fontWeight:500,color:(theme)=>theme.palette.text.primary}}>No tasks yet!</Typography></Box>}
                                            {provided.placeholder}
                                        </Box>
                                    )}
                                </Droppable>
                            </Box>
                        );
                    })}
                </div>
            </DragDropContext>
            <CustomDialog open={create} onClose={handleCloseDialog} title='Add Task' content={<CreateTaskForm />} btnText='Create'/>
            </Box>
            </>
        </PageLayout>
    );
};
export default ProjectByIDScreen;
