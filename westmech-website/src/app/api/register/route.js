// user create account
import { NextResponse } from "next/server";
import User from "../../../models/user";
import connectMongoDB from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { user } = await req.json();
        const hashedPass = await bcrypt.hash(user.password, 10);
        // connecting to db
        connectMongoDB();
        
        // creating a user document
        await User.create({
            firstName: user.firstName, 
            lastName: user.lastName, 
            email: user.email, 
            password: hashedPass, 
            role: user.role 
        })
        return NextResponse.json({message: "User registered."}, { status: 201 });
    } catch (error) {
        return NextResponse.json({message: "Error occured while registering the user."}, {status: 500});
    }
}
