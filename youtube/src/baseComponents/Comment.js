let axios=require('axios');

const BASE_URL="http://127.0.0.1:8000/api";
var url="";
var comment={
    
    create:function(options,callback){
        debugger;
        url=BASE_URL+'/comments/create';

   
       
        axios.post(url,{
           
            
                id:options.id,
                comments:options.comment
            
        }).then(()=>{
                    if(callback){
                            callback()
                        }
                    }).catch(error=>console.error(error));
    }  ,
    
    findAll:function(callback){
        url=BASE_URL+'/comments/index';
        axios.get(url)
                .then(response=>{
                    if(callback){
                            callback(response)
                        }
                    })
    },
    
    findId:function(options,callback){
        url=BASE_URL+'/comments/show/'+options.id;
        axios.get(url)
                .then(response=>{
                    console.log(response);
                    if(callback){
                            callback(response)
                        }
                    })
        
    }

}
console.log("in comments.js"+comment);
module.exports=comment;