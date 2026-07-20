import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
    const user = useContext(UserContext);
    return (
        <div>
        <h2>Profilis</h2>

        <p>Vardas: {user.name}</p>
        <p>Amžius: {user.age}</p>
        <p>Miestas: {user.city}</p>
    </div>
    );
}

export default Profile