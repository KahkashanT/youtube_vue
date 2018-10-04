let axios=require('axios');

const BASE_URL="http://127.0.0.1:8000/api";
var url="";
var like={
    
    create:function(options,callback){
        url=BASE_URL+'/likes/create';

   
       
        axios({
            method:'post',
            url:url,
            data:{
                id:options.id
            }
        }).then(()=>{
                    if(callback){
                            callback()
                        }
                    }).catch(error=>console.error(error));
    }  ,
    
    findAll:function(callback){
        
        url=BASE_URL+'/likes/index';
        axios.get(url)
                .then(response=>{
                    if(callback){
                        console.log(response);
                            callback(response)
                        }
                    })
    },
    
    findId:function(options,callback){
        url=BASE_URL+'/likes/show/'+options.id;
        axios.get(url)
                .then(response=>{
                    console.log(response);
                    if(callback){
                            callback(response)
                        }
                    })
        
    }

}
console.log("in like.js"+like);
module.exports=like;