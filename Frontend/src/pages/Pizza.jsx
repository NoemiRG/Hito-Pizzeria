import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { PizzaContext } from "../contexts/PizzaContext";

function Pizza() {
    const { id } = useParams();
    const { pizza, getPizza } = useContext(PizzaContext);

    useEffect(() => {
        getPizza(id);
    }, []);

    const { addToCart } = useContext(CartContext);

    return (
        <>
            <Navbar />

            <div className="container py-5 d-flex justify-content-center" >
                {pizza ? (<Card style={{ width: '40rem' }} className="card shadow-lg border-0 rounded-4 p-4">
                    <Card.Img
                        variant="top"
                        src={pizza.img}
                        style={{
                            width: "200px",
                            height: "250px",
                            objectFit: "cover"
                        }}
                    />
                    <Card.Body>
                        <Card.Title className="fs-2 fw-bold" >{pizza.name}</Card.Title>
                        <Card.Text className="text-muted">
                            {pizza.desc}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <ul className="mt-2">
                                <strong>Ingredientes</strong>
                                {pizza.ingredients?.map((ing, i) => {
                                    return <li key={i}>🍕{ing}</li>
                                })}
                            </ul>
                        </ListGroup.Item>
                        <ListGroup.Item className="fw-bold fs-4">${pizza.price?.toLocaleString('es-CL')}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body className="text-center">
                        <Button variant="dark" onClick={() => addToCart(pizza)}>Añadir 🛒</Button >
                    </Card.Body>
                </Card>) : (<h2 className="text-center">No hay pizzas disponibles</h2>)}
            </div>
            <Footer />
        </>


    )
}
export default Pizza