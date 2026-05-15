import Button from 'react-bootstrap/Button';
import errorImg from "../img/404.png";
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
                <div className="col-md-8 shadow-lg border-0 rounded-4 p-4 text-center"
                    style={{
                        backgroundImage: `url(${errorImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "800px"
                    }} >
                    <h1 className="mb-4">
                        404 - Página no encontrada
                    </h1>
                    <Link to="/">
                    <Button variant="dark">
                        Volver al Inicio
                    </Button>
                    </Link>
                    
                </div>
            </div>
        </>
    )

}