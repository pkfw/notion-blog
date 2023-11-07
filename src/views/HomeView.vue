<template>
  <component :is="comp[name]"></component>
  <v-btn @click="name = 'NotionList'">list</v-btn>
  <v-btn @click="name = 'NotionPost'">post</v-btn>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

const name = ref("");

const NotionList = defineAsyncComponent(() =>
  import("@/components/notion/NotionList.vue")
);
const NotionPost = defineAsyncComponent(() =>
  import("@/components/notion/NotionPost.vue")
);

const comp = { NotionList, NotionPost };
</script>

<style scoped>
main {
  width: 80%;
  margin: 10px auto;
}
</style>
