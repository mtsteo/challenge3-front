import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: async (url: string) => await instance.get(url).then(responseBody),
};

export const ApiFetcher = {
  getAllproducts: async () => await requests.get("/products"),
  getByAmount: async (amount: number) =>
    await requests.get(`/products/?amount=${amount}`),
  getAllCategories: async () => {
    return await requests.get("/categories");
  },
  getByCategories: async (name: string) =>
    await requests.get(`/categories/${name}`),
};
