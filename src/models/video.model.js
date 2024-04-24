import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // Cloudinary URL
            required: true,
        },
        thumbnail: {
            type: String, // Cloudinary URL
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number, // Cloudinary URL
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        // likes: {
        //     type: Number,
        //     default: 0,
        // },
        // dislikes: {
        //     type: Number,
        //     default: 0,
        // },
        // comments: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: "Comment",
        //     },
        // ],
    },
    { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
