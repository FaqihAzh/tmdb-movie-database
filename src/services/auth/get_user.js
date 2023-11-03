import { useQuery } from "@tanstack/react-query";
import binarHttp from "../../utils/constants/binarHttp";
import ENDPOINTS from "../../utils/constants/endpoint";

const fetchUserData = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await binarHttp
    .get(_key)
    .then((value) => {
      let result = {
        name: value.data.data.name,
        email: value.data.data.email,
      };

      return { data: result };
    })
    .catch((err) => {});

  return data;
};

const useGetDataUser = (options) => {
  return useQuery([ENDPOINTS.GET_USER, options], fetchUserData);
};

export { fetchUserData, useGetDataUser };
