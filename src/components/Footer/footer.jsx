import styles from "./Footer.module.css";
import { Instagram, Facebook } from 'react-bootstrap-icons';



const Footer = () => {
    return (
        <footer className={`container-fluid ${styles.footer} p-1`}>
            <ul className="nav justify-content-center border-bottom pb-1 p-2 m-1">
                <li className="px-2 mb-2">
                    <a href="#" target="_blank" className="instagram text-light">
                        <Instagram size={23} className={styles.instagram}/>
                    </a>
                </li>
                <li className="px-2 mb-2">
                    <a href="#" target="_blank" className="facebook text-light">
                        <Facebook size={23} className={styles.facebook}/>
                    </a>
                </li>
            </ul>

            
            </footer>
    );
};

export default Footer;