import { createContext, useState } from "react";

export const ProfileContext = createContext();

function ProfileProvider({ children }) {

    const [profile, setProfile] = useState({
        name: "Dovydas",
        age: 29,
        city: "Kaunas"
    });

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
}

export default ProfileProvider;