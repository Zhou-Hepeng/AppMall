import App from '../src/index.vue'
import mixins from '../src/mixins/mixins.js'
Vue.mixin(mixins);
App.el = '#root'
export default new Vue(App)
