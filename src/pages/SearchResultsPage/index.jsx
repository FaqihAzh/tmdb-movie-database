import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Movies from "../../components/Movies";
import Typography from "../../components/Typography";
import { useGetDataUser } from "../../services/auth/get_user";
import { setUser } from "../../features/reducers/authSlice/authLogin";
import { useDispatch } from "react-redux";

const SearchResultsPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const results = location.state.results;
  const searchQuery = new URLSearchParams(location.search).get("query");

  const { data } = useGetDataUser();

  useEffect(() => {
    dispatch(setUser({ data }));
  }, [data]);

  return (
    <div className="py-24">
      {results && results.length > 0 ? (
        <Movies title={`Results for ${searchQuery}`} movies={results} />
      ) : (
        <Typography className="font-semibold text-white text-lg text-left mt-16 px-4 md:px-24">
          No results found for <span className="italic">"{searchQuery}"</span>
        </Typography>
      )}
    </div>
  );
};

export default SearchResultsPage;
