/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import TamaTeamSports from "./assets/projects/TamaTeamSports";

require('./bootstrap');

window.Vue = require('vue');

/**
 * This loads Portal Vue
 *
 * PortalVue is a set of two components that allow you to render a component's
 * template (or a part of it) anywhere in the document - even outside the part
 * controlled by your Vue App
 */

import PortalVue from 'portal-vue';

Vue.use(PortalVue);

/**
 * This loads BootstrapVue
 *
 * BootstrapVue, with over 40 plugins and more than 80 custom components, provides
 * one of the most comprehensive implementations of Bootstrap v4 components and grid
 * system for Vue.js. With extensive and automated WAI-ARIA accessibility markup
 */
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueRenderOnScroll from 'vue-render-on-scroll';
Vue.component('vue-render-on-scroll', require('vue-render-on-scroll').default);

import Meta from 'vue-meta'
Vue.use(Meta);



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
/*
Vue.component('app-header', require('./components/layout/Header.vue').default);
Vue.component('app-footer', require('./components/layout/Footer.vue').default);
Vue.component('app-home-jumbo', require('./components/homepage/HomeJumbotron.vue').default);
Vue.component('app-home-section', require('./components/homepage/HomeSection.vue').default);
Vue.component('Home', require('./components/views/Home').default);
Vue.component('About', require('./components/views/About').default);
Vue.component('App', require('./components/views/App').default);
*/


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from "./assets/views/App";
import Home from "./assets/views/Home";
import About from "./assets/views/About";
import Portfolio from "./assets/views/Portfolio";
import Resume from "./assets/views/Resume";
import ResumeView from "./assets/resume/ResumeView";
import Contact from "./assets/views/Contact";
import Privacy from "./assets/views/PrivacyPolicy"
import TrevorSTanner from "./assets/projects/TrevorSTanner";
import TTS from "./assets/projects/TamaTeamSports"
import {from} from "bootstrap-vue/esm/utils/array";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/resume',
            name: 'resume',
            component: Resume
        },
        {
            path: '/resumeview',
            name: 'resumeview',
            component: ResumeView
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: Privacy
        },
        {
            path: '/projects/TST',
            name: 'tst',
            component: TrevorSTanner
        },
        {
            path: '/projects/TTS',
            name: 'tts',
            component: TTS
        },
    ]
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
