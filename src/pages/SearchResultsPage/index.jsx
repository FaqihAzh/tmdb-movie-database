import React from "react";
import { useLocation } from "react-router-dom";
import Movies from "../../components/Movies";
import Typography from "../../components/Typography";

const SearchResultsPage = () => {
  const location = useLocation();
  const results = location.state.results;
  const searchQuery = new URLSearchParams(location.search).get("query");

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
