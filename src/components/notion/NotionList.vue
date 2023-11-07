<template>
  <ul>
    <li v-for="post of list" :key="post.id">
      <span>{{ post.title }}</span>
      <span>{{ post.category }}</span>
    </li>
  </ul>
</template>

<script setup>
import { getPageTable } from "vue-notion";
import { ref } from "vue";

const list = ref([]);

getPageTable(process.env.VUE_APP_NOTION_POST_ID).then(
  (value) => {
    // console.log("list:>>", value);
    list.value = value;
  }
);
</script>
