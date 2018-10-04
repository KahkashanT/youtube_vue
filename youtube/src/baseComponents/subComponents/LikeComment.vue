<template>
    <div>
            <div> 
                <button class="btn btn-primary" v-on:click="likeIt"><i id="like" class="fa" >&#xf087</i>like</button>
                <button class="btn btn-primary" v-on:click="commentIt"><i id="comment" class="fa  fa-comment"></i>comments</button>
           </div>
          <div v-if='commentStatus' >
              <VideoComment  v-for='comment in this.comments' v-bind:comment='comment' v-bind:key=''>
                    comments
              </VideoComment>
              <button v-on:click="addComment">Add comment</button> 

              <div v-if="addNewComment">
                      <form v-on:submit.prevent="addNewCommentToVideo">

                              <input v-model="newComment"  id="commentBar"  class="form-control col-sm-6 dropdown-content" style="display:inline;" >    
                               <button class='btn btn-primary'>Comment</button>         

                      </form>
              </div>

             
          </div>
    </div>
</template>

<script>
    //import {like} from '../Like.js';
    var like =require('../Like.js');
    var commentjs = require('../Comment.js');
    import VideoComment from './VideoComment.vue'
    export default {
            name:'LikeComment',
            data(){
                return{
                    'likeStatus':false,
                    'comments':null,
                    'commentStatus':false,
                    'addNewComment':false,
                    'newComment':''
                    
                }
            },
            props:[
                'video'
            ],
            created(){
                console.log("created");
                
                var self=this;
               var status=false;
          
               console.log(self.video+"!!");
                 like.findAll(response=>{
                        
                        console.log(response.data+"@@");
                        var likes = response.data;
                        likes.forEach(findId);
                      function findId(value){
                          
                            console.log(value.id+"##");
                            if(value.id === self.video)
                            {
                                console.log("same");
                                status=true;
                                self.likeStatus = true;
                            }
                        }
                     
                                if(status)
                                {
                                   document.getElementById('like').style.color="red";
                                }                                
                            })
                     
            },
            methods:{
                likeIt(){
                    var self=this;
                    if(self.likeStatus)
                    {
                        console.log(self.likeStatus+"$$");
                        return;
                    }
                    
                    like.create({id:self.video},()=>{
                        
                        self.likeStatus=true;
                        console.log(self.likeStatus+"%%");
                         document.getElementById('like').style.color="red";
                    });
                },
                
                commentIt(){
                    var self= this;
                    var comments= new Array();
                    var count =0;
                    self.commentStatus = true;
                    commentjs.findAll(response=>{
                        
                        //console.log(response.data);
                        var allComments = response.data;
                        console.log(response.data);
                         allComments.forEach(findId);
                        function findId(value){
                             console.log(value.id+"##");
                            if(value.id === self.video)
                            {
                                console.log("one comment");
                                console.log(value.comments+"^^");
                                comments[count++]=value.comments;
                                
                            }
                            
                        }
                        console.log("comment for video");
                        console.log(comments+"&&");
                            self.comments = comments;
                              self.commentStatus = true;                                
                            })
                },
                
                addComment(){
                    var self=this;
                    
                    self.addNewComment = true;
                },
                addNewCommentToVideo(){
                    var self= this;
                    console.log(self.newComment+"**");
                    commentjs.create({
                                id:self.video,
                                comment:self.newComment
                                    },()=>{
                    self.newComment= '';
                    self.addNewComment= false;             
                    self.commentIt();
                   
                        
                         
                    });
                    
                }
                
            },
            components:{
                VideoComment
            }
    }
</script>