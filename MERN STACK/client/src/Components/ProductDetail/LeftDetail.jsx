import { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Action/cartAction";
const Leftsidewrapper = styled(Box)`
  min-width: 40%;
  min-width: 80%;

  margin: 40px 80px;
`;
const Imagecontainer = styled(Box)`
  margin: 15px 20px;
  padding: 15px 20px;
  width: "90%";
  border: 1px solid #f0f0f0;
  // box-shadow:2px 2px 2px 2px #f0f0f0;
`;
const Image = styled("img")({
  // padding:"15px 20px"
  width: "95%",
});
const StyledButton = styled(Button)`
    width:"48%",
    height:"50px",
`;
const LeftDetail = ({ product }) => {
  const [quantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;
  const addToCartIteam = () => {
    navigate("/cart");
    dispatch(addToCart(id, quantity));
  };

  return (
    <Leftsidewrapper>
      <Imagecontainer>
        <Image src={product.detailUrl} alt="product" />
      </Imagecontainer>
      <StyledButton
        style={{
          background: "#ffb300",
          width: "48%",
          height: "50px",
          borderRadius: "2px",
          marginRight: "4px",
        }}
        variant="contained"
        onClick={() => addToCartIteam()}
      >
        <ShoppingCartIcon />
        Add To Cart
      </StyledButton>
      <StyledButton
        style={{
          background: "#ff5722",
          width: "48%",
          height: "50px",
          borderRadius: "2px",
        }}
        variant="contained"
      >
        <FlashOnIcon />
        Buy Now
      </StyledButton>
    </Leftsidewrapper>
  );
};

export default LeftDetail;
