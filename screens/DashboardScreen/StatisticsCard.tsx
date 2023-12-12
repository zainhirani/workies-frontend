import { Box, Card, Grid, Typography,Button } from "@mui/material";
import { BoxWrapper, IconWrapper } from "./Styled";
import { useThemeContext } from "contexts/ThemeContext";

const StatisticsCard = () => {
  const {theme} = useThemeContext();
  return (
    <Box sx={{m:"40px 0 0 20px"}}>
      <Box sx={{boxShadow:(theme)=>theme.shadow.boxShadow,background:(theme)=>theme.palette.background.paper,p:"20px 20px 0 20px",borderRadius:"10px",backgroundImage:theme =="dark" ? "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))" : ""}}>
      <Typography sx={{color:(theme)=>theme.additionalColors?.lightGrey,fontSize:"20px",display:"flex",gap:"3px"}}>Congratulations <Typography sx={{color:(theme)=>theme.palette.text.primary,fontWeight:"700",fontSize:"20px"}}>Norris!</Typography> 🎉</Typography>
      <Typography sx={{color:(theme)=>theme.palette.text.secondary,fontSize:"16px"}}>Best employee of the month</Typography>
      <Box sx={{display:"flex",gap:"5px"}}>
        <Box>
          <Typography sx={{color:(theme)=>theme.palette.primary.main,fontSize:"30px",fontWeight:"500"}}>All tasks completed</Typography>
          <Typography sx={{color:(theme)=>theme.palette.text.secondary,fontSize:"16px"}}>All projects are on track 🤟🏻</Typography>
          <Button sx={{background:(theme)=>theme.palette.primary.main,color:"#fff",height:"30px",mt:1,"&:hover":{background:(theme)=>theme.palette.primary.main}}}>View Performance</Button>
        </Box>
        <Box sx={{display:"flex",justifyContent:"end",alignItems:"end"}}>
          <img src="achievement.png" height="140px" width="120px" style={{objectFit:"contain"}} />
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default StatisticsCard;
