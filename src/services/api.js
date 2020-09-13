import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-challenge-4b2b2.cloudfunctions.net/api"
});

export default api;
