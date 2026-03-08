import { createApp } from "vue"
import App from "./App.vue"
import store from "./store"

import "vuetify/styles"
import { createVuetify } from "vuetify"

const vuetify=createVuetify()

createApp(App)
.use(store)
.use(vuetify)
.mount("#app")