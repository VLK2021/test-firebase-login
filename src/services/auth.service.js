import {axiosService} from "./axios,service";
import {urls} from "../constans/urls";


export const authService = {
    getLog: (user) => axiosService.post(urls.key, user).then(value => value.data)
}