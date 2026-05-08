//import Header from "./Header.jsx";
import CardPizza from "./CardPizza";
import { useEffect, useState } from "react";


function Home() {
  const [pizzas, setPizzas] = useState([])

  const getPizzas = async ()=>{

  const response = await fetch ("http://localhost:5000/api/pizzas")
  const data = await response.json()
  setPizzas(data)
  }

   useEffect(()=>{
      getPizzas()
   },[])

  return (
    <>
      {/*<Header />*/}
      <div className="container mt-5 ">
        <div className="row">
        {pizzas.length>0 ? pizzas.map(pizza => <div className="col-md-4" key={pizza.id} style={{padding:"10px"
          }}>
            <CardPizza
              desc={pizza.desc}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </div>) : <h2 className="text-center">No hay pizzas disponibles</h2>}

        </div>
      </div>



    </>
  );
}

export default Home;

