import { Navigate, Route, Routes } from 'react-router-dom';
import Root from './templates/Root';
import Home from './pages/Home/Home';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/" element={<Root />}>
        <Route index path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
