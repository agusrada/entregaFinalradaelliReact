import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from "../../ItemCount/ItemCount";
import CartContext from "../../../context/CartContext";
import BtnBack from "../../BtnBack/BtnBack";



const ItemDetail = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
        };

        addItem(item, quantity)
        toast.info("Producto Agregado al Carrito", {
            theme: "white",
            icon: "+",
            autoClose: 1500
        });
    };

    if (!product) {
        return <p>Producto no encontrado</p>
    };
    
    return (
        <div>
            <div key={product.id} className="text-white p-5">
                <BtnBack to="/" />
                <div className="container d-flex flex-column flex-lg-row justify-content-center mt-5">

                    <div className="ms-2 col-5">
                        <h2>{product.name}</h2>
                        <h4>$ {product.price}</h4>
                        <p>Stock: {product.stock}</p>
                        <div className="my-4">
                            <ItemCount onAdd={handleOnAdd}/>
                            {quantityAdded > 0 ? 
                                <Link
                                    to='/cart'
                                    className="btn btn-light container m-1 col-7">Ir al Carrito</Link> : 
                                <Link
                                    to='/cart'
                                    className="btn btn-light container m-1 col-7 disabled">Ir al Carrito</Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;