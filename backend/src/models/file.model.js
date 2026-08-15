import mongoose from "mongoose"

const fileSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        originalName: {
            type: String,
            required: true
        },

        size: {
            type: Number,
            required: true
        },

        mimeType: {
            type: String,
            required: true
        },

        storagePath: {
            type: String,
            required: true
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
)

const fileModel = mongoose.model("File", fileSchema)

export default fileModel