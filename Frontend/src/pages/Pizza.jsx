import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function Pizza() {

    const { id } = useParams();

    const [pizza, setPizza] = useState(null)

    const apiUrl = `http://localhost:5000/api/pizzas/${id}`;


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
        <>
            <Navbar />

            <div className="d-flex justify-content-center align-items-center  " style={{ height: '90vh' }}>
                {pizza ? (<Card style={{ width: '50vh' }} className="card shadow-lg border-0 rounded-4 p-4">
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
            <Footer />
        </>


    )
}
export default Pizza