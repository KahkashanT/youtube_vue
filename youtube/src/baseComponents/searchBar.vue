
<template>
<div>
    <div id="searchBar">
      <logo id="userpic" sourcefile='./src/youtube_logo.jpg' ></logo>
      <div>
          <form v-on:submit="searchInput">
          <label for ="search"></label>
            <input v-model="search" v-on:keyup="searchInput" class="form-control" id="search" >
            <button class="btn btn-default" v-on:click="searchInput" id="button"><i class="fa fa-search"></i>Search</button>
          </form>
      </div>
    </div>
</div>
</template>
<script>
    
     import  logo from './subComponents/logo.vue';
    

    export default {
      name: 'searchBar',
    components:{
    logo
    
    },
    data(){
        return{
            
            search:''
           
        }
    },
      methods:{
        searchInput:function(){
            this.result=true;
            search({
                apiKey:'AIzaSyDf1b7HIyZgZGPre1eEjG9I956UEfiiaeI',
                term:this.search
              },response=>this.videos=response);
        }
    }
    };
</script>
<style >
#searchBar{
overflow:hidden;
background-color:white;
width:90%;
margin:auto;
margin-top:10px;
margin-bottom:10px;
}

#userpic img{
float:left;

display:block;
height:80px;
width:100px;
}

#button{
        margin-top:15px;
}
</style>