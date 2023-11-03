import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../Movies";

const MoviesList = ({
  title,
  ENDPOINTS,
  sm,
  md,
  lg,
  cursor,
  swiper,
  link,
  grid,
  justSwipe,
}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getDataMovies();
  }, []);

  async function getDataMovies() {
    const response = await axios(ENDPOINTS);
    const movies = response.data.results;

    setMovies(movies);
  }

  return (
    <div>
      <Movies
        title={title}
        movies={movies}
        sm={sm}
        md={md}
        lg={lg}
        cursor={cursor}
        swiper={swiper}
        link={link}
        grid={grid}
        justSwipe={justSwipe}
      />
    </div>
  );
};

export default MoviesList;
