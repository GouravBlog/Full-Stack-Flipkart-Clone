import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../Data/data";
import { Box, styled } from "@mui/material";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled("img")(({ theme }) => ({
  width: "99%",
  height: "250px",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 180,
  },
}));
const Banner = () => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        dotListClass="custom-dot-list-style"
      >
        {bannerData.map((data, index) => {
          return (
            <Box key={index}>
              <Image src={data.url} alt="Banner" />;
            </Box>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
