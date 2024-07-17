import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import {
    Menu as MenuIcon,
    Add as AddIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
} from "@mui/icons-material";

import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { showForm, setShowForm, setShowDrawer, mode, setMode } = useApp();
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={() => setShowDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    onClick={() => navigate("/")}
                    sx={{ flexGrow: 1, ml: 2 }}
                >
                    Yaycha
                </Typography>

                <Box>
                    <IconButton
                        color="inherit"
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? <RemoveCircleIcon /> : <AddIcon />}
                    </IconButton>

                    {mode === "dark" ? (
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={() => setMode("light")}
                        >
                            <LightModeIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={() => setMode("dark")}
                        >
                            <DarkModeIcon />
                        </IconButton>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
