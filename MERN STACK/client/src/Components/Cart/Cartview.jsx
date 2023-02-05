import { Typography, Box, styled, Button } from "@mui/material";
import { addempisis } from "../../utils/Commonutils";
import { removeFromCart } from "../../Redux/Action/cartAction";
import { useDispatch } from "react-redux";
import Groupedbutton from "./Groupedbutton";

const Component = styled(Box)`
  display: flex;
  border-top: 1px solid #f0f0f0;
  background: #fff;
`;
const Leftview = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Rightview = styled(Box)`
  padding: 20px 25px;
`;
const Cartview = ({ item }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();

  const removeFromItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Component>
      <Leftview>
        <img
          src={item.url}
          alt="product"
          style={{ width: "110px", height: "110px" }}
        />
        <Groupedbutton />
      </Leftview>
      <Rightview>
        <Typography style={{ fontSize: 18 }}>
          {addempisis(item.title.longTitle)}
        </Typography>
        <Typography style={{ color: "#876280", marginTop: "10px" }}>
          Seller:RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="flipkart"
              style={{ width: 50, marginLeft: 10 }}
            />
          </Box>
        </Typography>
        <Typography style={{ marginTop: "10px" }}>
          <Box component="span" style={{ fontSize: "18px", fontWeight: "600" }}>
            ₹ {item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span">
            ₹<del>{item.price.mrp}</del>{" "}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "green" }}>
            {item.price.discount}&nbsp;off
          </Box>
        </Typography>
        <Button
          onClick={() => removeFromItem(item.id)}
          style={{ marginTop: "10px", color: "#000", fontWeight: 600 }}
        >
          Remove
        </Button>
      </Rightview>
    </Component>
  );
};
export default Cartview;
