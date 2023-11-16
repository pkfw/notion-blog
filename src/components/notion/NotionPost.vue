<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script setup>
import { ref, onMounted } from "vue";
import notion from "@/plugins/notion";

const blockMap = ref([]);
onMounted(async () => {
  blockMap.value = await notion.getPost("9c0b1f84-2d12-4432-85c8-b1b3844eb94d");
});
</script>

<style>
@import "vue-notion/src/styles.css";
</style>
