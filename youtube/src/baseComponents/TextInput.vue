<template>
<div id="searchBar ">
    <logo id="userpic" sourcefile='./src/youtube_logo.jpg' ></logo>
    <div class="form-group col-sm-8">
        <form v-on:submit.prevent="searchInput">
        <label for="search"></label>
        <input v-model="searchh"  @keyup.stop.prevent="suggestions" list='sugg' class="form-control col-sm-4" id="search">
        <datalist id='sugg'>
        <option v-for='video in videoSuggest' v-bind:value='video.snippet.title'></option>
    </datalist>
        <button class="btn btn-primary b" v-on:click="searchInput.bind(this)" id="button col-sm-3" ><i class="fa fa-search"> Search</i></button>
        
        </form>  
    </div>
    
    
    <br>
</div>
</template>

<script>
    
import search from './search.js';
import {store} from './store.js';
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import  logo from './subComponents/logo.vue';
 export default{
           
 name:'textInput',
 components:{
    logo
    },
 data(){
 return{
    searchh:null
 }
 },
 store,
 computed:{
             ...mapState([
                'search',
                 'videos',
                 'videoSuggest'
             ])  
 },
   
       
 
    methods:{
        
    searchInput:function() {
       this.searchNew(this.searchh);
        search({
            apiKey:'AIzaSyDf1b7HIyZgZGPre1eEjG9I956UEfiiaeI',
            term:this.search
        },data =>{
       //this.$emit('searchResult',data);
       this.searchResult(data);
       this.searchNew(null);
       this.searchSuggest(null);
       this.searchh='';
       });
       
    },
    suggestions:function(){
        this.searchNew(this.searchh);
        var self=this;
         search({
            apiKey:'AIzaSyDf1b7HIyZgZGPre1eEjG9I956UEfiiaeI',
            term:self.search
        },response =>{ self.searchSuggest(response);});
    },
    ...mapMutations([
        'searchResult',
        'searchNew',
        'searchSuggest'
    ])
   }
   
   
 }
 
  
</script>
<style >
#searchBar{
overflow:hidden;
background-color:white;
width:90%;

margin-top:10px;

}

#userpic img{
float:left;
margin-left:80px;
display:block;
height:80px;
width:100px;
}

.b{
        display:inline;
        float:left;
        margin-top:15px;
        margin-left:10px;
        background-color: #ff4d4d;
        border:0px;
}
#search{
    margin-top:15px;
     width:40%;   
}
#list{
margin-top:none;
margin-left: 200px;
float:left;
background-color: white;
width:40%;
clear:both;

}
</style>