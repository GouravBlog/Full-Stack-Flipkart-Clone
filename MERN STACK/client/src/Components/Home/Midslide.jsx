import Slide from "./Slide";
import { Box, styled } from "@mui/system";

const Components = styled(Box)`
  display: flex;
  width: 100%;
`;
const Leftcomponent = styled(Box)(({ theme }) => ({
  width: "85%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));
const Rightcomponent = styled(Box)(({ theme }) => ({
  width: "15%",
  background: "#ffffff",
  margin: "10px 2px 5px 5px",
  padding: "5px",
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
const Imge = styled("img")({
  height: 290,
  width: "100%",
});
const Midslide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Components>
      <Leftcomponent>
        <Slide products={products} title={title} timer={timer} />
      </Leftcomponent>
      <Rightcomponent>
        <Imge src={adURL} alt="ad" />
      </Rightcomponent>
    </Components>
  );
};

export default Midslide;
