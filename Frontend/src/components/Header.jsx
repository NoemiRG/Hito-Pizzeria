import headerImg from "../img/Header.jpg";


function Header() {
    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url(${headerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px"
            }}
        >
            <div className="text-white text-center">
                <h1>¡Pizzería Mamma Mia! </h1>
                <h4>Tenemos las mejores pizzas y promociones para tu bolsillo</h4>
            </div>
        </div>
    )
}

export default Header;