import { message } from "antd";
import axios from "axios";
const BASE_URL = "http://45.138.158.137:92/api/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function signUp({ fullName, login, password }: { fullName: string; login: string; password: string }) {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}auths/sign-up`,
      data: {
        fullName,
        login,
        password,
      },
    });
    console.log(response);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function login({ login, password }: { login: string; password: string }) {
  try {
    const response = await axiosInstance.post("auths/sign-in", { login, password });
    const token = response.data;
    localStorage.setItem("authToken", token);
    message.success("Login Successfully");
  } catch (error: any) {
    message.error("Login Failed");
    throw new Error(error);
  }
}

export async function getCurrentUser() {
  const data = await axiosInstance
    .get("auths/get-info")
    .then((response) => {
      if (response.statusText === "OK") {
        return true;
      }
    })
    .catch((error) => {
      console.error("cheked failed:", error);
    });

  return data;
}
