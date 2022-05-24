<template>
  <article class="rounded-lg shadow shadow-zinc-300 flex py-2 mb-5">
    <div class="flex items-center flex-1 gap-3 px-3 py-5">
      <LocationMarkerIcon class="w-5 h-5 text-purple-primary" />
      <div class="flex w-full pr-2 justify-between items-center">
        <div>
          <p class="font-bold">
            {{ `${cepInfo.logradouro}, ${cepInfo.bairro}` }}
          </p>
          <p class="text-sm">
            {{ `${cepInfo.localidade} - ${cepInfo.uf}` }}
          </p>
        </div>
        <p class="text-purple-primary">{{ cepInfo.cep }}</p>
      </div>
    </div>
    <div class="border-l border-zinc-200 w-16 flex items-center justify-center">
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
