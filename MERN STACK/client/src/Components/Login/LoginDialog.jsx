import React, { useState, useContext } from "react";
import {
  Box,
  Dialog,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { authenticateUser, authenticatelogin } from "../../service/api";
import { DataContext } from "../../Context/DataProvider";
const Components = styled(Box)`
  display: flex;
  height: 83vh;
  width: 50vw;
`;
const Leftwrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#1976d2",
  backgroundImage:
    'url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png")',
  backgroundPosition: "center 83%",
  backgroundRepeat: "no-repeat",
  width: "40%",
  padding: "10px",
  color: "#f2f2f2",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const Rightwrapper = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px 18px;
  width: 50%;
`;
const Loginbutton = styled(Button)`
  background: #ff6d00;
  color: #f2f2f2;
  font-weight: 600;
  text-tranform: none;
  border-radius: 2px;
  margin-top: 12px;
  padding: 12px;
  height: 50px;
`;
const Requestbutton = styled(Button)`
  font-weight: 600;
  text-tranform: none;
  border-radius: 2px;
  margin-top: 15px;
  padding: 12px;
  box-shadow: 0px 2px 4px 0px #bdbdbd;
  height: 50px;
`;
const accountInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};
const signupInitialValue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const loginInitialValue = {
  firstnamename: "",
  password: "",
};
// main component logindialogbox
const LoginDialog = ({ open, setOpen }) => {
  // use state hook
  let [account, setAccount] = useState(accountInitialValue.login);
  let [signup, setSignup] = useState(signupInitialValue);
  let [login, setLogin] = useState(loginInitialValue);
  let { toogleAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    setAccount(accountInitialValue.login);
  };
  const showSignup = () => {
    setAccount(accountInitialValue.signup);
  };
  // input fuction
  const inputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const userSignUp = async () => {
    let response = await authenticateUser(signup);
    if (!response) return;
    handleClose();
    toogleAccount(signup.firstname);
  };
  const loginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const userLogin = async () => {
    let response = await authenticatelogin(login);
    if (!response) return;
    handleClose();
    toogleAccount(login.firstname);
    console.log(response);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Components>
        <Leftwrapper>
          <Typography
            variant="h5"
            style={{
              marginTop: "30px",
              marginLeft: "20px",
              fontWeight: "600",
              fontSize: "28px",
            }}
          >
            {account.heading}
          </Typography>
          <Typography
            style={{ marginTop: "12px", marginLeft: "20px", fontWeight: "600" }}
          >
            {account.subHeading}
            <br />
            Orders, Wishlist and <br />
            Recommendations
          </Typography>
        </Leftwrapper>
        {account.view === "login" ? (
          <Rightwrapper>
            <TextField
              label={"Enter firstname"}
              onChange={(e) => loginChange(e)}
              name="firstname"
              variant={"standard"}
              style={{ marginTop: "15px" }}
            />
            <TextField
              label={"Enter Password"}
              onChange={(e) => loginChange(e)}
              name="password"
              variant={"standard"}
              style={{ marginTop: "15px" }}
            />
            <Typography style={{ marginTop: "40px", fontSize: "13px" }}>
              By continuing, you agree to Flipkart's{" "}
              <Box
                component="span"
                style={{ color: "#2979ff", cursur: "pointer" }}
              >
                Terms of Use
              </Box>{" "}
              and{" "}
              <Box
                component="span"
                style={{ color: "#2979ff", cursur: "pointer" }}
              >
                Privacy Policy.
              </Box>
            </Typography>
            <Loginbutton onClick={() => userLogin()}>Login</Loginbutton>
            <Typography style={{ marginTop: "15px", textAlign: "center" }}>
              OR
            </Typography>
            <Requestbutton>Request OTP</Requestbutton>
            <Typography
              style={{
                marginTop: "35%",
                textAlign: "center",
                color: "#2979ff",
                cursur: "pointer",
                fontWeight: "600",
              }}
              onClick={() => showSignup()}
            >
              New to Flipkart? Create an account
            </Typography>
          </Rightwrapper>
        ) : (
          <Rightwrapper>
            <TextField
              label={"Enter Your Firstname"}
              variant={"standard"}
              onChange={(e) => inputChange(e)}
              name="firstname"
              style={{ marginTop: "15px" }}
            />
            <TextField
              label={"Enter Your Lastname"}
              variant={"standard"}
              onChange={(e) => inputChange(e)}
              name="lastname"
              style={{ marginTop: "15px" }}
            />
            <TextField
              label={"Enter Username"}
              variant={"standard"}
              onChange={(e) => inputChange(e)}
              name="username"
              style={{ marginTop: "15px" }}
            />
            <TextField
              label={"Enter Email"}
              variant={"standard"}
              onChange={(e) => inputChange(e)}
              name="email"
              style={{ marginTop: "15px" }}
            />
            <TextField
              label={"Enter Password"}
              variant={"standard"}
              onChange={(e) => inputChange(e)}
              name="password"
              style={{ marginTop: "15px" }}
            />
            <TextField
              label={"Enter Your Phone"}
              variant={"standard"}
              onChange={(e) => inputChange(e)}
              name="phone"
              style={{ marginTop: "15px" }}
            />
            <Loginbutton
              style={{ marginTop: "35px" }}
              onClick={() => userSignUp()}
            >
              Continue
            </Loginbutton>
          </Rightwrapper>
        )}
      </Components>
    </Dialog>
  );
};
export default LoginDialog;
