/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { getSearchAct } from "../../features/actions/movieActions/getSearch";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (
      location.pathname !== "/search-results" &&
      location.pathname !== "/search-results?query=" + searchQuery
    ) {
      setSearchQuery("");
    }
  }, [location.pathname]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchMovies = async () => {
    if (searchQuery.trim() !== "") {
      const movies = await dispatch(getSearchAct(searchQuery));

      navigate("/search-results?query=" + searchQuery, {
        state: { results: movies, query: searchQuery },
      });
    } else {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative flex items-center text-gray-300 focus:text-white w-full sm:w-3/5">
      <input
        ref={inputRef}
        type="text"
        name="search"
        autoComplete="none"
        placeholder="What do you want to watch"
        aria-label="What do you want to watch"
        className="w-full pl-4 pr-10 py-2 font-normal text-base bg-transparent text-white placeholder-gray-300 rounded-2xl sm:rounded-full border-none ring-1 ring-gray-300 focus:ring-[#FF0000] focus:ring-1 focus:outline-none"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <Button onClick={searchMovies} className="absolute right-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 hover:scale-125 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </Button>
    </div>
  );
};

export default SearchInput;
