<template>
<div>
  <textInput ></textInput>
  
  <div  class="videoGroup__wrapper">
  <videoGroup ></videoGroup>
  
  </div>
</div>
</template>


<script>
   
import search from './search.js'
import videoGroup from './videoGroup.vue'
import textInput from './TextInput.vue'; 
import {store} from './store.js';
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
export default {
        name:'youtube',
  data(){
 return{
   
    }
    },
    store,
  created(){
     search({
        apiKey:'AIzaSyDf1b7HIyZgZGPre1eEjG9I956UEfiiaeI',
        term:"vue"
    },response => this.handleResult(response));
 },
 
 computed:{
             ...mapState([
                'search',
                 'videos'
             ])  
 },
   
components:{
    videoGroup,
   textInput,
  
  },
   
 methods:{
    handleResult(result)
     {
      this.searchResult(result);
    },
     
    ...mapMutations([
        'searchResult'
    ])
  }
 }

</script>
<style>
    #idd{
            clear:both;
    }
</style>