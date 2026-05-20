import Complaint from "../models/Complaint.mjs";

const getAllComplaints = async (req, res) => {
    try{
        const complaints = await Complaint.find().sort({ createdAt:-1 }).populate("userId","name email city");
        res.status(200).json({ complaints })
    }
    catch(err){
        res.status(500).json({ message: "Server Error", error: err.message });
    }
}

const updateStatus = async (req,res)=>{
    try{
        const { id } = req.params;
        const { status } = req.body;
        if(!id || !status){
            return res.status(400).json({ message: "Complaint ID and status are required" });
        }
        if(!["Pending","In Progress","Resolved"].includes(status)){
            return res.status(400).json({ message: "Invalid status value" });
        }
        const complaint = await Complaint.findById(id);
        if(!complaint){
            return res.status(404).json({ message: "Complaint not found" });
        }
        complaint.status = status
        await complaint.save();
        return res.status(200).json({ message: "Complaint status updated successfully", complaint })
    }
    catch(err){
        res.status(500).json({ message: "Server Error", error: err.message });
    }
}

const deleteComplaint = async (req,res)=>{
    try{
        const { id } = req.params;
        if(!id){
            return res.status(400).json({ message: "Complaint ID is Required" });
        }
        const complaint = await Complaint.findById(id);
        if(!complaint){
            return res.status(404).json({ message: "Complaint not found" });
        }
        await complaint.deleteOne()
        return res.status(200).json({ "message": "Complaint deleted successfully" })
    }
    catch(err){
        res.status(500).json({ message: "Server Error", error: err.message });
    }
}

export {
    getAllComplaints,
    updateStatus,
    deleteComplaint
}