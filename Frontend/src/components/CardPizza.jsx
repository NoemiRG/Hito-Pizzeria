import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CardPizza({ desc, id, img, ingredients, name, price }) {
  const { addToCart } = useContext(CartContext);
  const pizza = {
    id,
    name,
    price,
    img,
    ingredients,
    count: 1
  };
  return (


    <div className=" card shadow-lg border-0 " style={{ width: "20rem" }}>
      <img src={img} className="card-img-top" alt={name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong>
        </p>
        <ul>
          {ingredients.map((ing, i) => (
            <li key={i}>🍕{ing}</li>
          ))}
        </ul>

        <h6>Precio: ${price.toLocaleString('es-CL')}</h6>
      </div>
      <div className="d-flex justify-content-around mb-3">
        <Link to={`/pizza/${id}`}>
          <Button variant="secondary" >Ver más 👀</Button>
        </Link>
        <Button variant="dark" onClick={() => {
          console.log("click"); addToCart(pizza);
        }}
        >
          Añadir 🛒
        </Button>
      </div>

    </div>
  );
}

export default CardPizza;