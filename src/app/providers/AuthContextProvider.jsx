import { createContext, useState } from "react"

// Create a context
export const UserContext = createContext();

// Make a ProviderWrapper which will wrap the entire App, and will share the data across all components.
export const AuthContextProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(
        () => JSON.parse(localStorage.getItem("loggedInUser")) || null
    );
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem("users")) || []);

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser, users, setUsers }}>
            {children}
        </UserContext.Provider>)
}