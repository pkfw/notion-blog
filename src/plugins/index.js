import vuetify from "@/plugins/vuetify";
import router from "@/router";
import webfont from '@/plugins/webfontloader'
import store from "@/store";

export default {
  install: (app) => {
    webfont.load();

    app.use(vuetify);
    app.use(router);
    app.use(store);
  }
}