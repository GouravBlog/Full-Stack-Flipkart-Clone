import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

const EmptyWrapper = styled(Box)`
  padding: 30px 135px;
`;
const Urlwrapper = styled(Box)`
  height: 65vh;
  width: 80%;
  background: #fff;
  margin-top: 40px;
  margin-left: 10%;
  padding-top: 90px;
  text-align: center;
`;
const Smalltext = styled(Typography)`
  margin-top: 10px;
  font-weight: bold;
  font-size: 20px;
  color: #867280;
`;
const Empty = () => {
  let url = `https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png`;
  return (
    <EmptyWrapper>
      <Urlwrapper>
        <img src={url} alt="Empty" style={{ width: "40%" }} />
        <Smalltext>Empty Card</Smalltext>
        <Smalltext>No More Iteam</Smalltext>
      </Urlwrapper>
    </EmptyWrapper>
  );
};

export default Empty;
