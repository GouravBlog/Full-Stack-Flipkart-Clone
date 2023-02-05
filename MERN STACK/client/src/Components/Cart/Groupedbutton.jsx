import { Button, ButtonGroup, styled } from "@mui/material";

const Buttongroup = styled(ButtonGroup)`
  padding-top: 10px;
`;
const Buttonsign = styled(Button)`
  border-radius: 50%;
`;
const Groupedbutton = () => {
  return (
    <Buttongroup>
      <Buttonsign>-</Buttonsign>
      <Button>1</Button>
      <Buttonsign>+</Buttonsign>
    </Buttongroup>
  );
};

export default Groupedbutton;
