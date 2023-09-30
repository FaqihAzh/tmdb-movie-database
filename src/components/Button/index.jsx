import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Button = (props) => {
  const { type, onClick, href, target, isExternal, children, className } =
    props;

  const getButtonClass = () => {
    const baseClasses = [
      `cursor-pointer flex items-center rounded-2xl sm:rounded-full font-medium text-base ${className}`,
      props.isOutlineRed &&
        `hover:outline-[#FFFFFF] hover:text-white justify-center py-2 px-4 bg-transparent text-[#FF0000] outline outline-[#FF0000] outline-1 ${className}`,
      props.isOutlineWhite &&
        `hover:outline-[#FF0000] hover:text-[#FF0000] justify-center py-2 px-4 bg-transparent text-[#FFFFFF] outline outline-[#FFFFFF] outline-1 ${className}`,
      props.isPrimary &&
        `justify-center py-2 px-4 bg-[#FF0000] text-white outline outline-[#FF0000] outline-1 ${className}`,
      props.isBlock && `justify-center w-full ${className}`,
    ];

    return baseClasses.filter(Boolean).join(" ");
  };

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  if (type === "link") {
    if (isExternal) {
      return (
        <a
          href={href}
          className={getButtonClass()}
          target={target === "_blank" ? "_blank" : undefined}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link to={href} className={getButtonClass()} onClick={onClickHandler}>
          {children}
        </Link>
      );
    }
  }

  return (
    <button className={getButtonClass()} onClick={onClickHandler} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  href: propTypes.string,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  isOutline: propTypes.bool,
  isPrimary: propTypes.bool,
};

export default Button;
