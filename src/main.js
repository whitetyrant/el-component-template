import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App).use(ElementPlus)

for(const name in ElementPlusIconsVue){
    app.component(name, ElementPlusIconsVue[name])
}

app.mount('#app')
