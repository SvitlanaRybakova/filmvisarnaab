import styles from "../css/OrderPage.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ScreeningPicker from "../components/orderpage/ScreeningPicker";
import Cinema from "../components/orderpage/Cinema";
import Tickets from "../components/orderpage/Tickets";

export default function OrderPage() {
  return (
    <Container className="mt-5" fluid>
      <h2>Boka biljetter</h2>
      <ScreeningPicker />
      <div id={styles.content_wrapper}>
        <div id={styles.cinema_wrapper}>
          <Cinema />
        </div>
        <div id={styles.tickets_wrapper}>
          <Tickets />
        </div>
      </div>
    </Container>
  );
}
