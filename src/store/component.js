import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useComponentStore = defineStore('component', () => {
  const name = ref("NotionList");
  
  const getName = computed(() => {
    return name.value;
  });

  const setName = (comp) => {
    name.value = comp;
  };

  return { getName, setName }
});
