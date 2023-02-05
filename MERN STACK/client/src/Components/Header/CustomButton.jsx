import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { styled, Box, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { DataContext } from "../../Context/DataProvider";
// components import
import LoginDialog from "../Login/LoginDialog";
import Profile from "./Profile";
import { Link } from "react-router-dom";
const Rightsidewrapper = styled(Box)(({ theme }) => ({
  width: "50%",
  marginLeft: "2%",
  overflow: "overlay",
  [theme.breakpoints.down("md")]: {
    // display: "none",
  },
}));
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  overflow: "overlay",
  [theme.breakpoints.down("md")]: {
    // flexDirection: "column",
    // margin: "10px 0px",
    // width: "80vw",
  },
}));
const Loginbutton = styled("button")(({ theme }) => ({
  background: "#ffffff",
  color: "#2962ff",
  fontWeight: "700",
  fontSize: "17px",
  padding: "7px 30px",
  borderRadius: "2px",
  width: "100px",
  textTransform: "none",
  border: "none",
  [theme.breakpoints.down("md")]: {
    width: "70px",
    height: "30px",
    fontSize: "12px",
    marginTop: "2px",
    marginBottom: "20px",
    padding: "7px 16px",
    objectFit: "cover",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  marginLeft: "20px",
  fontWeight: "bold",
  width: "140px",
  marginTop: "6px",
  [theme.breakpoints.down("md")]: {
    // marginLeft: "10px",
    fontSize: "12px",
  },
}));
const Cart = styled(Typography)(({ theme }) => ({
  paddingLeft: "10",
  [theme.breakpoints.down("md")]: {
    // fontSize: "12px",
  },
}));
const CustomButton = () => {
  const [open, setOpen] = useState(false);
  let { account, toogleAccount } = useContext(DataContext);
  const { cartIteams } = useSelector((state) => state.cart);
  const showdialog = () => {
    setOpen(true);
  };
  return (
    <Rightsidewrapper>
      <Wrapper>
        {account ? (
          <Profile account={account} toogleAccount={toogleAccount} />
        ) : (
          <Loginbutton onClick={showdialog}>Login</Loginbutton>
        )}
        <Text>Become a Seller</Text>
        <Text>More</Text>
        <Box style={{ display: "flex", marginTop: "6px" }}>
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <Badge badgeContent={cartIteams?.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </Link>
          <Cart style={{ paddingLeft: 10 }}>Cart</Cart>
        </Box>
      </Wrapper>
      <LoginDialog open={open} setOpen={setOpen} />
    </Rightsidewrapper>
  );
};

export default CustomButton;
