import { createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {

    const user = {
    name: "Dovydas",
    age: 30,
    city: "Vilnius"
};

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;