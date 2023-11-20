<template>
  <div class="dock-style rounded-lg d-flex flex-column">
    <v-tooltip v-for="menu in menus" :key="menu.name" :text="menu.name">
      <template v-slot:activator="{ props }">
        <img v-bind="props" :src="menu.img" :alt="menu.name" @click="onclickSideMenu(menu.component)">
      </template>
    </v-tooltip>
  </div>
</template>

<script setup>
import { useComponentStore } from '@/store/component';
const menus = [
  {
    name: "blog",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/200px-Notion-logo.svg.png",
    component: "NotionList",
  },
  {
    name: "profile",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Siri_new_logo.png/240px-Siri_new_logo.png",
    component: "NotionPost",
  },
];

const componentStore = useComponentStore();

const onclickSideMenu = (component) => {
  componentStore.setName(component);
}
</script>

<style scoped>
.dock-style {
  position: fixed;
  top: 50%;
  left: 1%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3); /* 반투명 배경 */
  backdrop-filter: blur(15px); /* 강한 블러 효과 */
  padding: 5px 10px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  text-align: center;
}

.dock-style img {
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 5px 0;
}
</style>
