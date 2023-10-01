import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../utils/constants/endpoint";
import Typography from "../Typography";
import Overlay from "../Overlay";
import Button from "../Button";

const DetailMovie = () => {
  const params = useParams();
  const [movie, setMovie] = useState("");

  const poster = ENDPOINTS.W500_IMAGE(
    movie.poster_path ? movie.poster_path : movie.backdrop_path
  );

  const background = ENDPOINTS.ORIGINAL_IMAGE(
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  );

  const genres = movie && movie.genres.map((genre) => genre.name).join(" | ");
  const date = movie && movie.release_date.substring(0, 4);
  const countries =
    movie &&
    movie.production_countries.map((countries) => countries.name).join(", ");
  const rate = movie && movie.vote_average.toFixed(1);
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    getDetailMovie();
  }, [params.id]);

  async function getDetailMovie() {
    const response = await axios(
      ENDPOINTS.DETAIL_TREND(params.id)
        ? ENDPOINTS.DETAIL_TREND(params.id)
        : ENDPOINTS.DETAIL_TV(params.id)
    );

    setMovie(response.data);
  }

  return (
    <div
      className="py-24 sm:py-36 w-full relative bg-center bg-cover bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Overlay />
      <div className="flex flex-col md:flex-row gap-4 px-4 md:px-24 items-center">
        <div className="relative w-full md:w-2/6">
          <img
            src={`${poster}`}
            alt=""
            className="w-full md:w-80 shadow-custom rounded-xl"
            style={{ zIndex: 10 }}
          />
        </div>
        <div className="relative w-full md:w-4/6">
          <div className="flex flex-col gap-4">
            <Typography variant="title">
              {movie.title ? movie.title : movie.name}
              <span className="font-semibold"> ({date ? date : ""})</span>
            </Typography>
            <Typography variant="subtitle">
              <span className="text-yellow-500">{genres ? genres : ""}</span>
            </Typography>
            <Typography variant="paragraph">{movie.overview}</Typography>
            <div className="flex gap-4 md:gap-2 items-start md:items-center flex-col md:flex-row">
              <Typography
                variant="paragraph"
                className="font-medium flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                <span>{countries}</span>
              </Typography>
              <Typography className="bg-white w-1.5 h-1.5 rounded-full hidden md:block"></Typography>
              <Typography
                variant="paragraph"
                className="font-medium flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span>{movie.runtime} minutes</span>
              </Typography>
            </div>
            <Typography variant="paragraph" className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="font-semibold">
                <span className="text-yellow-500">{rate}</span> / 10
              </span>
            </Typography>
            <Button
              className="hover:scale-y-110"
              isPrimary
              type="link"
              isExternal
              href={trailer}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
              <span>Watch Now</span>
            </Button>
            <Button
              className="hover:scale-y-110"
              isOutlineWhite
              type="link"
              isExternal
              href={movie.homepage}
              target="_blank"
            >
              <span>Check Details</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
