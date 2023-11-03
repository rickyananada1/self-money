import axios from "axios";
import { store } from "../store";
const TIME_OUT = 120000;

export default class BaseService {
  async api(method, path, payload, contentType) {
    axios.interceptors.response.use(
      (response) => {
        store.setError(false);
        store.setLoading(false);
        return response;
      },
      (e) => {
        store.setError(true);
        store.setLoading(false);
        let err = e
        if (err.code === "ECONNABORTED" && err.message.includes("timeout")) {
          store.setTimeOut(true);
          store.setMessage(null);
        } else {
          store.setTimeOut(false);
          if (err.response && err.response.data && err.response.data.message) {
            store.setMessage(err.response.data.message);
          } else {
            store.setMessage(err.message);
          }
        }
        return Promise.reject(err)
      }
    );
    axios.interceptors.request.use((config) => {
      store.setLoading(true);
      const token = localStorage.getItem("token");
      if (token != null && token != "") {
        if (config.headers != undefined) {
          config.headers["Authorization"] = "Bearer " + token;
        }
      }
      return config;
    });
    if (method == "post") {
      return await axios
        .post(path, payload, {
          headers: {
            "Content-type":
              contentType == null ? "application/json" : contentType,
          },
          timeout: TIME_OUT,
        })
        .then((response) => response.data);
    }
    if (method == "post-file") {
      return await axios
        .post(path, payload, {
          headers: {
            "Content-type":
              contentType == null ? "multipart/form-data" : contentType,
          },
          timeout: TIME_OUT,
        })
        .then((response) => response.data);
    }
    if (method == "put") {
      return await axios
        .put(path, payload, {
          headers: {
            "Content-type":
              contentType == null ? "application/json" : contentType,
          },
          timeout: TIME_OUT,
        })
        .then((response) => response.data);
    } else if (method == "get") {
      return await axios
        .get(path, { params: payload, timeout: TIME_OUT })
        .then((response) => response.data);
    } else if (method == "get-doc") {
      return axios
        .get(path, { params: payload, timeout: TIME_OUT, headers: {
          responseType: 'blob'
        } });
    } else {
      return await axios
        .put(path, payload)
        .then((response) => response.data);
    }
  }
}
