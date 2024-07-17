import { useState } from "react";
import { Box } from "@mui/material";
import { useApp } from "../context/AppContext";
import Item from "../components/Item";
import Form from "../components/Form";

export default function Home() {
    const { data, showForm } = useApp();

    return (
        <Box>
            {showForm && <Form />}
            {data.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </Box>
    );
}
