<template>
  <nav
    class="flex flex-col items-center py-8 justify-between bg-zinc-100 h-[calc(100vh-76px)]"
  >
    <div class="flex flex-col gap-10">
      <button class="group">
        <SearchIcon
          class="group-hover:text-zinc-500 h-9 w-9 text-zinc-400/60"
        />
      </button>
      <button class="group">
        <FolderIcon
          class="group-hover:text-zinc-500 h-9 w-9 text-zinc-400/60"
        />
      </button>
    </div>
    <button class="bg-zinc-700 hover:bg-zinc-800 rounded-lg p-2">
      <AdjustmentsIcon class="h-8 w-8 text-zinc-100" />
    </button>
  </nav>
</template>

<script setup>
import {
  SearchIcon,
  FolderIcon,
  AdjustmentsIcon,
} from "@heroicons/vue/outline";
</script>
