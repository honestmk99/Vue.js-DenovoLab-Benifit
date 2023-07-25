import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

import router from "./router";

// Import Quasar css
// import '@/assets/styles/quasar.scss'
// import '@/assets/styles/common.scss'
// import '@/assets/styles/swiper-js.scss'

// import 'virtual:windi.css'
// import 'virtual:windi-devtools'

createApp(App).use(router).use(Quasar, quasarUserOptions).mount("#app");
