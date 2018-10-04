
<template>
<div class="videoItem_wrapper">
    <div class="card">
    <img class="card-img-top" v-bind:src="videoImage" v-bind:alt="videoTitle" style="width:30%; display:inline-block">
    <div class="card-body" style="display:inline">
        <h5 class="card-title">{{videoTitle}}</h5>
        <p class="card-text">{{videoDescription}}</p>
        <router-link :to="{name:'youtube-video',params:{id:video.id.videoId,video:video}}" class='btn btn-primary b'>
            Show video
        </router-link>
        <div><p > </p></div> <br><br><br>
    </div>
    </div>
</div>
</template>
<script>
    
    export default {
      name: 'videoItem',
      data(){
            return{
            
            }
      },
      props:[
      'video',
      'videoId',
      'url'
      ],
      computed:{
       videoTitle(){
        return this.video.snippet.title;
       },
       videoDescription(){
        return this.video.snippet.description;
       },
       videoImage(){
        return this.video.snippet.thumbnails.high.url;
       }
    }
    
    }
</script>
<style>
    .videoItem_wrapper{
            clear:both;
    }
    .b{
        display:inline;
        float:left;
        margin-top:15px;
        margin-left:10px;
        background-color: #ff4d4d;
        border:0px;
}
</style>


