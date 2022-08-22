import React, { useEffect, useState } from 'react'
import "./Movie.css"
import axios from 'axios';

const Movie = ({ title, fetchUrl, searchTerm }) => {
  const [movie, setMovie] = useState([]);
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3${fetchUrl}`)
      .then((resp) => {
        setMovie(resp.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [fetchUrl]);
  return (
    <div className="movies__wrapper">
      {movie &&
        <h5>{title}</h5>
      }
      <div className="firstRow">
        {movie
          .filter((val) => val.title?.toLowerCase().includes(searchTerm))
          .map(({ title, id, backdrop_path }) =>
            title && backdrop_path && backdrop_path ? (
              <div className="movie" key={id}>
                <div
                  className="movie__container"
                  style={{
                    backgroundImage: `linear-gradient(92.75deg,rgba(0, 0, 0, 0.5) 37.33%, rgba(0, 0, 0, 0.5)), url(${imageBaseUrl}${backdrop_path})`,
                    backgroundRepeat: "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >                  
                  <h5>{title}</h5>
                </div>
              </div>
            ) : null
          )}
      </div>
    </div>
  );
};

export default Movie