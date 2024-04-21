import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: async (url: string) => await instance.get(url).then(responseBody),
};

export const ApiFetcher = {
  getAllproducts: async (page: number, limit: number, order: string) =>
    await requests.get(`/products?page=${page}&limit=${limit}&order=${order}`),
  getByAmount: async (amount: number) =>
    await requests.get(`/products/?amount=${amount}`),
  getAllCategories: async () => {
    return await requests.get("/categories");
  },
  getByCategories: async (name: string, page: number, limit: number) =>
    await requests.get(
      `products/category?name=${name}&page=${page}&limit=${limit}`
    ),
};
