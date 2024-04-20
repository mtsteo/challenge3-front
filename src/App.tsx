import { Navigate, Route, Routes } from "react-router-dom";
import Root from "./templates/Root";
import Home from "./pages/Home/Home";
import Shop from "./pages/shop/Shop";
import ProductPage from "./pages/product-detailed/ProductPage";
import { HomeProvider } from "./contexts/home/HomeContext";
import ProductList from "./pages/shop/product-list/ProductList";
import ProductListByCateg from "./pages/shop/product-list/ProductListByCateg";
import { ShopProvider } from "./contexts/shop/ShopContext";

function App() {
  return (
    <HomeProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<Root />}>
          <Route index path="/home" element={<Home />} /> 

          <Route
            path="/shop"
            element={
              <ShopProvider>
                <Shop />
              </ShopProvider>
            }
          >
            <Route path="/shop/products" element={<ProductList />} />
            <Route
              path="/shop/products/category/:category"
              element={<ProductListByCateg />}
            />
          </Route>

          <Route path="/product" element={<ProductPage />}></Route>
        </Route>
      </Routes>
    </HomeProvider>
  );
}

export default App;
