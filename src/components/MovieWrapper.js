import { useContext, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "../css/MovieWrapper.module.css";
import React from "react";
import { MovieContext } from "../contexts/MovieContext";

export default function MovieWrapper() {
  const { allMovies } = useContext(MovieContext);

  const [showAllMovies, setShowAllMovies] = useState(false);

  const renderCards = () => {
    if (allMovies) {
      if (showAllMovies) {
        return allMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ));
      } else {
        return allMovies
          .map((movie) => <MovieCard key={movie._id} movie={movie} />)
          .slice(0, 6);
      }
    } else {
      // todo implement Spinner?
      return <p>...loading</p>;
    }
  };
  return (
    <div className="mt-3">
      <h2 className={styles.heading}>{ showAllMovies ? "Alla filmer" : "Mest sedda filmer"} </h2>
      <div
        className={`${styles.wrapper} p-0 my-4 d-flex flex-wrap justify-content-around mx-auto`}
      >
        {renderCards()}

      <div className={`col-12 justify-content-end ${styles.showAllBtnContainer}`}>
        <button
          className={styles.showAllBtn}
          onClick={() => setShowAllMovies(!showAllMovies)}
        >
          {showAllMovies ? (
            <span>
              Visa färre <i class="fas fa-arrow-up"></i>
            </span>
          ) : (
            <span>
              Visa alla filmer <i class="fas fa-arrow-down"></i>
            </span>
          )}
        </button>
        </div>
      </div>
    </div>
  );
}
