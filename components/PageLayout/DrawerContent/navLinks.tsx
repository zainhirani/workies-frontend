import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const MenuData = [
  {
    title: "Chat",
    icon: <ChatBubbleOutlineOutlinedIcon />,
    link: "/app/chat",
  },
  {
    title: "Attendance",
    icon: <CalendarTodayOutlinedIcon />,
    link: "/app/attendance",
  },
  {
    title: "Meet In",
    icon: <GroupsOutlinedIcon />,
    link: "/app/meetin",
  },
  {
    title: "Project",
    icon: <AssignmentOutlinedIcon />,
    link: "/app/project",
  },
  {
    title: "Profile",
    icon: <PersonOutlineOutlinedIcon />,
    link: "/app/profile",
  },
];

export default MenuData;
