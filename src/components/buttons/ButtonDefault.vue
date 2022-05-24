<template>
  <button
    class="text-sm 2xl:text-base flex ml-auto h-9 2xl:h-11 items-center font-medium gap-2 py-2 w-full lg:w-56 2xl:w-72 justify-center text-white rounded-md bg-purple-second hover:bg-opacity-70"
    type="submit"
  >
    <PlusIcon v-if="hasPlusIcon" class="w-5 h-5" />
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
import { PlusIcon } from "@heroicons/vue/outline";
const props = defineProps({
  text: {
    type: String,
    default: "Botão",
  },
  hasPlusIcon: {
    type: Boolean,
    default: false,
  },
});
</script>
