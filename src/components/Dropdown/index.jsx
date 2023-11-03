import React, { useState } from "react";
import { LogOut } from "../../features/actions/authActions/authLogin";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.authLogin.user);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(LogOut());
    toast.success("Logout Success");
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <Button
          onClick={toggleDropdown}
          className="outline outline-[#FF0000] outline-1 inline-flex justify-center items-center w-max rounded-full text-lg px-4 py-2 bg-[#FF0000] font-medium text-white "
          id="options-menu"
          aria-haspopup="listbox"
        >
          <div className="flex items-center justify-center gap-1 ">
            <span>Hallo, {data?.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </Button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-full  bg-white ">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Button
              onClick={handleLogout}
              className="block w-full text-left px-6 py-2 text-base font-normal rounded-full"
              role="menuitem"
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
