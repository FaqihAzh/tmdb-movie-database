/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.authLogin);

  useEffect(() => {
    if (data.token === undefined) {
      navigate("/login");
    }
  }, [data]);

  return children;
};

export default Protected;
