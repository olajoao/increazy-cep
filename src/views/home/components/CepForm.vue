<template>
  <form action="">
    <div class="flex gap-5">
      <label for="cep">
        <input
          v-model="cep"
          class="p-2 outline-none ring-2 focus:ring-zinc-500 rounded-md border border-zinc-300 placeholder:text-zinc-400 text-zinc-600 font-medium"
          :class="[isCepWrong ? 'ring-red-500' : 'ring-transparent']"
          type="number"
          placeholder="Insira o CEP"
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
