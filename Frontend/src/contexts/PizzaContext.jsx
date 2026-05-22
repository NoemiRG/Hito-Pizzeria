import { createContext } from "react";
import { useEffect, useState } from "react";

export const PizzaContext = createContext()

export const PizzaProvider = ({ children }) => {

const [pizza, setPizza] = useState(null);

    const getPizza = async (id) => {

        const apiUrl = `http://localhost:5000/api/pizzas/${id}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            setPizza(null);
            return;
        }

        const data = await response.json();

        setPizza(data);
    };

  

    return (
        <PizzaContext.Provider value={{ pizza,getPizza }}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider