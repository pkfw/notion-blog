<template>
  <header>
    <img :src="require('@/assets/logo.png')" alt="site logo">
    <h1>{{ "soboti notion blog".toUpperCase() }}</h1>
    <SiteSearch></SiteSearch>
    <nav>
      <a v-for="item of menu" :key="item">
        {{ item }}
      </a>
    </nav>
  </header>
</template>

<script setup>
import SiteSearch from "@/layouts/inc/SiteSearch.vue";
// import { inject } from "vue";

const menu = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
];

// const { updateName } = inject("name");
// const { updateCategory } = inject("category");
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 10%;
  height: 10%;
  margin-top: 2%;
}

nav {
  margin-top: 20px;
  background-color: #333;
  color: white;
  width: 80%;
  padding: 5px 10px;
  border-radius: 5px;
}

a {
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
}
a:hover {
  color: antiquewhite;
}
</style>