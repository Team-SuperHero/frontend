import http from "@/services/http";
import { defineStore } from "pinia";

export const useAllProductsStore = defineStore('allProducts', {
    state: () => ({
        allProducts: [],
    }),
    actions: {
        async fetchProduct() {
            http.get("/product").then((response) => {
                this.allProducts = response.data.results;
            });
        },
    },
}); 