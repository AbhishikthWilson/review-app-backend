const mongoose = require("mongoose")
const schema= mongoose.Schema(
    {
        "name":{type:String,required:true},
        "year":{type:String,required:true},
        "duration":{type:String,required:true},
        "rating":{type:String,required:true}
    }
)

let reviewModel= mongoose.model("reviews",schema)
module.exports= {reviewModel}