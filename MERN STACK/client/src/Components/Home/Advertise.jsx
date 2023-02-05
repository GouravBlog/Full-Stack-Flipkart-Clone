import React from "react";
import { ImageURL } from "../Data/data";
import { Box, styled } from "@mui/system";

const Container = styled(Box)`
  background:"#fff
`;
const Components = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignIteams: "center",
  margin: "5px 3px 8px 5px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "10%",
    display: "block",
  },
}));

const Imags = styled("img")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  margin: "5px 3px 8px 5px",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    width: "100%",
  },
}));

const Images = styled("img")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: "100px",
  },
}));

const Advertise = () => {
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <Container>
      <Components>
        {ImageURL.map((data, index) => {
          return (
            <Box key={index}>
              <Imags src={data} alt="ad" />
            </Box>
          );
        })}
      </Components>
      <Images src={url} alt="corona" />
    </Container>
  );
};

export default Advertise;
