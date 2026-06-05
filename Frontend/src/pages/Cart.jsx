import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer';
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";

function Cart() {

    const { cart, modificarCantidad } = useContext(CartContext);
    const { user } = useContext(UserContext);

const handleCheckout = async () => {
      console.log(user);
    const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
            cart: cart,
        }),
    });
    let data = await res.json();
    console.log(data)
    if (data.error) {
         alert(data.error) }
    else {
        alert("Compra realizada con exito")
    }
}

    return (
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ textAlign: "center", height: "100vh" }}>
                <h1>Detalles del pedido</h1>
                <div className="row justify-content-center w-100" >
                    <div className="col-md-8  shadow-lg border-0 rounded-4 p-4">
                        <ul className="list-unstyled">
                            {cart.length > 0 ? cart.map((p, i) =>
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

                                </li>) : <h3 className="text-center">El carrito se encuentra vacio. Revisa nuestras pizzas disponibles en el inicio</h3>}
                        </ul>

                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-4">
                    <h2>Total a pagar: ${cart.reduce((total, p) => total + (p.price * p.count), 0).toLocaleString('es-CL')}</h2>
                    <Button variant="success" disabled={!user} onClick={handleCheckout}>Finalizar pedido</Button>
                </div>
            </div>


            <Footer />
        </>

    )
}

export default Cart;