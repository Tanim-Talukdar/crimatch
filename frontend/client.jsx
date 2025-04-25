import axios from "axios";

export const BASE_URL = "https://crimatch.onrender.com/api/v1"

export const client = axios.create({baseURL: BASE_URL})