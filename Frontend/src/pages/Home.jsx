import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar";
import CardPizza from "../components/CardPizza";
import { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx";
import { useContext } from "react";
import { HomeContext } from "../contexts/HomeContext.jsx";


function Home() {

  const { pizzas } = useContext(HomeContext);

  return (
    <>
      {<Navbar />}
      {<Header />}
      <div className="container mt-5  " style={{ minHeight: "50vh" }}>
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

