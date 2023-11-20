<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div class="spinner-container" v-if="!list.length">
      <v-progress-circular indeterminate color="light-blue-darken-1"></v-progress-circular>
    </div>
    <v-row v-else>
      <v-col cols="12" sm="6" md="4" v-for="post in list" :key="post.id">
        <v-card class="mx-auto" hover @click="onclickPost(post.id)">
          <v-card-item>
            <v-card-title>{{ post.Title }}</v-card-title>
            <v-card-text class="px-0 pt-2">
              테스트 문자열입니다.
            </v-card-text>
            <div class="px-0">
              <v-chip-group v-model="selection">
                <v-chip :style="color.getCategoryColor(post.Category)">{{ post.Category }}</v-chip>
              </v-chip-group>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNotionStore } from "@/store/notion";
import { useComponentStore } from "@/store/component";
import color from "@/script/color";

const list = ref([]);
const notionStore = useNotionStore();
const componentStore = useComponentStore();

const loadData = async () => {
  if (!notionStore.getList.length) {
    await notionStore.setList();
  }
  list.value = notionStore.getList;
}

const onclickPost = async (id) => {
  await notionStore.setPost(id);
  componentStore.setName("NotionPost");
}

onMounted(loadData);
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
