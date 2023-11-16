<template>
  <ul>
    <li v-for="post of list" :key="post.id">
      <span>{{ post.Title }}</span>
      <span :class="post.Category.toLowerCase()">
        {{ post.Category }}
      </span>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNotionStore } from "@/store/notion";

const list = ref([]);
const notionStore = useNotionStore();
onMounted(async () => {
  await notionStore.getList();
  list.value = notionStore.list;
});
</script>

<style scoped>
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

li span:nth-child(2).html {
  background-color: coral;
}
li span:nth-child(2).css {
  background-color: cornflowerblue;
}
li span:nth-child(2).javascript {
  background-color: gold;
}
</style>
