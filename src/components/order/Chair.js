import React, { useEffect, useState, useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
import { Row, Col } from "react-bootstrap";
import styles from "./styles/Chair.module.css";

export default function Chair({
  reserved,
  row,
  seat,
  detailsSelectedChair,
  deailsOrderedChair,
}) {
  const { seatsChosen, setSeatsChosen } = useContext(ReservationContext);

  const [isChosen, setIsChosen] = useState(false);

  const handleChairClick = (seatNumber) => {
    if (reserved) {
      console.log("Not bookable...");
    } else {
      setIsChosen((prevState) => !prevState);
      console.log("You clicked a seat", seatNumber);
      // send seatNumber to ReservationContext/set variable in ReservationContext
      const alreadyPicked = seatsChosen.some(
        (seat) => seat[0] === seatNumber[0] && seat[1] === seatNumber[1]
      );
      console.log(alreadyPicked);
      if (alreadyPicked) {
        setSeatsChosen(
          seatsChosen.filter((seat) =>
            seat[0] === seatNumber[0] && seat[1] === seatNumber[1]
              ? false
              : true
          )
        );
      } else {
        setSeatsChosen((prevState) => [...prevState, seatNumber]);
      }
    }
  };

  return (
    <>
      {detailsSelectedChair && (
        <>
        <Row>
          <Col
            sm={12}
            md={6}
            className="d-flex align-items-center justify-content-center justify-content-md-end"
          >
            <div className={`${styles.chairItem}  ${styles.chosen}`}></div>
            <span className={styles.spanDescrittions}>Vald plats</span>
          </Col>
        </Row>
        </>
      )}

      {deailsOrderedChair && (
        <Row>
          <Col
            sm={12}
            md={6}
            className="d-flex align-items-center justify-content-center justify-content-md-end"
          >
            <div className={`${styles.chairItem}  ${styles.reserved}`}></div>
            <span className={styles.spanDescrittions}>Bokad plats</span>
          </Col>
        </Row>
      )}
      {!detailsSelectedChair && !deailsOrderedChair && (
        <div
          className={
            reserved
              ? `${styles.chairItem}  ${styles.reserved}`
              : isChosen
              ? `${styles.chairItem}  ${styles.chosen}`
              : `${styles.chairItem}`
          }
          onClick={() => handleChairClick([row, seat])}
        >
          <span className={styles.tooltip}>
            {reserved ? (
              <span>Redan bokad! </span>
            ) : (
              <span>
                Rad: <strong>{row + 1}</strong> {""}
                Plats: <strong>{seat + 1} </strong>{" "}
              </span>
            )}
          </span>
        </div>
      )}
    </>
  );
}
