import { defineStore } from "pinia";
import request from "../http";

export const useCepStore = defineStore("CepStore", {
  state: () => {
    return {
      cepList: [],
    };
  },
  actions: {
    async getCeps(cep) {
      return request.get(`/${cep}/json/`);
    },
  },
});
