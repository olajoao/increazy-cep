<template>
  <form action="">
    <div class="flex flex-wrap lg:flex-nowrap gap-5">
      <label for="cep" class="w-full lg:w-auto">
        <input
          v-model="cep"
          class="text-sm 2xl:text-base w-full lg:w-auto p-2 outline-none ring-2 focus:ring-purple-primary/60 rounded-md border border-zinc-300 placeholder:text-zinc-400 text-zinc-600 font-medium"
          :class="[isCepWrong ? 'ring-red-500' : 'ring-transparent']"
          type="text"
          placeholder="Insira o CEP"
          v-mask="['##.###-###']"
        />
      </label>

      <ButtonDefault
        @click.prevent="addCepToList"
        :has-plus-icon="true"
        text="Adicionar endereço"
      />
    </div>
  </form>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import ButtonDefault from "../../../components/buttons/ButtonDefault.vue";
const props = defineProps({
  isCepWrong: {
    type: Boolean,
    default: false,
  },
  addCepToList: {
    type: Function,
    default: Function,
  },
});

let cep = ref(null);

const emit = defineEmits(["inputChangeCep"]);

function changeCep() {
  emit("inputChangeCep", cep.value);
}

watchEffect(() => changeCep());
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
