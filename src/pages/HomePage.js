import MovieWrapper from '../components/MovieWrapper'
import ImgCarousel from "../components/ImgCarousel"
import MovieSchedule from "../components/MovieSchedule"
import styles from "../css/HomePage.module.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
 
  return (
    <div className='homePage'>
      <ImgCarousel />
      {/* Search bar component goes here */}
      <Row>
        <Col xs={0}>
          {/* Filter component goes here */}
        </Col>
        <Col xs={12}>
          <MovieWrapper/>
        </Col>
      </Row>

      {/* "Visas idag" goes here */}
      {/* <div className={styles.scheduleWrapper}>
        <h2>Visas idag</h2>
      <MovieSchedule
      time={"19.00"}
      title={"Guardians of the Galaxy Vol. 2"}
      auditorium={"Stora salongen"}
      isHomePage={true}
     />
     <MovieSchedule
      time={"19.00"}
      title={"The Fast and the Furious"}
      auditorium={"Lilla salongen"}
      isHomePage={true}
     />
      </div> */}
    </div>

  );
};

export default HomePage;
