<template>
  <NotionRenderer :blockMap="post" fullPage />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNotionStore } from "@/store/notion";

const post = ref([]);
const notionStore = useNotionStore();
post.value = notionStore.getPost;
</script>

<style>
@import "vue-notion/src/styles.css";
</style>
