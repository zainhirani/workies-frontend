import React from "react";
import Link from "next/link";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { LOGO } from "configs";
import Image from "theme/Image";
import MenuData from "./navLinks";
import { DrawerHeader } from "./Styled";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";
interface BarComponentProps {
  open?: boolean;
  clickHandler?: any;
}

const DrawerContent: React.FC<BarComponentProps> = ({ open, clickHandler }) => {
  const router = useRouter();
  const isActiveRoute = (route: string) => {
    return router.pathname == route || router.pathname.includes(route);
  };
  return (
    <>
      <DrawerHeader>
        <Box
          sx={{
            height: 50,
            display: "flex",
            position: "relative",
            width: "100%",
            justifyContent: "start",
            alignItems: "center",
            marginLeft: "10px;",
            cursor:"pointer"
          }}
          onClick={()=>router.push("/")}
        >
          <Typography sx={{ fontWeight: "500", fontSize: "24px",display: {xs:"none", sm: open ? "block" : "none"} }}>
            Workies
          </Typography>
        </Box>
        <IconButton sx={{mr: open ? "0" : "-10px"}} onClick={clickHandler}>
         {open ? (<> <KeyboardArrowLeftOutlinedIcon
            sx={{ color: "rgba(76,78,100,0.68)", marginRight: "-18px" }}
          />
          <KeyboardArrowLeftOutlinedIcon
            sx={{ color: "rgba(76,78,100,0.38)" }}
          /></>) : (<> 
          <KeyboardArrowRightOutlined sx={{ color: "rgba(76,78,100,0.68)", marginRight: "-18px" }}/>
          <KeyboardArrowRightOutlined sx={{ color: "rgba(76,78,100,0.38)" }}/>
          </>
          )
          }
        </IconButton>
      </DrawerHeader>
      <List sx={{ ml: open ? "10px" : 0 }}>
        {MenuData.map((item: any) => (
          <Link href={item.link} key={item.title} passHref={true}>
            <ListItem sx={{ backgroundColor: isActiveRoute(item.link) ? (theme)=>theme.additionalColors?.greyWhite : "initial", color: isActiveRoute(item.link) ? "#fff" : "initial", "&:hover": {background: (theme)=>theme.additionalColors?.greyWhite,color:"#fff"}}}
                key={item.title} disablePadding>
              <ListItemButton sx={{ gap: "10px" }}>
                <ListItemIcon sx={{ minWidth: "max-content",color:isActiveRoute(item.link) ? "#fff" : "inherit","&:hover":{color:"#fff"} }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default DrawerContent;
