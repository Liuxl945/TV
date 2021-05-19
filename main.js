import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// plus.screen.lockOrientation("landscape-primary")
plus.navigator.setFullscreen(true)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()


