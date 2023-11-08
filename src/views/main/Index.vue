<template>
  <v-container>
    <!-- 그리드 레이아웃 -->
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="post of list" :key="post.id">
        <v-hover v-slot="{ hover }">
          <v-card :class="{ 'card-hover': hover }">
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-text>{{ post.category }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary">액션 1</v-btn>
              <v-btn color="secondary">액션 2</v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { getPageTable } from "vue-notion";
import { ref } from "vue";

const list = ref([]);

getPageTable(process.env.VUE_APP_NOTION_POST_ID).then(
  (value) => {
    list.value = value;
  }
);
</script>

<style scoped>
.card-hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
