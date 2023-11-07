<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script setup>
import { getPageBlocks, NotionRenderer } from "vue-notion";
import { ref } from "vue";

const blockMap = ref([]);

getPageBlocks("9c0b1f84-2d12-4432-85c8-b1b3844eb94d").then(
  (value) => {
    // console.log("post:>>", value);
    blockMap.value = value;
  }
);
</script>

<style>
@import "vue-notion/src/styles.css";
</style>
