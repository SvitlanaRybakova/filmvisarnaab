import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import OrderPage from './pages/OrderPage';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import UserContextProvider from './contexts/UserContext';
import MovieContextProvider from './contexts/MovieContext';
import './css/App.css';
import Navbar from './components/Navbar';
import ReservationContextProvider from './contexts/ReservationContext';
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <MovieContextProvider>
          <ReservationContextProvider>
            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/movies/:movieId' component={MoviePage} />
                <Route
                  exact
                  path='/order/:movieId/:screeningId?'
                  component={OrderPage}
                />
                <Route
                  exact
                  path='/registration'
                  component={RegistrationPage}
                />
                <Route exact path='/profile' component={ProfilePage} />
              </Switch>
            </BrowserRouter>
          </ReservationContextProvider>
        </MovieContextProvider>
      </UserContextProvider>
      <Footer />
    </div>
  );
}

export default App;
