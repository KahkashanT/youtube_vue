

<template>
<div class="container">

    <videoItem v-for="video in this.videos" :key="video.id.videoId" :video="video"></videoItem>
</div>
</template>
<script>
    import videoItem from './subComponents/videoItem.vue';
    import {store} from './store.js';
import {mapState} from 'vuex';
    export default {
      name: 'videoGroup',
      data(){
        return{

        }
      },
      store,
      computed:{
             ...mapState([
                
                 'videos'
             ])  
        },
  
      
      components:{
      videoItem
      }
    
    };
</script>


