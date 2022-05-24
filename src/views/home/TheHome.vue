<template>
  <Header />
  <section class="flex">
    <aside class="w-20">
      <Menu />
    </aside>
    <main class="flex-1 p-8 max-w-2xl">
      <CepForm
        :cep="cep"
        :is-cep-wrong="isCepWrong"
        :add-cep-to-list="addCepToList"
        @input-change-cep="getCepValueFromChild"
      />

      <ul class="my-10 max-h-[110px] overflow-y-auto">
        <transition-group name="list" tag="li">
          <li
            class="flex items-center"
            v-for="(cep, index) in cepList"
            :key="index"
          >
            <LocationMarkerIcon class="mr-5 w-7 h-9 text-purple-primary" />
            <p class="font-bold text-lg text-zinc-400">
              <span class="text-zinc-800 mr-2">CEP</span>{{ cep }}
            </p>
          </li>
        </transition-group>
      </ul>

      <div class="flex justify-end">
        <ButtonDefault @click="getCepInfos" text="Gerar endereços" />
      </div>

      <hr class="w-full h-0.5 bg-zinc-300 my-10" />

      <CepInfoCard
        v-for="(cepInfo, index) in storeCepList"
        :key="index"
        :cepInfo="cepInfo"
        @delete-cep-from-list="deleteCep(index)"
      />
    </main>
  </section>
</template>

<script setup>
import Header from "../../components/header/TheHeader.vue";
import Menu from "../../components/menu/TheMenu.vue";
import { PlusIcon } from "@heroicons/vue/outline";
import { LocationMarkerIcon } from "@heroicons/vue/solid";
import { useCepStore } from "../../store/CepStore";
import { ref } from "@vue/reactivity";
import CepInfoCard from "./components/CepInfoCard.vue";
import ButtonDefault from "../../components/buttons/ButtonDefault.vue";
import CepForm from "./components/CepForm.vue";

const cepStore = useCepStore();

let cep = ref(null);
let cepList = ref([]);
let storeCepList = ref(cepStore.cepList);

// helpers
let isCepWrong = ref(false);

function getCepValueFromChild(childCep) {
  cep.value = childCep;
}

function addCepToList() {
  isCepWrong.value = false;
  let stringfiedCep = String(cep.value);

  if (stringfiedCep && stringfiedCep.length === 8) {
    cepList.value.push(stringfiedCep);
    cep.value = "";
  } else {
    isCepWrong.value = true;
  }
}

function getCepInfos() {
  for (let cep in cepList.value) {
    let stringfiedCep = String(cepList.value[cep]);

    cepStore
      .getCeps(stringfiedCep)
      .then((res) => {
        if (res.data.erro) return;
        cepStore.pushCep(res.data);
      })
      .catch((error) => console.log("CEP Inválido: ", error));
  }

  cepList.value = [];
}

function deleteCep(cepIndex) {
  cepStore.deleteItem(cepIndex);
  storeCepList.value = cepStore.cepList;
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: opacity 500ms ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
