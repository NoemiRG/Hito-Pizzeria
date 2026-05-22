import { createContext } from "react";
import { useState, useEffect } from "react";

export const HomeContext = createContext()

export const HomeProvider = ({ children }) => {



    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        const getPizzas = async () => {

            const response = await fetch("http://localhost:5000/api/pizzas")
            const data = await response.json()
            setPizzas(data)
        }
        getPizzas()
    }, [])

    return (
        <HomeContext.Provider value={{ pizzas }}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider;