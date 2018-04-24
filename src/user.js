const mongoose=required('mongoose');
const schema=mongoose.schema;
const UserSchema=new schema({
    name:String
});
const User=mongoose.model('user',UserSchema);
module.exports=User;