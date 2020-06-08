import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-8990f.firebaseio.com/",
});

export default instance;
