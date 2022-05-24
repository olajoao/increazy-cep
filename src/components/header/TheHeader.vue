<template>
  <header class="bg-purple-primary text-white flex">
    <!-- left -->
    <nav class="flex-1 flex items-center justify-between p-3">
      <div class="flex gap-5">
        <div>
          <svg
            class="h-7 w-7 lg:w-[50px] lg:h-[50px]"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect opacity="0.2" width="50" height="50" rx="5" fill="white" />
            <path
              opacity="0.2"
              d="M14.2917 38.625H34.7083C35.4819 38.625 36.2237 38.3177 36.7707 37.7707C37.3177 37.2237 37.625 36.4819 37.625 35.7083V15.2917C37.625 14.5181 37.3177 13.7763 36.7707 13.2293C36.2237 12.6823 35.4819 12.375 34.7083 12.375H14.2917C13.5181 12.375 12.7763 12.6823 12.2293 13.2293C11.6823 13.7763 11.375 14.5181 11.375 15.2917V35.7083C11.375 36.4819 11.6823 37.2237 12.2293 37.7707C12.7763 38.3177 13.5181 38.625 14.2917 38.625ZM18.6667 28.4167L22.1127 31.8627L27.4167 24.0417L34.7083 34.25H14.2917L18.6667 28.4167Z"
              fill="#E0E6EA"
            />
          </svg>
        </div>
        <div
          class="hidden lg:block w-60 border-2 border-white rounded-lg text-sm py-1 px-2"
        >
          <p class="font-bold">Surreal São Paulo</p>
          <span class="opacity-70">VTEX</span>
        </div>
      </div>
      <button class="hover:bg-white/20 rounded-full p-2 hidden lg:block">
        <BellIcon class="w-8 h-8 text-white" />
      </button>

      <!-- mobile button -->
      <button @click="toggleMobileMenu" class="lg:hidden">
        <AdjustmentsIcon class="w-7 h-7 text-white" />
      </button>
    </nav>

    <!-- right -->
    <aside
      class="hidden lg:flex w-60 border-l-2 border-white/20 justify-center items-center gap-3"
    >
      <p class="font-bold">Olá, Joaquim</p>
      <button
        class="cursor-pointer hover:bg-white/40 p-4 rounded-full bg-white/20"
      >
        <UserIcon class="w-6 h-6 text-white" />
      </button>
    </aside>

    <!-- mobile -->
    <Transition name="menu">
      <section
        v-if="menuMobile"
        class="lg:hidden px-3 py-5 fixed w-screen h-screen bg-white text-zinc-600 mt-[52px] z-10"
      >
        <ul>
          <li class="flex items-center gap-3">
            <SearchIcon class="w-5 h-5" />
            <span>Pesquisar</span>
          </li>
          <li class="my-5 flex items-center gap-3">
            <FolderIcon class="w-5 h-5" />
            <span>Arquivos</span>
          </li>
          <li class="my-5 flex items-center gap-3">
            <AdjustmentsIcon class="w-5 h-5" />
            <span>Configurações</span>
          </li>
          <li class="my-5 flex items-center gap-3">
            <UserIcon class="w-5 h-5" />
            <span>Perfil</span>
          </li>
        </ul>
      </section>
    </Transition>
  </header>
</template>

<script setup>
import {
  BellIcon,
  UserIcon,
  AdjustmentsIcon,
  FolderIcon,
  SearchIcon,
} from "@heroicons/vue/outline";
import { ref } from "@vue/reactivity";

let menuMobile = ref(false);

const toggleMobileMenu = () => (menuMobile.value = !menuMobile.value);
</script>
<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 500ms ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
