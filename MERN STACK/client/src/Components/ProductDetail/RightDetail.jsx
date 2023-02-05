import { Box, Table, TableRow, TableCell, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import styled from "@emotion/styled";

const RightDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: "10px" }}>
        <Box component="span" style={{ fontSize: "28px", fontWeight: "600" }}>
          ₹ {product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span">
          ₹<del>{product.price.mrp}</del>{" "}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "green" }}>
          {product.price.discount}&nbsp;off
        </Box>
      </Typography>
      <Typography style={{ fontSize: "14px", marginTop: "10px" }}>
        8 Rating & 1 Reviews
        <Box component="span">
          <img src={fassured} alt="" style={{ width: "77px" }} />
        </Box>
      </Typography>
      <Typography style={{ fontWeight: 600, margin: "10px 0px" }}>
        Available Offer
      </Typography>
      <Typography>
        <LocalOfferIcon
          style={{ color: "#00cc00", marginRight: "5px", fontSize: "16" }}
        />
        Bank Offer10% off on Citi Credit Card and EMI Transactions, up to
        ₹1,500. On orders of ₹5,000 and aboveT&C
      </Typography>
      <Typography>
        <LocalOfferIcon
          style={{ color: "#00cc00", marginRight: "5px", fontSize: "16" }}
        />
        Bank Offer10% off on ICICI Bank Credit Card Transactions, up to ₹1500.
        On orders of ₹5000 and aboveT&C
      </Typography>
      <Typography>
        <LocalOfferIcon
          style={{ color: "#00cc00", marginRight: "5px", fontSize: "16" }}
        />
        Bank Offer10% off on ICICI Bank Credit Card EMI Transactions, up to
        ₹1250. On orders of ₹5000 and aboveT&C
      </Typography>
      <Typography>
        <LocalOfferIcon
          style={{ color: "#00cc00", marginRight: "5px", fontSize: "16" }}
        />
        Combo OfferBuy 3-4 items save 5%; Buy 5 or more save 10%See all
        productsT&C
      </Typography>
      <Table>
        <TableRow>
          <TableCell>Delivery</TableCell>
          <TableCell>Deliverd By {date.toDateString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Warranty</TableCell>
          <TableCell>No Warranty</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ color: "#28f037" }}>Seller</TableCell>
          <TableCell>
            <Box>
              <Typography>
                7 day seller replacement policy/brand assistance for device
                issues*
              </Typography>
              <Typography>GST invoice available</Typography>
            </Box>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colspan={2}>
            <img src={adURL} style={{ width: "400px" }} alt="ad" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell> Description</TableCell>
          <TableCell>{product.description}</TableCell>
        </TableRow>
      </Table>
    </>
  );
};

export default RightDetail;
