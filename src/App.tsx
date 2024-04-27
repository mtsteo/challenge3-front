import { Navigate, Route, Routes } from "react-router-dom";
import Root from "./templates/Root";
import Home from "./pages/Home/Home";
import Shop from "./pages/shop/Shop";
import ProductPage from "./pages/product-detailed/ProductPage";
import ProductList from "./pages/shop/product-list/ProductList";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/" element={<Root />}>
            <Route index path="/home" element={<Home />} />
            <Route path="/shop/products" element={<Shop />}>
              <Route path="/shop/products" element={<ProductList />} />
              <Route
                path="/shop/products/category/:category"
                element={<ProductList />}
              />
            </Route>
            <Route path="/shop/product/:id" element={<ProductPage />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
  );
}

export default App;
