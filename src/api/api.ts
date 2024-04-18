import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
  
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: async (url: string) => await instance.get(url).then(responseBody),
};

export const Api = {
  getAllproducts: async () => await requests.get("/products"),
  getAllCategories: async () =>{ 
    console.log("first")
    return await requests.get("/categories")},
  getBtcategories : async (name:string) =>await requests.get(`/categories/${name}`)
};
