import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import DataProvider from "./Context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailview from "./Components/ProductDetail/Detailview";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Detailview />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
