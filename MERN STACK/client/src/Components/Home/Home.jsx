import { Box, styled } from "@mui/material";
import Banner from "./Banner";
import NavBar from "./NavBar";
import React, { useEffect } from "react";
import { getProductsAction } from "../../Redux/Action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import Midslide from "./Midslide";
import Advertise from "./Advertise";

const Bannerwrapper = styled(Box)`
  background: #e0e0e0;
  padding: 5px;
`;
const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);
  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <>
      <Box style={{ marginTop: "60px" }}>
        <NavBar />
      </Box>
      <Bannerwrapper>
        <Banner />
        <Midslide
          products={products}
          title={"Top Deal Of The Day"}
          timer={true}
        />
        <Advertise />
        <Slide products={products} title={"Pick Your Styless"} timer={false} />
        <Slide
          products={products}
          title={"Grooming, Books, Auto & more"}
          timer={false}
        />
        <Slide
          products={products}
          title={"Shop Monthly Essentials"}
          timer={false}
        />
        <Slide products={products} title={"New Year Specials"} timer={false} />
        <Slide
          products={products}
          title={"Sports, Healthcare & more"}
          timer={false}
        />
        <Slide
          products={products}
          title={"Best of Electronics"}
          timer={false}
        />
      </Bannerwrapper>
    </>
  );
};

export default Home;
