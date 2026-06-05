import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
import { useContext,useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';


export default function Profile() {
    const { logOut, user } = useContext(UserContext);
    const navigate =useNavigate();

    
    return (
        <>
            <Navbar />
            <div className="d-flex align-items-center justify-content-center " style={{ height: "100vh" }}>


                <div>
                    <ListGroup defaultActiveKey="#link1" className="shadow-sm">
                        <ListGroup.Item action href="#link1">
                            Mi perfil
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" disabled>
                            Mis pedidos
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" disabled>
                            Mis direcciones
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3" disabled>
                            Mi Billetera
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div><Card style={{ width: '18rem' }} className="card shadow-lg border-0 rounded-4 p-4">
                    <Card.Img variant="top" src="https://img.freepik.com/fotos-premium/mujer-cabello-largo-camisa-amarilla-esta-pie-frente-fondo-blanco-palabras_1221953-50033.jpg?w=360" />
                    <Card.Body>
                        <Card.Title>Noemí Rubio</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>📧Correo: {user.email}</ListGroup.Item>
                        <ListGroup.Item>📍Dirección: Pasaje 3, Casa 567, Puente Alto</ListGroup.Item>
                        <ListGroup.Item>📱 Telefono: +56 9 1234 5678</ListGroup.Item>
                    </ListGroup>
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <Card.Link href="#">
                            Cambiar contraseña
                        </Card.Link>
                        <Link to="/">
                            <Button variant="dark" onClick={logOut}>
                                Cerrar sesión
                            </Button>
                        </Link>

                    </Card.Body>
                </Card>
                </div>

            </div>
            <Footer />
        </>
    )

}