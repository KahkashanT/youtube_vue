
import Vue from 'vue';

import VueYouTubeEmbed from 'vue-youtube-embed';
import App from './app.vue';
import VueRouter from 'vue-router';
import youtube from './baseComponents/youtube.vue';
import videoDetail from './baseComponents/subComponents/videoDetail.vue';
import {store} from './baseComponents/store.js';
Vue.use(VueRouter);

const routes=[
    { path:'/' , component:youtube, 'name':'youtube'},
    { path:'/video/:id' , component:videoDetail, 'name':'youtube-video'}
];
const router=new VueRouter({
    routes
});


new Vue({
    store:store,
  el:'#root',
  router,
  render: h => h(App)
})
