import styles from "../../css/ConfirmModal.module.css";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import "moment/locale/sv";

const ConfirmModal = ({ handleCloseConfirmModal, userConfirmationInfo }) => {
  const reservation = (
    <Container fluid className={styles.reservation}>
      <Row className={styles.reservation_header_wrapper} noGutters={true}>
        <Col>
          <p className={styles.reservation_header_information}>
            {userConfirmationInfo.movie.title}
            <br />
            {moment(userConfirmationInfo.screening.startTime)
              .locale("sv")
              .format("LLL")}
          </p>
        </Col>
      </Row>
      {/* /.reservation_header_wrapper */}
      <hr className={styles.hr} />

      <Row className={styles.auditoria_wrapper} noGutters={true}>
        <Col>
          <p className={styles.auditoria_information}>
            Salong: <br />
            <span className={styles.sub_information}>
              {userConfirmationInfo.screening.auditoriumName}
            </span>
          </p>
        </Col>
        <Col>
          <p className={styles.auditoria_seats_information}>
            Rad och platsnummer
          </p>
          <ul className={styles.ul}>
            {userConfirmationInfo.tickets.map((ticket, i) => (
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
              {userConfirmationInfo.tickets.length}st
            </span>
          </p>
          <p className={styles.summary_information}>
            Totalpris:{" "}
            <span className={styles.sub_information}>
              {Number(userConfirmationInfo.totalPrice)} kr
            </span>
          </p>
        </Col>
        <Col>
          <p className={styles.order_information}>
            Order:{" "}
            <span className={styles.sub_information}>
              #{userConfirmationInfo._id}
            </span>
          </p>
        </Col>
      </Row>
      {/* /.summary_wrapper */}
    </Container>
  );

  return (
    <div className={styles.modal_container}>
      <h2 className={styles.header}>Biljetter bokade!</h2>
      {reservation}
      <div className={styles.button_confirm_wrapper}>
        <button
          onClick={handleCloseConfirmModal}
          className={`${styles.button_confirm} btn`}
        >
          OK
        </button>
      </div>
      {/* /.button_wrapper */}
    </div>
  );
};

export default ConfirmModal;
