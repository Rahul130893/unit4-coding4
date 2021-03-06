// firstName ( String, required)
// lastName ( String, optional)
// email ( String, required)
// password ( String, required)

const mongoose= require("mongoose")

const userSchema= new mongoose({
    firstName:{type:String, required:true},
    lastName:{type: String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true}
   
},{
    versionKey: false,
    timestamps:true
})

module.exports= mongoose.model("user", userSchema)