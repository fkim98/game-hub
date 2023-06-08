import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8ed4d5474282403e891b579c6a81de9d",
  },
});
