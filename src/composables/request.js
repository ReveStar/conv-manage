import { useMainStore } from "@/stores/main";
import axios from "axios";
import { storeToRefs } from "pinia";
import { Toast } from "vant";
import router from "../router";

const service = axios.create({
  baseURL: "http://localhost:8080/api/client", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    const mainStore = useMainStore();
    const { token, account_id } = storeToRefs(mainStore);
    config.headers["X-Token"] = token.value;
    config.headers["X-Account-Id"] = account_id.value;
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 0) {
      Toast({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000,
      });

      if (res.code === 20001) {
        router.push({ path: "/index" });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      console.log(res.response);
      return res.response;
    }
  },
  (error) => {
    Toast({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
