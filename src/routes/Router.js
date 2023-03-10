import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import OrderInfoPage from "../pages/OrderInfoPage";
import OrderPage from "../pages/OrderPage"
import PaymentPage from "../pages/PaymentPage";
import ProductInfoPage from "../pages/ProductInfoPage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/product',
    element: <ProductPage />
  },
  {
    path: '/product/:productId',
    element: <ProductInfoPage />
  },
  {
    path: '/payment',
    element: <PaymentPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/order',
    element: <OrderPage />
  },
  {
    path: '/order/:orderId',
    element: <OrderInfoPage />
  },

])

export default function Router() {
  return <RouterProvider router={router} />
}