import styles from "../../css/UserReservation.module.css";
import { useState } from "react";
import { Accordion, Row, Col, Image } from "react-bootstrap";
import moment from "moment";
import "moment/locale/sv";

const UserReservation = ({ reservation }) => {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  // Current time
  const now = moment(new Date()).format();

  const icon = !toggleAccordion ? (
    <i className={`${styles.icon} fas fa-arrow-down`} />
  ) : (
    <i className={`${styles.icon} fas fa-arrow-up`} />
  );

  return (
    <Accordion
      style={{
        backgroundColor:
          reservation?.screening?.startTime <= now ? "#C4C4C4" : "#fff",
      }}
      className={styles.reservation}
    >
      <Row className={styles.header_wrapper} noGutters={true}>
        <Col xs={10} sm={10} md={10} lg={10}>
          <p className={styles.header_information}>
            {reservation?.movie?.title} <br />
            {moment(reservation?.screening?.startTime)
              .locale("sv")
              .format("LLL")}
          </p>
        </Col>
        <Col
          xs={2}
          sm={2}
          md={2}
          lg={2}
          className="d-flex justify-content-end align-items-center"
        >
          <div className={styles.icon_wrapper}>
            <Accordion.Toggle
              onClick={() => setToggleAccordion(!toggleAccordion)}
              eventKey="0"
              as={"span"}
            >
              {icon}
            </Accordion.Toggle>
          </div>
        </Col>
      </Row>
      {/* /.header_wrapper */}

      <Accordion.Collapse eventKey="0">
        <div>
          {/* <hr className={styles.hr} />
          <Row className={styles.movie_wrapper} noGutters={true}>
            <Col xs={3} sm={3} md={3} lg={3}>
              <Image
                className={styles.movie_image}
                src={reservation.movie.image}
                alt="image"
              />
            </Col>
            <Col
              xs={9}
              sm={9}
              md={9}
              lg={9}
              className="d-flex align-items-center"
            >
              <p className={styles.movie_information}>
                {reservation.movie.genre}
                <br /> Längd: {reservation.movie.length}
              </p>
            </Col>
          </Row> */}
          {/* /.movie_wrapper */}
          <hr className={styles.hr} />

          <Row className={styles.auditoria_wrapper} noGutters={true}>
            <Col>
              <p className={styles.auditoria_information}>
                Salong: <br />
                <span className={styles.sub_information}>
                  {reservation?.screening?.auditoriumName}
                </span>
              </p>
            </Col>
            <Col>
              <p className={styles.auditoria_seats_information}>
                Rad och platsnummer
              </p>
              <ul className={styles.ul}>
              {reservation?.tickets.map((ticket, i) => (
                <li key={i}>
                  Rad {ticket.seatNumber[0] + 1}, Plats {ticket.seatNumber[1] + 1}
                </li>
              ))}
              </ul>
            </Col>
          </Row>
          {/* /.auditoria_wrapper */}
          <hr className={styles.hr} />

          <Row className={styles.summary_wrapper} noGutters={true}>
            <Col>
              <p className={styles.summary_information}>
                Antal biljetter:{" "}
                <span className={styles.sub_information}>
                  {reservation?.tickets.length}
                </span>
              </p>
              <p className={styles.summary_information}>
                Totalpris:{" "}
                <span className={styles.sub_information}>
                  {reservation?.totalPrice} kr
                </span>
              </p>
            </Col>
            <Col>
              <p className={styles.order_information}>
                Order:{" "}
                <span className={styles.sub_information}>
                  #{reservation?._id}
                </span>
              </p>
            </Col>
          </Row>
          {/* /.summary_wrapper */}

          <Row noGutters={true}>
            <Col className={styles.button_wrapper}>
              {/* <button className="cancelButton">Avboka</button> */}
            </Col>
            {/* /.button_wrapper */}
          </Row>
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default UserReservation;
