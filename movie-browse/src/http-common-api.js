import axios from "axios";
import {AppConfig} from "./config"
export default axios.create({
  baseURL: AppConfig.BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});