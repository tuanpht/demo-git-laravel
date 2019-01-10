
/**
 * First we will load all of this project's JavaScript dependencies
 */

import './bootstrap';
import Vue from 'vue';

import formComponent from './components/example.vue';

const app = new Vue({
    el: '#app',
    components: {
        'form-component': formComponent
    }
});
