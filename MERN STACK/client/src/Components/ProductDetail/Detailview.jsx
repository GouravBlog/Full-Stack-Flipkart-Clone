import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/Action/ProductAction";
import { useParams } from "react-router-dom";
import { Box, Grid, styled } from "@mui/material";
import LeftDetail from "./LeftDetail";
import RightDetail from "./RightDetail";

const Component = styled(Box)`
  background: #f0f0f0;
  margin-top: 50px;
`;
const Wrapper = styled(Grid)`
  background: #ffffff;
`;
const Leftsidewrapper = styled(Grid)`
  margin-top: 40px;
`;
const Rightsidewrapper = styled(Grid)`
  margin-top: 40px;
`;
const Detailview = () => {
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  const { id } = useParams();
  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <Component style={{ marginTop: "60px" }}>
      {loading ? (
        <h1
          style={{
            color: "#00cc00",
            textAlign: "center",
          }}
        >
          loading...
        </h1>
      ) : (
        product &&
        Object.keys(product).length && (
          <Wrapper container>
            <Leftsidewrapper iteam lg={4} md={4} sm={8} xs={12}>
              <LeftDetail product={product} />
            </Leftsidewrapper>
            <Rightsidewrapper iteam lg={8} md={8} sm={8} xs={12}>
              <RightDetail product={product} />
            </Rightsidewrapper>
          </Wrapper>
        )
      )}
    </Component>
  );
};

export default Detailview;
