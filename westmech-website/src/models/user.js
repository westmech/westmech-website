import mongoose, { Schema } from "mongoose";

// User Account Schema
const userSchema = new Schema(
    {
        firstName:  { 
            type: String,
            required: true,
        },
        lastName:  { 
            type: String,
            required: true,
        },
        email:  { 
            type: String,
            required: true,
        },
        password:  { 
            type: String,
            required: true,
        },
        role:  {
            type: String,
            enum: ["student", "parent", "coach"],
            required: true,
        },
    }, {timestamps: true}
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;