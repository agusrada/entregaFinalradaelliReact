import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";



const NavBar = () => {
    return(
     <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid" >
            {/*brand*/}
            <Link to ="/" className="navbar-brand">Carniceria La Vaca Lola</Link>
            {/* links*/}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to ="/category/vacuno" className="nav-link active" >Vaca</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to ="/category/porcino" className="nav-link active" >Cerdo</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to ="/category/avicola" className="nav-link active" >Pollo</NavLink>
                </li>
            </ul>
            <span className="navbar-text">
            <CartWidget/>
            </span>
            
           </div>
        </nav>
     </div>
    );

};
export default NavBar