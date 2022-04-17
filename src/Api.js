// import axios from "axios";
// import { useSelector } from "react-redux";

// const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
// });

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const token = useSelector((state) => state.persist.user.token);
//     console.log(token);
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// this.api = axiosInstance;
// export const Api = axiosInstance;

// //login
// async function test() {
//   const data = await Api.get("api/packages");

//   console.log(data);
// }
// export function userLogin(info) {
//   console.log("INfo", info, process.env.REACT_APP_BASE_URL);
//   let data = test();
//   console.log(data);

//   // return Api.post("/oauth/token", {
//   //   grant_type: "password",
//   //   client_id: process.env.REACT_API_CLIENT_ID,
//   //   client_secret: process.env.REACT_API_CLIENT_SECRET,
//   //   ...info,
//   //   scope: "",
//   // });
// }

// //package
// export function packages() {
//   return Api.get("/api/packages");
// }

import axios from "axios";

export default class Api {
  constructor(token) {
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });

    axiosInstance.interceptors.request.use(
      async (config) => {
        console.log(token);
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.api = axiosInstance;
  }

  api() {
    return this.api;
  }

  userLogin(info) {
    const body = {
      grant_type: "password",
      client_id: process.env.REACT_APP_API_CLIENT_ID,
      client_secret: process.env.REACT_APP_API_CLIENT_SECRET,
      ...info,
      scope: "",
    };

    console.log("body", body);

    return this.api.post("/oauth/token", body);
  }
}
