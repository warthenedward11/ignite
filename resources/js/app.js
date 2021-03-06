window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}


window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Vue = require('vue');

window.flash = function(message, level = 'success') {
    window.events.$emit('flash', { message, level });
};

Vue.config.productionTip = false;

Vue.component("image-upload-form", require("./components/ImageUploadForm.vue").default);
Vue.component("flash", require("./components/Flash.vue").default);

const app = new Vue({
    el: '#app',
});

// window.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// }, false);
