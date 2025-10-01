import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./layouts/root/RootLayout";
import Sobre from "./pages/sobre/Sobre";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Navigate to="/home" /> }, // Redireciona de "/" para "/Home"
            { path: "home", element: <Home /> },
            { path: "sobre", element: <Sobre /> },
        ],
    },
]);

export default router;
