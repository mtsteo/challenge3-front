import { Navigate, Route, Routes } from "react-router-dom";
import Root from "./templates/Root";
import Home from "./pages/Home/Home";
import Shop from "./pages/shop/Shop";
import ProductPage from "./pages/product-detailed/ProductPage";
import { HomeProvider } from "./contexts/HomeContext";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/" element={<Root />}>
        <Route
          index
          path="/home"
          element={
            <HomeProvider>
              <Home />
            </HomeProvider>
          }
        />
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
