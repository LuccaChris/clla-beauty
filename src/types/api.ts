import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5147" // ajuste para sua API
});