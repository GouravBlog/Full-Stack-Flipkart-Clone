import { Box, Typography, styled } from "@mui/material";
import { navData } from "../Data/data";

const Navwrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignIteam: "center",
  padding: "15px 50px",
  overflow: "hidden",
  background: "#fff",
  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
}));
const Component = styled(Box)`
  text-align: center;
`;
const NavBar = () => {
  return (
    <Navwrapper>
      {navData.map((data, index) => {
        return (
          <Component key={index}>
            <img src={data.url} alt="" style={{ width: "90px" }} />
            <Typography>{data.text}</Typography>
          </Component>
        );
      })}
    </Navwrapper>
  );
};
export default NavBar;
