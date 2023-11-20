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
  height: 100%;
}

.notionlist {
  margin: 10px 10%;
}
</style>
