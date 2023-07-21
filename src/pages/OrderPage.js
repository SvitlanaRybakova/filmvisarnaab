import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReservationContext } from "../contexts/ReservationContext";
import { Container, Row, Col } from "react-bootstrap";

import Auditorium from "../components/order/Auditorium";
import ScreeningPicker from "../components/order/ScreeningPicker";
import CustomButton from "../components/CustomButton";
import styles from "../css/OrderPage.module.css";
import Tickets from "../components/order/Tickets";

// For this page is necessarily (otherwise page not be loaded) to click the "BOOK" button, Because screening id  is needed for to find  the desired movie !!!!!
export default function OrderPage() {
  const { setMovieIdOnOrderPage, setScreeningIdOnOrderPage } = useContext(
    ReservationContext
  );
  const { movieId, screeningId } = useParams();

  useEffect(() => setScreeningIdOnOrderPage(screeningId), [screeningId]);
  useEffect(() => setMovieIdOnOrderPage(movieId), [movieId]);

  return (
    <div className="mx-3 py-5">
      <Row>
        <Col lg={6}>
          <h2 className={styles.pageHeader}>Boka biljetter</h2>
          <ScreeningPicker />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Auditorium />
        </Col>
        <Col lg={6}>
          <Tickets />
        </Col>
      </Row>
    </div>
  );
}
