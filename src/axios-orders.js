import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-b8bbf-default-rtdb.firebaseio.com/",
});

export default instance;
