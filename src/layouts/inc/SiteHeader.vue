<template>
  <header>
    <img :src="require('@/assets/logo.png')" alt="site logo">
    <h1>{{ "soboti notion blog".toUpperCase() }}</h1>
  </header>
</template>

<script setup>
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