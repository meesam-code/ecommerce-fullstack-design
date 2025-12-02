import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import { ContextProvider, UseContext } from "./Context/EcommerceContext.jsx";
import ProductInfo from "./pages/ProductInfo/ProductInfo.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Login from "./pages/UserRegisterLogin/Login.jsx";

import { Home, ProductList } from "./pages/index.js";
import SignUp from "./pages/UserRegisterLogin/SignUp.jsx";
import AdminLayout from "./pages/Admin/AdminDashboared.jsx";
import Dashboard from "./components/AdminDashbord/DashBoard.jsx";
import ListedProducts from "./components/AdminDashbord/ListedProducts.jsx";
import AddNewProduct from "./components/AdminDashbord/AddNewProduct.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ProductEdit from "./pages/ProductEdit/ProductEdit.jsx";
import NotFound from "./pages/NotFound.jsx";
import UserProfile from "./pages/profile/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/productInfo/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<Cart />} />

        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="listedProducts" element={<ListedProducts />} />
          <Route path="addNewProduct" element={<AddNewProduct />} />
        </Route>
        <Route path="/profile" element={<UserProfile />} />
        <Route
          path="product/edit/:id"
          element={
            <ProtectedRoute>
              <ProductEdit />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>,
  ),
);

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
    ,
  </ContextProvider>,
);
