import React from "react";
import { BrandIcon } from "../BrandIcon";
import Overlay from "../Overlay";

import bg from "../../assets/img/bg.jpg";
import Button from "../Button";
import Typography from "../Typography";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full relative bg-center bg-cover bg-no-repeat"
    >
      <Overlay />
      <div className="relative inset-0 px-4 md:px-24 py-16 space-y-24 mt-36">
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-between items-start">
          <BrandIcon />
          <div className="flex gap-24">
            <div className="space-y-4">
              <Button
                type="link"
                href="/"
                className="text-white hover:text-[#ff0000ec] font-normal"
              >
                Home
              </Button>
              <Button
                type="link"
                href="/trending"
                className="text-white hover:text-[#ff0000ec] font-normal"
              >
                Trending Movies
              </Button>
              <Button
                type="link"
                href="/popular"
                className="text-white hover:text-[#ff0000ec] font-normal"
              >
                Popular Movies
              </Button>
              <Button
                type="link"
                href="/upcoming"
                className="text-white hover:text-[#ff0000ec] font-normal"
              >
                Upcoming Movies
              </Button>
              <Button
                type="link"
                href="/now-playing"
                className="text-white hover:text-[#ff0000ec] font-normal"
              >
                Now Playing Movies
              </Button>
              <Button
                type="link"
                href="/top-rated"
                className="text-white hover:text-[#ff0000ec] font-normal"
              >
                Top Rated Movies
              </Button>
            </div>
            <div className="space-y-4">
              <Button
                type="link"
                href="https://www.linkedin.com/in/faqihazh"
                isExternal
                target="_blank"
                className="text-white hover:text-[#ff0000ec] font-normal"
              >
                Linkedin
              </Button>
              <Button
                type="link"
                href="https://github.com/FaqihAzh"
                isExternal
                target="_blank"
                className="text-white hover:text-[#ff0000ec] font-normal"
              >
                Github
              </Button>
              <Button
                type="link"
                href="https://www.instagram.com/faqihazh_/"
                isExternal
                target="_blank"
                className="text-white hover:text-[#ff0000ec] font-normal"
              >
                Instagram
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Typography className="text-white text-center font-semibold opacity-80">
            Created by FaqihAzh 2023
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
