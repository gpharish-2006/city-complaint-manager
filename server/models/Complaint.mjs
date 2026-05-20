import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
    {
        complaintId:{
            type: String,
            required: true,
            unique: true,
        },
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        status:{
            type: String,
            enum: ["Pending","In Progress","Resolved"],
            required: true,
            default: "Pending",
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    {
        timestamps: true
    }
);

const Complaint = mongoose.model("Complaint",complaintSchema);

export default Complaint;