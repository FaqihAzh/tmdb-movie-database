import React from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { setTV } from "../../features/reducers/moviesSlice";

const Switch = ({ data }) => {
  const isTv = useSelector((store) => store.movies.tv);
  const dispatch = useDispatch();

  const toMovies = () => {
    dispatch(setTV(false));
  };

  const toTV = () => {
    dispatch(setTV(true));
  };

  return (
    <>
      <Button
        className={`flex-1 text-sm md:text-base py-1 md:py-2 px-2 md:px-3 font-semibold flex justify-center ${
          isTv ? "text-white" : "bg-[#ff0000] text-white"
        }`}
        onClick={() => {
          toMovies();
        }}
      >
        <span>{data.first_switch}</span>
      </Button>
      <Button
        className={`flex-1 text-sm md:text-base py-2 px-3 font-semibold flex justify-center w-fit  ${
          isTv ? "bg-[#ff0000] text-white" : "text-white"
        }`}
        onClick={() => {
          toTV();
        }}
      >
        <span>{data.second_switch}</span>
      </Button>
    </>
  );
};

export default Switch;
