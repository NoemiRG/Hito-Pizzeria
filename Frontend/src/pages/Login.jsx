import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {

    const {/* setUser, user,*/setToken } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        /*console.log(email, password)
        setUser({ email, password })
        console.log("el usuario es", user)*/

        if (password == '' || email == '') {
            alert("Debe ingresar un correo y una contraseña")
        } else if (password.length < 6) {
            alert("Debe ingresar una contraseña de al menos 6 caracteres")
        }
        else {
            alert("Inicio de sesión exitoso")
            navigate("/");
            setToken(true);
        }

    }



    return (
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "90vh" }}>
                <h1>Iniciar Sesión </h1>
                <form action="" className=" shadow-lg border-0 rounded-4 p-4 d-flex flex-column gap-2" onSubmit={(e) => (handleSubmit(e))}>
                    <label htmlFor="Email">Ingrese su correo</label>
                    <input style={{ width: "40vh" }} type="email" placeholder="mammamia@gmail.com" value={email} onChange={(e) => (setEmail(e.target.value))} />
                    <label htmlFor="Contraseña">Ingrese la contraseña</label>
                    <input style={{ width: "30vh" }} type="password" placeholder="********" value={password} onChange={(e) => (setPassword(e.target.value))} />
                    <Button variant="primary" type="submit">Iniciar Sesión </Button>
                </form>
            </div>
            <Footer />
        </>


    )
}

export default Login;