<template>
  <div class="spinner-container" v-if="!list.length">
    <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
  <ul v-else>
    <li v-for="post in list" :key="post.id">
      <span>{{ post.Title }}</span>
      <span :style="color.getCategoryColor(post.Category)">
        {{ post.Category }}
      </span>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNotionStore } from "@/store/notion";
import color from "@/script/color";

const list = ref([]);
const notionStore = useNotionStore();

onMounted(async () => {
  await notionStore.getList();
  list.value = notionStore.list;
});
</script>

<style scoped>
.spinner-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 5px;
}
li {
  border-bottom: 1px solid #ddd;
  padding: 10px;
  display: flex;
}
li:hover {
  background-color: #eee;
  cursor: pointer;
}
li span:nth-child(2) {
  margin-left: auto;
  color: white;
  border-radius: 5px;
  padding: 2px 5px;
}
</style>
