import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

function ProfileInfo() {

    const { profile, setProfile } = useContext(ProfileContext);

    return (
        <div>
            <h2>Profilis</h2>

            <p>Vardas: {profile.name}</p>
            <p>Amžius: {profile.age}</p>
            <p>Miestas: {profile.city}</p>

            <button
                onClick={() =>
                    setProfile({
                        name: "Jonas",
                        age: 35,
                        city: "Vilnius"
                    })
                }
            >
                Pakeisti profilį
            </button>
        </div>
    );
}

export default ProfileInfo;