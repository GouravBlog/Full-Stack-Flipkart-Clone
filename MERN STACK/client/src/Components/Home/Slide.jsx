import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Divider, Button, styled } from "@mui/material";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const Component = styled(Box)`
  margin-top: 10px;
  margin-bottom: 10px;
  background: white;
`;
const Deal = styled(Box)`
  display: flex;
  align-items: center;
  margin: 2px 10px 5px 40px;
  padding-top: 10px;
`;
const Dealtext = styled(Typography)`
  font-weight: 600;
  margin-right: 30px;
`;
const Viewbutton = styled(Button)`
  margin-left: auto;
  margin-right: 20px;
  font-weight: 600;
  font-size: 12px;
  border-radius: 2px;
  background: #2874f0;
`;
const Img = styled("img")({
  width: "auto",
  height: "120px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px",
});
const Text = styled(Typography)`
  // text-align: center;
`;
const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <Dealtext>{title}</Dealtext>
        {timer && (
          <Box style={{ display: "flex" }}>
            <img
              src={timerURL}
              alt="time"
              style={{ width: 24, marginRight: 10 }}
            />
            <Countdown date={Date.now() + 50000} renderer={renderer} />
          </Box>
        )}
        <Viewbutton variant="contained">View More</Viewbutton>
      </Deal>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
      >
        {products.map((product) => {
          return (
            <Component>
              <Divider />
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Box>
                  <Img src={product.url} alt="product" />
                  <Text style={{ color: "#263238", fontWeight: "600" }}>
                    {product.title.shortTitle}
                  </Text>
                  <Text style={{ color: "#66bb6a" }}>{product.discount}</Text>
                  <Text style={{ color: "#78909c" }}>{product.tagline}</Text>
                </Box>
              </Link>
            </Component>
          );
        })}
      </Carousel>
    </Component>
  );
};

export default Slide;
