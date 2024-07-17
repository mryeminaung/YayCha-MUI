import { Box, Container, Snackbar } from "@mui/material";
import Header from "../components/Header";
import AppDrawer from "../components/AppDrawer";
import { Outlet } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function RootLayout() {
    const { globalMsg, setGlobalMsg } = useApp();

    return (
        <Box>
            <Header />
            <AppDrawer />

            <Container maxWidth="sm" sx={{ mt: 4 }}>
                <Outlet />
            </Container>

            <Snackbar
                anchorOrigin={{
                    horizontal: "center",
                    vertical: "bottom",
                }}
                open={Boolean(globalMsg)}
                autoHideDuration={2000}
                onClose={() => setGlobalMsg(null)}
                message={globalMsg}
            />
        </Box>
    );
}
