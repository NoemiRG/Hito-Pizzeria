import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer';

function Cart() {

    const [pizzaCart, setPizzaCart] = useState([

        {
            id: "P001",
            name: "napolitana",
            price: 5950,
            count: 1,
            img: "https://easyways.cl/storage/20210208143331pizza-napolitana.jpg",
        },
        {
            id: "P002",
            name: "española",
            price: 7250,
            count: 1,
            img: "https://totale.es/wp-content/uploads/2025/01/pizza-a-la-espanola-con-jamon-serrano.jpg",
        },
        {
            id: "P003",
            name: "salame",
            price: 5990,
            count: 1,
            img: "https://img.freepik.com/foto-gratis/clasica-pizza-pepperoni-salsa-tomate-queso-derretido-parte-superior_114579-2670.jpg?semt=ais_hybrid&w=740&q=80",
        },
    ]);

    const modificarCantidad = (operacion, id) => {
        let productoAModificar = pizzaCart.find(p => p.id === id);

        if (operacion === "suma") {
            productoAModificar.count = productoAModificar.count + 1;
        } else {
            productoAModificar.count = productoAModificar.count - 1;
        }

        let productoModificado = pizzaCart.map(p => p.id === id ? productoAModificar : p);
        setPizzaCart(productoModificado);

    }



    return (
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ textAlign: "center", height: "100vh" }}>
                <h1>Detalles del pedido</h1>
                <div className="row justify-content-center w-100" >
                    <div className="col-md-8  shadow-lg border-0 rounded-4 p-4">
                        <ul className="list-unstyled">
                            {pizzaCart.map((p, i) =>
                                <li key={i} className='mb-4'>
                                    <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
                                        <div className="d-flex align-items-center gap-4">
                                            <img src={p.img} alt="" width={[100]} />
                                            <h5>{p.name}</h5>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between gap-3 ">
                                            <Button variant="outline-danger" onClick={() => modificarCantidad("resta", p.id)}>-</Button>
                                            <h5>{p.count}</h5>
                                            <Button variant="outline-success" onClick={() => modificarCantidad("suma", p.id)}>+</Button>
                                            <h5>Total : ${(p.price * p.count).toLocaleString('es-CL')}</h5>
                                        </div>
                                    </div>

                                </li>)}
                        </ul>

                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-4">
                    <h2>Total a pagar: ${pizzaCart.reduce((total, p) => total + (p.price * p.count), 0).toLocaleString('es-CL')}</h2>
                    <Button variant="success">Finalizar pedido</Button>
                </div>
            </div>


            <Footer />
        </>

    )
}

export default Cart;