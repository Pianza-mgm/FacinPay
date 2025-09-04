import axios from "axios";

export const api = axios.create({
  baseURL: "/api", // todas chamadas começam por /api
  headers: {
    "Content-Type": "application/json",
  },
});
