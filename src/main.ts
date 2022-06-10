import App from './App.vue'
import routes from "virtual:generated-pages";
import {ViteSSG} from "vite-ssg";
import {createPinia} from "pinia";
import 'uno.css'


export const AppSSG = ViteSSG(
    App,
    {routes},
    ({app}) => {
        app.use(createPinia())
    }
)
export default AppSSG
