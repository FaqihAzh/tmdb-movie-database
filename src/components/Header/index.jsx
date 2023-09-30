import React, { useState } from "react";
import SearchInput from "../SearchInput";
import { BrandIcon } from "../BrandIcon";
import Button from "../Button";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r sm:bg-transparent from-black sm:from-transparent via-transparent sm:via-transparent sm:to-transparent to-black bg-opacity-75 rounded-b-xl sm:bg-opacity-0">
      <div className="flex justify-between items-center py-4 px-4 md:px-24">
        <BrandIcon />
        <div className="hidden sm:flex justify-center w-full">
          <SearchInput />
        </div>
        <div className="gap-2 hidden sm:flex">
          <Button className="hover:scale-105" isOutlineRed>
            Login
          </Button>
          <Button className="hover:scale-105" isPrimary>
            Register
          </Button>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {showMenu && (
        <>
          <div className="sm:hidden flex flex-col gap-4 w-full px-4 mt-4 pb-6">
            <div className="flex flex-row items-center gap-4 w-full">
              <Button isOutlineRed isBlock>
                Login
              </Button>
              <Button isPrimary isBlock>
                Register
              </Button>
            </div>
            <SearchInput />
          </div>
          <div className="hidden sm:flex sm:justify-center sm:gap-4 sm:items-center py-4 px-4 md:px-24">
            <SearchInput />
            <div className="flex gap-2">
              <Button isOutlineRed>Login</Button>
              <Button isPrimary>Register</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
