import axios from "axios";

axios.defaults.baseURL ="https://drfapi-code-institute-76c4941a10d3.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();