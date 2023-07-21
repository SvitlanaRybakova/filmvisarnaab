import React from "react";
import styles from "../css/Footer.module.css";

const Footer = () => {
    return (
        <footer className={`${styles.mainFooter}`}  >
                <div className="row d-flex align-items-center mb-2 mb-md-3">
                    <div className="col">
                        <p className={styles.logo}>Filmvisarna</p>
                    </div>
                    <div className="col align-items-center d-none d-sm-block">
                            <address className={styles.adresstext}>
                                Adressgatan 11, 123 45 Staden
                            </address>
                    </div>
                    <div className="col offset-sm-1 col-sm-3 offset-xl-2 col-xl-2 d-flex justify-content-around align-items-center">
                        <i className={`${styles.icon} fab fa-facebook-f`}></i>
                        <i className={`${styles.icon} fab fa-instagram`}></i>
                        <i className={`${styles.icon} fab fa-twitter`}></i>
                    </div>
                </div>
                <div>
                    <p className={`${styles.copy}`}>
                    &copy;{new Date().getFullYear()}FILMVISARNA AB <br className="d-sm-none"/> <span className="d-none d-sm-inline" >| </span> Copyright | Vi använder cookies | Integritetspolicy
                    </p>
                </div>
        </footer>

    )
}

export default Footer;