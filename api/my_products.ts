import axios from "axios";

const base_url = "https://fakestoreapi.com";

export const get_categories = async () => {
  try {
    const res = await axios.get(`${base_url}/products/categories`);
    // console.log(res.data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const get_products = async () => {
  try {
    const res = await axios.get(`${base_url}/products`);
    // console.log(res.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
