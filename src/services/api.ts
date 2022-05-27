import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.255.127:3333"
})

export default api