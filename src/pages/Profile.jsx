import { Avatar, Box, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import Item from "../components/Item";
import { useApp } from "../context/AppContext";
import { useMemo } from "react";

export default function Profile() {
    const { data } = useApp();

    const authData = useMemo(() => {
        return data.filter((item) => item.name === "Ninja");
    }, [data]);

    return (
        <Box>
            <Box sx={{ bgcolor: "banner", height: 150, borderRadius: 4 }}></Box>
            <Box
                sx={{
                    mb: 4,
                    marginTop: "-60px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <Avatar sx={{ width: 100, height: 100, bgcolor: pink[500] }} />
                <Box sx={{ textAlign: "center" }}>
                    <Typography>Ninja</Typography>
                    <Typography sx={{ fontSize: "0.8em", color: "text.fade" }}>
                        Ninja's profile bio content here
                    </Typography>
                </Box>
            </Box>

            {authData.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </Box>
    );
}
