<template>
  <component :is="comp[name]" :class="name.toLocaleLowerCase()"></component>
  <v-btn @click="name = 'NotionList'">list</v-btn>
  <v-btn @click="name = 'NotionPost'">post</v-btn>
  <v-btn @click="name = 'NotionCard'">card</v-btn>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

const name = ref("NotionList");

const NotionList = defineAsyncComponent(() =>
  import("@/components/notion/NotionList.vue")
);
const NotionCard = defineAsyncComponent(() =>
  import("@/components/notion/NotionListCard.vue")
);
const NotionPost = defineAsyncComponent(() =>
  import("@/components/notion/NotionPost.vue")
);

const comp = { NotionList, NotionPost, NotionCard };
</script>

<style scoped>
main {
  width: 80%;
  margin: 10px auto;
}

.notionlist {
  margin: 10px 10%;
}
</style>
