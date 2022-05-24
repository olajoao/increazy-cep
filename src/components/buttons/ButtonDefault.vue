<template>
  <button
    class="flex ml-auto items-center font-medium gap-2 py-2 w-72 justify-center text-white rounded-md bg-purple-second"
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
