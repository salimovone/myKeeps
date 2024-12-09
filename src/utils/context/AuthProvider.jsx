import { useState } from "react";
import { createContext } from "react";
import Loading from "../../views/Loading";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async () => {
        setLoading(true);
        try {
            const auth = window.gapi.auth2.getAuthInstance();
            await auth.signIn();
            setToken("Signed in successfully");
            setLoading(false);
        } catch (err) {
            console.error("Error signing in", err);
        }
    };

    const logout = () => {
        setLoading(true);
        setToken(null);
        setLoading(false);
    };

    const startLoading = () => {
        setLoading(true);
    };

    const stopLoading = () => {
        setLoading(true);
    };

    if (loading) <Loading />;

    return (
        <AuthContext.Provider
            value={{ login, logout, token, startLoading, stopLoading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
