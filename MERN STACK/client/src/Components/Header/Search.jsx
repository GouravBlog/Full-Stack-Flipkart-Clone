import { useState, useEffect } from "react";
import { styled, Box, InputBase, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getProductsAction } from "../../Redux/Action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Inputwrapper = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  width: "35%",
  borderRadius: "2px",
  display: "flex",
  marginLeft: 0,
  [theme.breakpoints.down("md")]: {
    width: "50%",
    marginLeft: "8%",
  },
}));
const InputText = styled(InputBase)(({ theme }) => ({
  width: " 100%",
  padding: "5px 5px 5px 15px",
  fontSize: "14px",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    width: "200%",
  },
}));
const Searchicon = styled(SearchIcon)`
  color: #2962ff;
  padding: 5px;
  height: inherit;
`;
const ListWrapper = styled(List)`
  background: #ffffff;
  color: #000;
  position: absolute;
  top: 36px;
  margin-left: 20%;
`;
const Search = () => {
  let [text, setText] = useState("");
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);
  const getText = (text) => {
    setText(text);
  };
  return (
    <>
      <Inputwrapper>
        <InputText
          placeholder="Search for products, brands and more"
          value={text}
          onChange={(e) => getText(e.target.value)}
        />
        <Searchicon />
      </Inputwrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle
                .toLowerCase()
                .includes(text.toLocaleLowerCase())
            )
            .map((product) => (
              <Link to={`/product/${product.id}`} onClick={() => setText("")}>
                <ListItem>{product.title.longTitle}</ListItem>
              </Link>
            ))}
        </ListWrapper>
      )}
    </>
  );
};
export default Search;
