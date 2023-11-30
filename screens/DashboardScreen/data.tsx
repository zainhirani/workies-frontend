import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export const cardData = [
  {
    id: 1,
    title: "Revenue",
    count: "$13,456.5",
    description: "Shipping fees are not included",
    icon: <AttachMoneyIcon sx={{ color: "#088178" }} />,
    backgroundColor: "#CEE6E4",
    color: "#1B8178",
  },
  {
    id: 2,
    title: "Orders",
    count: "53.668",
    description: "Excluding orders in transit",
    icon: <LocalShippingIcon />,
    backgroundColor: "#CCF0D1",
    color: "#00B517",
  },
  {
    id: 3,
    title: "Products",
    count: "9.856",
    description: "In 19 Categories",
    icon: <QrCodeIcon />,
    backgroundColor: "#FFE8D0",
    color: "#FD8E1C",
  },
  {
    id: 4,
    title: "Monthly Earning",
    count: "$6,982",
    description: "Based in your local time.",
    icon: <ShoppingBasketIcon />,
    backgroundColor: "#CFF4E8",
    color: "#0DCAF0",
  },
];

export const revenueChartData = [
  {
    name: "900",
    design: 433,
    development: 208,
    deployment: 408,
    maintenace: 123,
  },
  {
    name: "1200",
    design: 321,
    development: 447,
    deployment: 547,
    maintenace: 345,
  },
  {
    name: "1400",
    design: 783,
    development: 675,
    deployment: 575,
    maintenace: 122,
  },
  {
    name: "1600",
    design: 800,
    development: 734,
    deployment: 634,
    maintenace: 302,
  },
];

export const saleChartData = [
  {
    name: "Jan",
    project1: 18,
    project2: 30,
    project3: 40,
  },
  {
    name: "Feb",
    project1: 20,
    project2: 17,
    project3: 10,
  },
  {
    name: "Mar",
    project1: 4,
    project2: 17,
    project3: 27,
  },
  {
    name: "Apr",
    project1: 3,
    project2: 9,
    project3: 19,
  },
  {
    name: "Jun",
    project1: 20,
    project2: 35,
    project3: 15,
  },
  {
    name: "Jul",
    project1: 25,
    project2: 39,
    project3: 19,
  },
  {
    name: "Aug",
    project1: 31,
    project2: 30,
    project3: 20,
  },
  {
    name: "Sep",
    project1: 25,
    project2: 34,
    project3: 24,
  },
  {
    name: "Oct",
    project1: 22,
    project2: 25,
    project3: 15,
  },
  {
    name: "Nov",
    project1: 20,
    project2: 27,
    project3: 37,
  },
  {
    name: "Dec",
    project1: 9,
    project2: 17,
    project3: 6,
  },
];

// Keys
export const revenueChartKeys = [
  {
    name: "design",
    color: "#5897FB",
  },
  {
    name: "development",
    color: "#5897FB",
  },
  {
    name: "deployment",
    color: "#FF9076",
  },
  {
    name: "maintenance",
    color: "#D85DF7",
  },
];

export const saleChartKeys = [
  {
    id: "colorSales",
    name: "project1",
    color: "#8884d8",
    dot: "#4e45ff",
  },
  {
    id: "colorVisitors",
    name: "project2",
    color: "#82ca9d",
    dot: "#22e46b",
  },
  {
    id: "colorProject",
    name: "project3",
    color: "#FFC8E6",
    dot: "#ff2ea0",
  },
];

// NewsUpdate
export const newsData = [
  {
    id: 1,
    title: "Project 1",
    description: "John Doe",
    image: "https://picsum.photos/200",
    postedAt: "about 12 hours ago",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Michael",
    image: "https://picsum.photos/400",
    postedAt: "about 2 hours ago",
  },
  {
    id: 3,
    title: "Project 3",
    description: "David",
    image: "https://picsum.photos/300",
    postedAt: "about 12 hours ago",
  },
  {
    id: 4,
    title: "Project 4",
    description: "John Michael",
    image: "https://picsum.photos/200/300",
    postedAt: "about 23 hours ago",
  },
];

export const orderData = [
  {
    id: 1,
    time: "15 Oct 2022 4:24 AM",
    title: "Requirement Gathering",
    type: "order1",
  },
  {
    id: 2,
    title: "Designing",
    time: "30 Sep 2022 10:54 PM",
    type: "order2",
  },
  {
    id: 3,
    title: "Development",
    time: "17 Jan 2023 8:28 AM",
    type: "order3",
  },
  {
    id: 4,
    title: "Deployment",
    time: "14 Feb 2022 10:49 AM",
    type: "order4",
  },
];
