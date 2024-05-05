import http from "@/services/http";
import { defineStore } from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
      products: [],
    }),
    actions: {
      fetchProduct() {
        http.get("/product/mine/").then((response) => {
          this.products = response.data;
          console.log(this.products)
        });
      },
    },
  });