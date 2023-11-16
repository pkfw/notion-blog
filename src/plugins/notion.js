import { getPageTable, getPageBlocks } from "vue-notion";
import "vue-notion/src/styles.css";

export default {
  async getList(id) {
    try {
      const value = await getPageTable(id);
      return value;
    } catch (error) {
      console.error('Error getting list:', error);
      return null;
    }
  },

  async getPost(id) {
    try {
      const value = await getPageBlocks(id);
      return value;
    } catch (error) {
      console.error('Error getting post:', error);
      return null;
    }
  }
}
