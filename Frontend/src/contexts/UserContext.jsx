import { createContext } from "react";
import { useState, useEffect } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //const [token, setToken] = useState(false);
    const login = async (email, password) => {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        const userLogged = {
            email: data.email,
            token: data.token,
        };

        setUser(userLogged);
        localStorage.setItem("user", JSON.stringify(userLogged));

        return data;
    };

    const register = async (email, password) => {
        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        return data;
    };

    const profile = async () => {
        const res = await fetch("http://localhost:5000/api/auth/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + user.token
            }
        })
        let data = await res.json();
        console.log(data)
        if (data.error) {
            alert(data.error);
            localStorage.removeItem("user");
            setUser(null);
            return
        }
    }


    const logOut = () => {
        //setToken(false);

        localStorage.removeItem("user");
        setUser(null);
        alert("Sesión cerrada");
    };

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setUser(localStorage.getItem("user"))
        } else {
            setUser(null)
        }

    }, [])
    return (
        <UserContext.Provider value={{/* token,setToken,*/logOut, user, setUser, login, register }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;