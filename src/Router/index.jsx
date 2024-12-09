import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { LoginHome, SignIn, SignUp } from "../views/Login";
import { Home } from "../views";
import Auth from "./Auth";
import App from "./App";
import { AuthContext } from "../utils/context/AuthProvider";

const Router = () => {
    const { token, startLoading, stopLoading } = useContext(AuthContext);

    const CLIENT_ID =
        "732276842466-98oimkb8bthq8vc6f84e26qk68jbfepu.apps.googleusercontent.com"; // Google Cloud Console'dan olingan
    const API_KEY = "AIzaSyD4b4KZf6wEAI0zzCkmJkpUBJfUrMKhLwk"; // Google Cloud Console'dan olingan
    const SCOPES = "https://www.googleapis.com/auth/keep";

    useEffect(() => {
        // Google API-ni yuklash
        startLoading();
        const initializeGapi = () => {
            window.gapi.load("client:auth2", () => {
                window.gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    scope: SCOPES,
                    discoveryDocs: [
                        "https://keep.googleapis.com/$discovery/rest?version=v1",
                    ],
                });
            });
        };

        // Skript yuklanganini tekshirish
        if (window.gapi) {
            initializeGapi();
            stopLoading();
        } else {
            console.error("Google API script is not loaded!");
        }
    }, []);

    return (
        <>
            <Routes>
                {!token ? (
                    <Route element={<Auth />}>
                        <Route path="/" element={<LoginHome />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Route>
                ) : (
                    <Route element={<App />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                )}
            </Routes>
        </>
    );
};

export default Router;
