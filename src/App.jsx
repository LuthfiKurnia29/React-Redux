import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import ProductPage from "./pages/Product.jsx";
import ProfilePage from "./pages/Profile.jsx";
import DetailProductPage from "./pages/DetailProduct.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import CartPage from "./pages/Cart.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="justify-center min-h-screen items-center">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<DetailProductPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
