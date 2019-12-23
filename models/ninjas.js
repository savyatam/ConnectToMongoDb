const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const NinjaSchema=new Schema({
  name:{type:String},
  price:{type:Number}
});
const Ninja=mongoose.model('ninja',NinjaSchema);
module.exports=Ninja;
