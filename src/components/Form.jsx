import { useRef } from "react";

import { Box, TextField, Button } from "@mui/material";
import { useApp } from "../context/AppContext";

export default function Form() {
    const contentRef = useRef();
    const { add } = useApp();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const content = contentRef.current.value;

                content && add(content, "Ninja");

                e.currentTarget.reset();
            }}
        >
            <Box sx={{ mb: 4, textAlign: "right" }}>
                <TextField
                    id="outlined-basic"
                    label="Content"
                    variant="outlined"
                    inputRef={contentRef}
                    type="text"
                    fullWidth
                    multiline
                    sx={{ mb: 1 }}
                />
                <Button variant="contained" type="submit">
                    Post
                </Button>
            </Box>
        </form>
    );
}
