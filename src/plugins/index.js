import vuetify from "./vuetify";
import router from "../router";
import webfont from './webfontloader'

export default {
  install: (app) => {
    webfont.load();

    app.use(vuetify);
    app.use(router);
  }
}