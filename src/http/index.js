import axios from "axios";

const baseURL = "https://viacep.com.br/ws";

let config = {
  baseURL,
};

const request = axios.create(config);

export default request;
