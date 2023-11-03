import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../utils/constants/endpoint";
import axios from "axios";
import { setLoading, updateMovie } from "../../features/reducers/moviesSlice";
import DetailMovie from "../../components/Detail";
import Movies from "../../components/Movies";
import Loader from "../../components/Loader";
import { getDetailsAct } from "../../features/actions/movieActions/getDetails";
import MoviesList from "../../components/MoviesList";
import { useGetDataUser } from "../../services/auth/get_user";
import { setUser } from "../../features/reducers/authSlice/authLogin";

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { data } = useGetDataUser();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setUser({ data }));
    getDetailMovie();
    getRecommendationMovies();
  }, [params.id, dispatch, data]);

  const getRecommendationMovies = async () => {
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));
    const movies = response.data.results;

    dispatch(updateMovie(movies));
  };

  const getDetailMovie = () => {
    dispatch(getDetailsAct(params.mediaType, params.id));
  };

  const movies = useSelector((store) => store.movies.movies);
  const loading = useSelector((store) => store.movies.loading);
  const SIMILAR = ENDPOINTS.SIMILAR(params.mediaType, params.id);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <DetailMovie />
      <MoviesList
        title="Because you're watching that"
        ENDPOINTS={SIMILAR}
        sm="2.5"
        md="3.5"
        lg="6.5"
        cursor="true"
        swiper="true"
        grid="2"
        justSwipe="true"
      />
      <Movies title="Recomendation for you" movies={movies} />
    </div>
  );
};

export default DetailPage;
