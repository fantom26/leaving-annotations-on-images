import axios from "axios";
import { REACT_APP_BASE_URL } from "utils/constants";

export const $api = axios.create({
  baseURL: REACT_APP_BASE_URL,
  timeout: 5000
});
