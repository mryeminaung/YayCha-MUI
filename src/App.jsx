import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContextProvider from "./context/AppContext";
import ThemedContext from "./context/ThemedContext";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/logout",
                element: <Logout />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
]);

export default function App() {
    return (
        <AppContextProvider>
            <ThemedContext>
                <RouterProvider router={router} />
                <CssBaseline />
            </ThemedContext>
        </AppContextProvider>
    );
}
