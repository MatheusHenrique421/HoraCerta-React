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
            { path: "Home", element: <Home /> },
            { path: "Sobre", element: <Sobre /> },
        ],
    },
]);

export default router;
