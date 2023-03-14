import axios from "axios";
import {baseURL} from "../constans/baseURL";

export const axiosService = axios.create({
    baseURL
});