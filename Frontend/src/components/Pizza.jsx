import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


function Pizza() {
    const [pizza, setPizza] = useState([null])

    const apiUrl = 'http://localhost:5000/api/pizzas/p001';

    
    const getPizza = async () => {
        const response = await fetch(apiUrl);

             if (!response.ok) {
        setPizza(null)
        return
    }

        const data = await response.json();
        setPizza(data)
    }

    useEffect(() => {
        getPizza()
    }, [])


    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            {pizza?(<Card border="info" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        {pizza.desc}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                    <ul>
                        <strong>Ingredientes</strong>
                        {pizza.ingredients?.map((ing, i) => {
                        return <li key={i}>🍕{ing}</li>
                    })}
                    </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>${pizza.price?.toLocaleString('es-CL')}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button variant="dark">Añadir 🛒</Button >
                </Card.Body>
            </Card>) : (<h2 className="text-center">No hay pizzas disponibles</h2>)}
        </div>


    )
}
export default Pizza