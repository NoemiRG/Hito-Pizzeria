import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar";
import CardPizza from "../components/CardPizza";
import { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx";


function Home() {
  const [pizzas, setPizzas] = useState([])

  const getPizzas = async () => {

    const response = await fetch("http://localhost:5000/api/pizzas")
    const data = await response.json()
    setPizzas(data)
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <>
      {<Navbar />}
      {<Header />}
      <div className="container mt-5  ">
        <div className="row">
          {pizzas.length > 0 ? pizzas.map(pizza => <div className="col-md-4" key={pizza.id} style={{
            padding: "10px"
          }}>
            <CardPizza
              id={pizza.id}
              desc={pizza.desc}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </div>) : <h2 className="text-center">No hay pizzas disponibles</h2>}

        </div>
      </div>
      {<Footer />}
    </>
  );
}

export default Home;

