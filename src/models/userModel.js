import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: [true, 'Please provide username'], 
        unique: true, 
    },
    email: {
        type: String, 
        required: [true, 'Please provide email'],
    },
    password: {
        type: String, 
        required: [true, 'Please provide password'],
    }, 
    isVerified: {
        type: Boolean, 
        default: false, 
    }, 

    isAdmin: {
        type: Boolean, 
        default: false,
    }, 

    forgotPasswordToken: String, 
    forgotPasswordTokExpiry: Date, 
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("user", userSchema);

export default User;