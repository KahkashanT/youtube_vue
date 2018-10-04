<template>
   <div class="card">
    <div class="card-body">{{displayComment}}</div>
  </div>
</template>

<script>
    export default{
            name:'VideoComment',
            data(){
                return{
                    
                }
                
            },
            props:[
                'comments'
            ],
            computed:{
                displayComment(){
                    return this.comments;
                }
                    
            }
    }
</script>
