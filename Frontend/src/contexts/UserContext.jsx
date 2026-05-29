import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    /*const [user, setUser] = useState(null);*/
    const [token, setToken] = useState(true);

    const logOut = () => {
        setToken(false);
        alert("Sesión cerrada");
    };
    return (
        <UserContext.Provider value={{ token,setToken,logOut/*,user,setUser*/}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;