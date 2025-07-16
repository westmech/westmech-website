import mongoose, { Schema } from "mongoose";

// User Account Schema
const userSchema = new Schema(
    {
        fname: String,
        lname: String,
        email: String,
        password: String,
        role: "student" | "parent" | "coach",
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;