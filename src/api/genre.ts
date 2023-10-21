import axiosInstance from "./axios";

export const getGenres = () => axiosInstance.get("genre/movie/list");
