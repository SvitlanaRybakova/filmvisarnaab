import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { MovieContext } from "./MovieContext";
import { UserContext } from "./UserContext";

export const ReservationContext = createContext();

const ReservationContextProvider = (props) => {
  const { getAllScreeningsForMovie } = useContext(MovieContext);
  const { getAllReservationsForUser } = useContext(UserContext);

  const [movieIdOnOrderPage, setMovieIdOnOrderPage] = useState(null);
  const [screeningIdOnOrderPage, setScreeningIdOnOrderPage] = useState(null);

  const [movieScreenings, setMovieScreenings] = useState(null);
  const [screeningToShow, setScreeningToShow] = useState(null);

  const [seatsChosen, setSeatsChosen] = useState([]);

  useEffect(() => {
    async function changeMovie() {
      if(movieIdOnOrderPage && movieScreenings && (movieIdOnOrderPage !== movieScreenings[0].movieId)) {
        setMovieScreenings(null);
        setScreeningToShow(null)
      }
      if(movieIdOnOrderPage) {
        setMovieScreenings(await getAllScreeningsForMovie(movieIdOnOrderPage));
      }
    }
    changeMovie();
  }, [movieIdOnOrderPage]);

  useEffect(() => {
    // If change in movie or screening --> reset seatsChosen
    setSeatsChosen([]);
  },[screeningIdOnOrderPage, movieIdOnOrderPage]);

  useEffect(() => console.log("Seats chosen by user", seatsChosen));


  // Better to get this from BE and DB..? But we still need to get all screeenings also, and therefore OK to filter in FE, because we already have the info here...
  useEffect(() => {
      if (screeningIdOnOrderPage === null) {
        setScreeningToShow(null);
      } else if (screeningIdOnOrderPage && movieScreenings) {
        setScreeningToShow(...movieScreenings.filter(screen => screen._id === screeningIdOnOrderPage));
      }
  }, [screeningIdOnOrderPage, movieScreenings]);

  useEffect(() => console.log("movie Screenings", movieScreenings),[movieScreenings]);
  useEffect(() => console.log("one screening", screeningToShow),[screeningToShow]);

  useEffect(() => {}, [
    movieIdOnOrderPage,
    movieScreenings,
    screeningIdOnOrderPage,
    screeningToShow,
  ]);

  const saveReservation = async (reservationInfo) => {
    console.log(reservationInfo);
    let result = await fetch("/api/v1/reservations/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservationInfo),
    });
    result = await result.json();
    console.log("in saveReserv, result:", result);
    if (result.status === "error") {
      console.log("Error. Could not save reservation");
      return false;
    } else {
      console.log("Seats booked", result.reservation);
      //When possible --> Update list of user reservations showed on ProfilePage.
      getAllReservationsForUser();
      return result.reservation;
    }
  };

  const getTickets = () => {
    const tickets = [];
    for(let i = 0; i < seatsChosen.length; i++) {
      tickets.push({ ticketType: "adult", seatNumber: seatsChosen[i]});
    }
    return tickets;
  }

  const userConfirmsReservation = async () => {
    let result = await saveReservation({
      screeningId: screeningToShow._id,
      tickets: getTickets(),
      totalPrice: seatsChosen.length * screeningToShow.price
    });
    return result;
  }


  const values = {
    saveReservation,
    movieIdOnOrderPage,
    setMovieIdOnOrderPage,
    screeningIdOnOrderPage,
    setScreeningIdOnOrderPage,
    movieScreenings,
    screeningToShow,
    //setScreeningToShow,
    seatsChosen,
    setSeatsChosen,
    userConfirmsReservation
  };

  return (
    <ReservationContext.Provider value={values}>
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationContextProvider;


  //     reservationInfo needs to look like following for func to work
  //     {
  //       screeningId: "ObjectId",
  //       tickets: [{
  //         ticketType: "adult",
  //         seatNumber: [y,x]
  //       }]
  //       totalPrice: Number,
  //     }