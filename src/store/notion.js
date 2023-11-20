import { defineStore } from "pinia";
import notion from "@/plugins/notion"
import { computed, ref } from "vue";

export const useNotionStore = defineStore('notion', () => {
  const list = ref([]);
  const post = ref([]);

  const getList = computed(() => {
    return list.value;
  });

  const getPost = computed(() => {
    return post.value;
  });

  const setList = async () => {
    list.value = await notion.getList(process.env.VUE_APP_NOTION_POST_ID);
  }

  const setPost = async (id) => {
    post.value = await notion.getPost(id);
  }

  return { getList, getPost, setList, setPost }
});
