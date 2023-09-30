import React from "react";
import PropTypes from "prop-types";

const Typography = ({ variant, children, className, ...restProps }) => {
  const getTypographyClass = () => {
    switch (variant) {
      case "title":
        return "text-4xl font-bold text-white";
      case "subtitle":
        return "text-2xl font-semibold text-white";
      case "paragraph":
        return "text-base text-white";
      default:
        return "";
    }
  };

  return (
    <div className={` ${getTypographyClass()} ${className}`} {...restProps}>
      {children}
    </div>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(["title", "subtitle", "paragraph"]),
  className: PropTypes.string,
};

export default Typography;
