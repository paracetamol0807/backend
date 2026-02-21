import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile :{
            type:String,   //cloudinary url
            requirrd : true,
        },
        thumbnail :{
            type:String,   //cloudinary url
            requirrd : true,
        },
        title :{
            type:String,  
            requirrd : true,
        },
        description :{
            type:String,  
            requirrd : true,
        },
        duration :{
            type:Number,   //cloudinary url
            requirrd : true,
        },
        views :{
            type: Number,  
            default : 0
        },
        isPublished :{
            type: Boolean,
            default : true
        },
        owner :{
            type : Schema.Types.ObjectId,
            ref : "User"
        }
    },{
        timestamps:true
    }
)


videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)