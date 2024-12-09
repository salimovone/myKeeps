import React from "react";

import imgUrl from "../../../assets/blue-fade.jpg";
import { Navbar } from "../../../containers";

const LoginHome = () => {
    return (
        <div
            style={{
                background: `url("${imgUrl}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="w-screen h-screen"
        >
            <Navbar />
            <section className="flex-center"></section>
        </div>
    );
};

export default LoginHome;
