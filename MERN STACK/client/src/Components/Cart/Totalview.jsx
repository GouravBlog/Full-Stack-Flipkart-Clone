import { useState, useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";

const Headingwrapper = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;
const Heading = styled(Typography)`
  font-weight: 600;
  color: #876280;
  font-size: 18px;
`;
const AmountWrapper = styled(Box)`
  border-top: 1px solid #f0f0f0;
  padding: 15px 24px;
  background: #fff;
`;
const Amount = styled(Typography)`
  margin-bottom: 20px;
  //   font-size: 14px;
`;
const Ruppes = styled(Box)`
  float: right;
`;
const Totalamount = styled(Typography)`
  font-weight: 600;
  border-top: 1px solid #f0f0f0;
  padding: 15px 0px;
  font-size: 18px;
`;
const Totalsave = styled(Typography)`
  font-weight: 600;
  border-top: 1px solid #f0f0f0;
  padding: 15px 0px;
  font-size: 14px;
  color: green;
`;
const Totalview = ({ cartIteams }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmmount();
  }, [cartIteams]);

  const totalAmmount = () => {
    let price = 0,
      discount = 0;
    cartIteams.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };
  return (
    <Box>
      <Headingwrapper>
        <Heading>PRICE DETAILS</Heading>
      </Headingwrapper>
      <AmountWrapper>
        <Amount>
          Price ({cartIteams?.length} item)
          <Ruppes component="span">₹{price}</Ruppes>
        </Amount>
        <Amount>
          Discount<Ruppes component="span">-₹{discount}</Ruppes>
        </Amount>
        <Amount>
          Delivery Charges<Ruppes component="span">₹40</Ruppes>
        </Amount>
        <Totalamount>
          Total Amount<Ruppes component="span">₹{price - discount + 40}</Ruppes>
        </Totalamount>
        <Totalsave>You will save ₹{discount - 40} on this order</Totalsave>
      </AmountWrapper>
    </Box>
  );
};

export default Totalview;
