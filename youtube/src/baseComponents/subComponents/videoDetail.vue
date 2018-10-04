<template>
    <div class="VideoDetails__wrapper row" v-if="video" id="videoConatiner">
        <div>
            <textInput @searchResult="handleResult"></textInput>
        </div>
        <div class="col-sm-6 col-sm-push-2"  style="float:left;">
            
        <div class="embed-responsive embed-responsive-16by9">
            <iframe v-bind:src="url" class="embed-responsive-item"></iframe>
        </div>
            
            <h2>{{video.snippet.title}}</h2>
            <br>
            <small>Channel:{{video.snippet.channelTitle}}</small>
            <p>{{video.snippet.description}}</p>
             <LikeComment v-bind:video='Vid' ></LikeComment>
        </div >
        <div class="col-sm-4 col-sm-push-2" >
             <videoGroup :videos="videos"></videoGroup>
        </div>
        
            
               
           
    </div>
</template>

<script>
   import textInput from '../TextInput.vue'; 
   import search from '../search.js';
   import videoGroup from '../videoGroup.vue';
   import LikeComment from './LikeComment.vue'
    export default{
            name:"videoDetail",
            components:{
                
               textInput,
               videoGroup,
               search,
               LikeComment
              },
        created(){
            if(this.$route.params.video === undefined)
            {
                this.$router.push({name:'youtube'});
            }
            this.videoId=this.$route.params.id;
            this.url=`https://www.youtube.com/embed/${this.videoId}`;
            this.video=this.$route.params.video;
            this.Vid=this.videoId;
            
                search({
                apiKey:'AIzaSyDf1b7HIyZgZGPre1eEjG9I956UEfiiaeI',
                term:'vue',
                },response => this.handleResult(response));
            },
        data(){
            return{
                videoId:null,
                video:null,
                url:null,
                videos:null,
                Vid:null
            }
        },
        
        methods:{
    handleResult(result)
     {
      this.videos = result;
    }
  }
  

    }
</script>
<style>
    #videoConatiner{
            float:left;
          margin-left: 10px;
    }
  


</style>