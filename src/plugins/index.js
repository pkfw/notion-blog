import webfont from "@/plugins/webfontloader";
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from "@/plugins/pinia";

export default {
  install: (app) => {
    webfont.load();

    app.use(vuetify);
    app.use(router);
    app.use(store);
  }
}