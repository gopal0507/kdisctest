//create a model
var mongoose=require('mongoose');

var users=mongoose.model('users',{
    name:{type:String,
      required:true,
      minlength:2,
      trim:true
  },
    age:{type:Number}
  });

  module.exports={
      users                       //users is given as properties.so whereever its import we should give in curly brackets
  }