import styles from "../../css/ReservationList.module.css";
import UserReservation from "./UserReservation";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const ReservationList = () => {
  const { userReservations } = useContext(UserContext);

  // Maps out user's reservation(s).
  const reservation = userReservations?.map((reservation, index) => {
    return <UserReservation key={index} reservation={reservation} />;
  });

  return (
    <div className={styles.listing_wrapper}>
      <h2 className={styles.title}>Bokade biljetter</h2>
      {/* <UserReservation /> */}
      {reservation}
    </div>
  );
};

export default ReservationList;
