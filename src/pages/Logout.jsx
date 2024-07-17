import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Logout() {
    const { setAuth } = useApp();
    const navigate = useNavigate();

    useEffect(() => {
        setAuth(null);
        navigate("/");
    }, []);

    return null;
}
