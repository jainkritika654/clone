import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-app-67f93/us-central1/api", //API
});
export default instance;
