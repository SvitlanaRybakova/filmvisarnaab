import { useContext, useEffect, useState } from "react";
import styles from "./styles/Tickets.module.css";
import { ReservationContext } from "../../contexts/ReservationContext";
import { Container, Row, Col, Modal } from "react-bootstrap";
import CustomButton from "../CustomButton";
import moment from "moment";
import "moment/locale/sv";
import ConfirmModal from "./ConfirmModal";
import { useHistory } from "react-router-dom";

const Tickets = () => {
  const [userConfirmationInfo, setUserConfirmationInfo] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Context
  const { seatsChosen, screeningToShow, userConfirmsReservation } =
    useContext(ReservationContext);

  const history = useHistory();

  useEffect(() => {}, [userConfirmationInfo]);

  const handleCloseConfirmModal = () => {
    // When user click on OK button, ConfirmModal will close.
    setShowConfirmModal(false);

    //  Re-directs user to start page after closing ConfirmModal.
    history.push("/");
  };

  const handleConfirmClick = async () => {
    let result = await userConfirmsReservation();
    if (!result) {
      console.log("Something went wrong, error with booking tickets");
    } else {
      console.log("result", result);
      // Saves user recent reservation inside state variable: userConfirmationInfo
      setUserConfirmationInfo(result);

      // If booking is confirmed, show ConfirmModal.
      setShowConfirmModal(true);
    }
  };

  // Renders each ticket that the user has selected from screening.
  const ticket =
    seatsChosen &&
    seatsChosen.map((seat) => {
      return (
        <>
          <Container className={styles.ticket_container} fluid key={seat}>
            <Row noGutters={true}>
              <Col lg={5}>
                <p>
                  <span>{screeningToShow.movieId.title} </span>
                  <br />
                  <span>{moment(screeningToShow.startTime).format("lll")}</span>
                </p>
              </Col>
              {/* <Col lg={5}>Vuxen, pensionär, barn</Col> */}
            </Row>
            <Row noGutters={true}>
              <Col>
                <ul className={styles.ul}>
                  <li>
                    Rad: {seat[0] + 1}, Plats: {seat[1] + 1}
                  </li>
                </ul>
              </Col>
              <Col>Pris: {screeningToShow.price} kr</Col>
            </Row>
          </Container>
        </>
      );
    });

  return (
    <>
      {screeningToShow && (
        <div className={`${styles.tickets_wrapper}`}>
          <div className={styles.ticket_wrapper_upper}>
            <h2 className={styles.title}>Valda biljetter</h2>
            {ticket}
          </div>
          {/* ticket_wrapper_upper */}
          <div className={styles.ticket_wrapper_bottom}>
            <hr className={styles.hr} />
            {seatsChosen.length > 0 && (
              <p className={styles.price}>
                Total pris:{" "}
                <span>{seatsChosen.length * screeningToShow.price}</span> kr
              </p>
            )}
            {/* <div className={styles.button_wrapper}>
              <CustomButton text="Boka" />
              </div> */}
            {seatsChosen.length > 0 && (
              <div className="d-flex justify-content-center mt-4">
                <CustomButton
                  text="Boka biljetter"
                  clickHandler={handleConfirmClick}
                />
              </div>
            )}
          </div>
          {/* /ticket_wrapper_bottom */}
          <Modal
            centered={true}
            size={"lg"}
            show={showConfirmModal}
            onHide={handleCloseConfirmModal}
          >
            <ConfirmModal
              userConfirmationInfo={userConfirmationInfo}
              handleCloseConfirmModal={handleCloseConfirmModal}
            />
          </Modal>
        </div>
      )}
    </>
  );
};
export default Tickets;
