import { useContext } from "react";
import { LoginContext } from "./LoginContext";

function LoginStatus() {

    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

    return (
        <div>
            <h2>Prisijungimas</h2>

            <p>
                {isLoggedIn ? "Prisijungęs" : "Neprisijungęs"}
            </p>

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Atsijungti" : "Prisijungti"}
            </button>
        </div>
    );
}

export default LoginStatus;
