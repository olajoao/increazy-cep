import { defineStore } from "pinia";
import request from "../http";

export const useCepStore = defineStore("CepStore", {
  state: () => {
    return {
      cepList: [],
    };
  },
  actions: {
    pushCep(cepInfos) {
      this.cepList.push(cepInfos);
    },
    deleteItem(cepIndex) {
      console.log(this.cepList);
      this.cepList = this.cepList.filter((_, index) => index != cepIndex);
      console.log(this.cepList);
    },
    async getCeps(cep) {
      return request.get(`/${cep}/json/`);
    },
  },
});
