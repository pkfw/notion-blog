<template>
  <site-side-menu></site-side-menu>
  <component :is="comp[componentStore.getName]" :class="componentStore.getName.toLocaleLowerCase()"></component>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import SiteSideMenu from "@/layouts/inc/SiteSideMenu.vue";
import { useComponentStore } from "@/store/component";

const componentStore = useComponentStore();

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
  height: 100%;
}

.notionlist, .notionpost {
  margin: 10px 10%;
}
</style>
