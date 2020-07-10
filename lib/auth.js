import Axios from "axios";

Axios.defaults.withCredentials = true;

export const loginUser = async (email, password) => {
  const { data } = await Axios.post("/api/login", { email, password });
  console.log(data);
};

export const getUserProfile = async () => {
  const { data } = await Axios.get("/api/profile");
  return data;
};
