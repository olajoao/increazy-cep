<template>
  <article class="rounded-lg shadow shadow-zinc-300 flex lg:py-2 mb-5">
    <div class="flex items-center flex-1 gap-3 px-3 py-2 lg:py-5">
      <LocationMarkerIcon class="hidden lg:block w-5 h-5 text-purple-primary" />
      <div class="lg:flex gap-x-2 w-full 2xl:pr-2 justify-between items-center">
        <div>
          <p class="font-bold">
            {{ `${cepInfo.logradouro}, ${cepInfo.bairro}` }}
          </p>
          <p class="text-sm">
            {{ `${cepInfo.localidade} - ${cepInfo.uf}` }}
          </p>
          <p class="text-purple-primary lg:hidden text-xs mt-2">
            {{ cepInfo.cep }}
          </p>
        </div>
        <p class="hidden lg:block text-purple-primary text-xs w-20 2xl:w-auto">
          {{ cepInfo.cep }}
        </p>
      </div>
    </div>
    <div
      class="border-l border-zinc-200 w-14 2xl:w-16 flex items-center justify-center"
    >
      <button @click="deleteCep">
        <TrashIcon class="h-5 w-5 text-red-500" />
      </button>
    </div>
  </article>
</template>

<script setup>
import { LocationMarkerIcon, TrashIcon } from "@heroicons/vue/solid";
const props = defineProps({
  cepInfo: {
    type: Object,
    default: {},
  },
});

const emit = defineEmits(["deleteCepFromList"]);

function deleteCep() {
  emit("deleteCepFromList");
}
</script>
