import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [showForm, setShowForm] = useState(false);
    const [mode, setMode] = useState(localStorage.getItem("theme") || "light");
    const [showDrawer, setShowDrawer] = useState(false);
    const [globalMsg, setGlobalMsg] = useState(null);
    const [auth, setAuth] = useState(null);

    const [data, setData] = useState(
        JSON.parse(localStorage.getItem("data")) || []
    );

    useEffect(() => {
        localStorage.setItem("theme", mode);
    }, [mode]);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
    }, [data]);

    const remove = (id) => {
        setData(data.filter((item) => item.id !== id));
        setGlobalMsg("An item deleted");
    };

    const add = (content, name) => {
        setData((preData) => [...preData, { id: uuidv4(), content, name }]);
        setGlobalMsg("An item Added");
    };

    return (
        <AppContext.Provider
            value={{
                data,
                setData,
                remove,
                add,
                showForm,
                setShowForm,
                mode,
                setMode,
                showDrawer,
                setShowDrawer,
                auth,
                setAuth,
                globalMsg,
                setGlobalMsg,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    return useContext(AppContext);
}
