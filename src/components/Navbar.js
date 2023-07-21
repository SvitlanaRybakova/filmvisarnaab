import React, { useContext, useState } from "react";
import styles from "../css/Navbar.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "../contexts/UserContext";
import Login from "../components/login/Login";
import { Modal } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import style from "../css/Login.module.css";

function Navbar1() {
  const {
    handleCloseLoginModal,
    handleShowLoginModal,
    showLogin,
    loggedInUser,
    logout,
  } = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  const handleLogout = () => {
    logout().then((data) => {
      // If logout is successful.
      if (data === true) {
        // Re-directs user to start page if logout is successful (on order and profile pages)
        console.log("location pathname", location.pathname);
        if (
          location.pathname === "/profile" ||
          location.pathname.includes("/order/")
        ) {
          history.push("/");
        }
      }
    });
  };

  return (
    <Navbar className={styles.nav} collapseOnSelect expand="md" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <span className={styles.font}>Filmvisarna</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav className={styles.nav_links}>
          <Nav.Link as={Link} to="/" className={styles.link}>
            START
          </Nav.Link>
          {/* Use when about-page is done */}
          {/* <Nav.Link as={Link} to='/about' className={styles.link}>
            OM OSS
          </Nav.Link> */}
          {loggedInUser ? (
            <Nav.Link as={Link} to="/profile" className={styles.link}>
              MIN PROFIL
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/registration" className={styles.link}>
              REGISTRERA
            </Nav.Link>
          )}
          {loggedInUser ? (
            <Nav.Link onClick={handleLogout} className={styles.link}>
              LOGGA UT
            </Nav.Link>
          ) : (
            <Nav.Link onClick={handleShowLoginModal} className={styles.link}>
              LOGGA IN
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
      {/* Modal */}
      <Modal
        size={"md"}
        centered={true}
        show={showLogin}
        onHide={handleCloseLoginModal}
      >
        <ModalHeader
          className={style.modalCloseButton}
          closeButton
        ></ModalHeader>
        <Login />
      </Modal>
    </Navbar>
  );
}

export default Navbar1;
