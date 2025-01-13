import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "./src/Auth/LoginPage";
import HomePage from "./src/Pages/HomePage";
import MainLayout from "./src/Layouts/MainLayout";
import Cart from "./src/Pages/Cart";
import DetailProduct from "./src/Pages/DetailProduct";
import SuccesfullCheckout from "./src/Pages/SuccesfullCheckout";

const router = createBrowserRouter([
    {
        path: "/LoginPage",
        element: <LoginPage />
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "/:category",
                element: <HomePage />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/detail-product/:id",
                element: <DetailProduct />
            }
        ]
    },
    {
        path: "/Sucessfull-checkout",
        element: <SuccesfullCheckout />,
    }
])

export default router