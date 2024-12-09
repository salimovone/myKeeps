import { useNavigate } from "react-router";
import { Button, Logo } from "../../components";
import { useContext } from "react";
import { AuthContext } from "../../utils/context/AuthProvider";

const Navbar = () => {
    const navigate = useNavigate();

    const { login } = useContext(AuthContext);
    return (
        <div
            style={{ backdropFilter: "blur(8px)" }}
            className="w-full text-white flex-center  py-3"
        >
            <nav className="flex justify-between items-center max-w-screen-xl w-full">
                <Logo />
                <div className="flex-center gap-2">
                    <Button
                        onClick={() => navigate("/signup")}
                        variant="outlined"
                    >
                        Ro'yxatdan o'tish
                    </Button>
                    <Button onClick={login}>google bilan kirish</Button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
