import { defineStore } from "pinia";
import notion from "@/plugins/notion"
import { ref } from "vue";

export const useNotionStore = defineStore('notion', () => {
  const list = ref(null);
  const post = ref(null);

  const getList = async () => {
    list.value = await notion.getList(process.env.VUE_APP_NOTION_POST_ID);
  }
  const getPost = async (id) => {
    post.value = await notion.getPost(id);
  }

  return { list, getList, getPost }
});
