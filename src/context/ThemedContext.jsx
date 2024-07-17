import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { useApp } from "./AppContext";

export default function ThemedContext({ children }) {
    const { mode } = useApp();

    const theme = useMemo(() => {
        localStorage.setItem("theme", mode);

        return createTheme({
            palette: {
                mode,
                primary: blue,
                banner: mode === "dark" ? grey[800] : grey[200],
                text: {
                    fade: grey[500],
                },
            },
        });
    }, [mode]);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
