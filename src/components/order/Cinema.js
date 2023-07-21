import styles from "../../css/Cinema.module.css";
import { useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
// import { Row, Col } from "react-bootstrap";
// import Chair from "./Chair";

const Cinema = () => {
  // Context
  const { screeningToShow } = useContext(ReservationContext);

  const renderSeats =
    screeningToShow &&
    screeningToShow.seats.map((row, rowIndex) => {
      return row.map((seat, seatIndex) => {
        if (
          screeningToShow &&
          screeningToShow.seats[rowIndex][seatIndex] === 1
        ) {
          return (
            <div className="d-inline">
              <Chair
                key={rowIndex + seatIndex}
                id={rowIndex + seatIndex}
                row={rowIndex}
                seat={seatIndex}
                reserved={true}
              />
              {screeningToShow &&
                screeningToShow.seats[rowIndex].length === seatIndex + 1 && (
                  <br />
                )}
            </div>
          );
        }
        // reserved = true

        if (
          screeningToShow &&
          screeningToShow.seats[rowIndex][seatIndex] === 0
        ) {
          return (
            <div className="d-inline">
              <Chair
                key={rowIndex + seatIndex}
                row={rowIndex}
                seat={seatIndex}
                reserved={false}
              />
              {screeningToShow &&
                screeningToShow.seats[rowIndex].length === seatIndex + 1 && (
                  <br />
                )}
            </div>
          );
        }
        // reserved = false
      });
    });

  return <div className={styles.cinema_wrapper}>{renderSeats}</div>;
};

export default Cinema;
