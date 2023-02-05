import { Typography, Box, Grid, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";
import Cartview from "./Cartview";
import Empty from "./Empty";
import Totalview from "./Totalview";

const Container = styled(Grid)`
  padding: 30px 135px;
`;
const HeaderWrapper = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;
const FooterWrapper = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  box-shadow: 0px -1px 10px 0 rgb(0 0 0 /10%);
`;
const Orderbutton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #ff5722;
  color: #fff;
  width: 250px;
  height: 51px;
`;
const Leftcomp = styled(Grid)`
  padding-right: 10px;
`;
const Cart = () => {
  const { cartIteams } = useSelector((state) => state.cart);
  return (
    <>
      {cartIteams.length ? (
        <Container container style={{ marginTop: 80 }}>
          <Leftcomp item lg={9} md={9} sm={12} xs={12}>
            <HeaderWrapper>
              <Typography>Flipkart({cartIteams?.length})</Typography>
            </HeaderWrapper>
            {cartIteams.map((item) => (
              <Cartview item={item} />
            ))}
            <FooterWrapper>
              <Orderbutton>Place Order</Orderbutton>
            </FooterWrapper>
          </Leftcomp>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Totalview cartIteams={cartIteams} />
          </Grid>
        </Container>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Cart;
