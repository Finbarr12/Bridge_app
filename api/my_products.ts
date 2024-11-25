import axios from "axios";

const base_url = "https://fakestoreapi.com/";

export const get_categories = async () => {
  await axios
    .get(`${base_url}/products/categories`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};
