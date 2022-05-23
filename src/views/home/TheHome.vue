<template>
  <Header />
  <section class="flex">
    <aside class="w-20">
      <Menu />
    </aside>
    <main class="flex-1 p-8 max-w-2xl">
      <form action="">
        <div class="flex gap-5">
          <label for="cep">
            <input
              class="p-2 rounded-md border border-zinc-400 placeholder:text-zinc-400 text-zinc-600 font-medium"
              type="number"
              placeholder="Insira o CEP"
            />
          </label>
          <button
            class="flex ml-auto items-center font-medium gap-2 py-2 w-72 justify-center text-white rounded-md bg-purple-second"
            type="submit"
          >
            <PlusIcon class="w-5 h-5" />
            <span>Adicionar endereço</span>
          </button>
        </div>
      </form>

      <ul class="my-10">
        <li class="flex items-center">
          <LocationMarkerIcon class="mr-5 w-7 h-9 text-purple-primary" />
          <p class="font-bold text-lg text-zinc-400">
            <span class="text-zinc-800 mr-2">CEP</span>38304-042
          </p>
        </li>
      </ul>

      <div class="flex justify-end">
        <button
          class="flex items-center font-medium gap-2 py-2 w-72 justify-center text-white rounded-md bg-purple-second"
          type="submit"
        >
          <span>Gerar endereços</span>
        </button>
      </div>

      <hr class="w-full h-0.5 bg-zinc-300 my-10" />

      <article class="rounded-lg shadow shadow-zinc-300 flex py-2">
        <div class="flex items-center flex-1 gap-3 px-3 py-5">
          <LocationMarkerIcon class="w-5 h-5 text-purple-primary" />
          <div class="flex w-full pr-2 justify-between items-center">
            <div>
              <p class="font-bold">Av. São Paulo, Zona 07</p>
              <p class="text-sm">Maringá - PR</p>
            </div>
            <p class="text-purple-primary">88162-122</p>
          </div>
        </div>
        <div
          class="border-l border-zinc-200 w-16 flex items-center justify-center"
        >
          <button>
            <TrashIcon class="h-5 w-5 text-red-500" />
          </button>
        </div>
      </article>
    </main>
  </section>
</template>

<script setup>
import Header from "../../components/header/TheHeader.vue";
import Menu from "../../components/menu/TheMenu.vue";
import { PlusIcon } from "@heroicons/vue/outline";
import { LocationMarkerIcon, TrashIcon } from "@heroicons/vue/solid";
</script>

<style></style>
