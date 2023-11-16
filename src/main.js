// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import plugins from '@/plugins';

const app = createApp(App);

plugins.install(app);

app.mount('#app');
