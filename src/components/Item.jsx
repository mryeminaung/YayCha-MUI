import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";

import {
    Alarm as TimeIcon,
    AccountCircle as UserIcon,
    Delete as DeleteIcon,
} from "@mui/icons-material";

import { green } from "@mui/material/colors";
import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Item({ item, primary }) {
    const { remove } = useApp();
    const navigate = useNavigate();

    return (
        <Card sx={{ mb: 2 }}>
            {primary && <Box sx={{ height: 50, bgcolor: green[500] }} />}
            <CardContent onClick={() => navigate("/comments/1")}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <TimeIcon fontSize="10" color="success" />
                        <Typography
                            variant="caption"
                            sx={{ color: green[500] }}
                        >
                            A few second ago
                        </Typography>
                    </Box>
                    <IconButton
                        size="small"
                        color="error"
                        onClick={(e) => {
                            e.stopPropagation();
                            remove(item.id);
                        }}
                    >
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </Box>

                <Typography sx={{ my: 3 }}>{item.content}</Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <UserIcon fontSize="medium" color="info" />
                    <Typography variant="caption">{item.name}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
