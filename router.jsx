import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./src/Auth/LoginPage";
import HomePage from "./src/Pages/HomePage";
import MainLayout from "./src/Layouts/MainLayout";

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
            }
        ]
    }
])

export default router