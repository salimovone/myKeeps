import React from "react";
import logo from "../../assets/logo.jpg";

const Logo = () => {
    return (
        <div className="flex-center gap-2 font-bold text-xl">
            <img
                src={logo}
                className="max-w-[40px] max-h-[40px] rounded-full object-center"
                alt=""
            />
            Panda Franklin
        </div>
    );
};

export default Logo;
