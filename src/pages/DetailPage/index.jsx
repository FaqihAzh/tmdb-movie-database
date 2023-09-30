import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../utils/constants/endpoint";
import axios from "axios";
import { updateMovie } from "../../features/moviesSlice";
import DetailMovie from "../../components/Detail";
import Movies from "../../components/Movies";

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getRecommendationMovies();
  }, [params.id]);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));
    const movies = response.data.results;

    dispatch(updateMovie(movies));
  }

  const movies = useSelector((store) => store.movies.movies);

  return (
    <div>
      <DetailMovie />
      <Movies title="Recomendation Movies" movies={movies} />
    </div>
  );
};

export default DetailPage;
