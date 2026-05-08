import { useState } from "react";
import Button from 'react-bootstrap/Button';

function Register(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password=='' || email==''){
            alert("Debe ingresar un correo y una contraseña")
        }else if (password.length<6 && password2.length<6){
            alert("Debe ingresar una contraseña de al menos 6 caracteres")
        }else if (password!==password2){
            alert("Las contraseñas no coinciden")
        }
        else{
            alert("Registro exitoso")
            setEmail("")
            setPassword("")
            setPassword2("")
        }

    }


    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height: "50vh"}}>
            <h1>Registrarse </h1>
            <form action="" className="border border-dark p-4 rounded d-flex flex-column gap-1 " onSubmit={(e)=> (handleSubmit(e))}>
            <label htmlFor="Email">Ingrese su correo</label>
            <input style={{width: "40vh"}} type="text" placeholder="mammamia@gmail.com" value={email} onChange={(e)=> (setEmail(e.target.value))}/>
            <label htmlFor="Contraseña">Ingrese la contraseña</label>
            <input style={{width: "30vh"}} type="password" placeholder="********" value={password} onChange={(e)=> (setPassword(e.target.value))}/>
            <label htmlFor="Contraseña">Ingrese nuevamente la contraseña</label>
            <input style={{width: "30vh"}} type="password" placeholder="********" value={password2} onChange={(e)=> (setPassword2(e.target.value))}/>
            <Button variant="primary" type="submit">Crear cuenta </Button>
        </form>
        </div>
        
    )
}

export default Register;