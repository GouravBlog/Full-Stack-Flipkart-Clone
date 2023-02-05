import { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import Search from "./Search";
import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
const Headerstyled = styled(AppBar)`
  max-height: 60px;
  background: #2962ff;
  width: 100%;
`;
const Leftsidestyle = styled(Box)(({ theme }) => ({
  marginLeft: "10%",
  marginRight: "0",
  width: "9%",
  [theme.breakpoints.down("md")]: {
    marginLeft: "1%",
  },
}));
const Logoimg = styled("img")(({ theme }) => ({
  width: 85,
  [theme.breakpoints.down("md")]: {
    width: 70,
  },
}));

// const Menubutton = styled(IconButton)(({ theme }) => ({
//   display: "none",
//   [theme.breakpoints.down("md")]: {
//     display: "block",
//   },
// }));

const Header = () => {
  // let [open, setOpen] = useState(false);
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const logo = () => (
  //   <List>
  //     <ListItem Button>
  //       <CustomButton />
  //     </ListItem>
  //   </List>
  // );

  return (
    <Box>
      <Headerstyled>
        <Toolbar style={{ maxHeight: "60", width: "100%" }}>
          {/* <Menubutton color="inherit" onClick={handleOpen}>
            <MenuIcon />
          </Menubutton>
          <Drawer open={open} onClose={handleClose}>
            {logo()}
          </Drawer> */}
          <Leftsidestyle>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Logoimg src={logoURL} alt="logo" />
              <Typography
                style={{
                  fontStyle: "italic",
                  fontSize: 12,
                  display: "flex",
                  color: "#ffffff",
                }}
              >
                Explore
                <Box
                  component="span"
                  style={{ color: "yellow", paddingLeft: 3 }}
                >
                  plus
                </Box>
                <Box>
                  <img
                    src={subURL}
                    alt="sublogo"
                    style={{ width: 10, height: 10, paddingLeft: 2 }}
                  />
                </Box>
              </Typography>
            </Link>
          </Leftsidestyle>

          <Search />
          <CustomButton />
        </Toolbar>
      </Headerstyled>
    </Box>
  );
};

export default Header;
