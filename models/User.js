const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const UserSchema =new Schema({
    first_name: {
        type:String,
        required:true
    },
    last_name: {
        type:String,
        required:false
    },
    nationality: {
        type:String,
        required:true
    },
    occupation: {
        type:String,
        required:false
    },
    postalCode: {
        type:String,
        required:true
    }
});
//
module.exports = User =mongoose.model('user' , UserSchema);