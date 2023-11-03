import React, { useState, useEffect } from "react";
import SearchInput from "../SearchInput";
import { BrandIcon } from "../BrandIcon";
import Button from "../Button";
import { useLocation } from "react-router-dom"; // Import useLocation
import { CookieKeys, CookieStorage } from "../../utils/constants/cookies";
import { useDispatch } from "react-redux";
import { LogOut } from "../../features/actions/authActions/authLogin";
import { toast } from "react-toastify";
import Dropdown from "../Dropdown";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(true);
  const token = CookieStorage.get(CookieKeys.AuthToken);
  const location = useLocation();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    dispatch(LogOut());
    toast.success("Logout Success");
  };

  useEffect(() => {
    const isOnLoginOrRegisterPage =
      location.pathname === "/login" || location.pathname === "/register";
    setShowSearchInput(!isOnLoginOrRegisterPage);
  }, [location.pathname]);

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r sm:bg-transparent from-black sm:from-transparent via-transparent sm:via-transparent sm:to-transparent to-black bg-opacity-75 rounded-b-xl sm:bg-opacity-0">
      <div className="flex justify-between items-center py-4 px-4 md:px-24">
        <BrandIcon />
        {showSearchInput && (
          <div className="hidden sm:flex justify-center w-full">
            <SearchInput />
          </div>
        )}
        {!token ? (
          <div className="gap-2 hidden sm:flex">
            <Button
              className="hover:scale-105"
              isOutlineRed
              type="link"
              href="/login"
            >
              Login
            </Button>
            <Button
              className="hover:scale-105"
              isPrimary
              type="link"
              href="/register"
            >
              Register
            </Button>
          </div>
        ) : (
          <div className="hidden md:block">
            <Dropdown />
          </div>
        )}
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
            {!token ? (
              <div className="flex flex-row items-center gap-4 w-full">
                <Button isOutlineRed isBlock>
                  Login
                </Button>
                <Button isPrimary isBlock>
                  Register
                </Button>
              </div>
            ) : (
              <div className="flex flex-row items-center gap-4 w-full">
                <Button isPrimary isBlock onClick={handleLogout}>
                  Log Out
                </Button>
              </div>
            )}
            {showSearchInput && <SearchInput />}
          </div>

          {/* <div className="hidden sm:flex sm:justify-center sm:gap-4 sm:items-center py-4 px-4 md:px-24">
            <SearchInput />
            <div className="flex gap-2">
              <Button isOutlineRed>Login</Button>
              <Button isPrimary>Register</Button>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Header;
