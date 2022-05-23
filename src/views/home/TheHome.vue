<template>
  <Header />
  <section class="flex">
    <aside class="w-20">
      <Menu />
    </aside>
    <main class="flex-1">
      <form action="">
        <div class="flex gap-5">
          <label for="cep">
            <input
              class="p-2 rounded-md border border-zinc-300 placeholder:text-zinc-300 text-zinc-600 font-medium"
              type="number"
              placeholder="Insira o CEP"
            />
          </label>
          <button
            class="flex items-center gap-2 text-white bg-purple-500"
            type="submit"
          ></button>
        </div>
      </form>
    </main>
  </section>
</template>

<script setup>
import Header from "../../components/header/TheHeader.vue";
import Menu from "../../components/menu/TheMenu.vue";
</script>

<style></style>
