import vuetify from "./vuetify";
import router from "../router";
import { loadFonts } from './webfontloader'

export function registerPlugins(app) {
    loadFonts();

    app.use(vuetify);
    app.use(router);
}