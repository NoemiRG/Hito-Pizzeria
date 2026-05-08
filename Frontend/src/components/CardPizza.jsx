import Button from 'react-bootstrap/Button';

function CardPizza({ desc, id, img,ingredients,name,price }) {
  return (
    <div className="card" style={{ width: "20rem" }}>
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
        <Button variant="secondary" >Ver más 👀</Button>
        <Button   variant="dark">Añadir 🛒</Button >
      </div>
      
    </div>
  );
}

export default CardPizza;