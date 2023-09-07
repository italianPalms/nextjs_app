"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function signupPage () {

    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const onSignup =  async => {
        try {
            const response = axios.post("/api/users/signup", user)
        
        } catch (error) {
            console.log("Signup failed", error.message);
        }
    }

    return (
        <div className="p-3 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-6xl mb-6">Signup</h1>

            <label className="text-xl mt-4">Username</label>
            <input className="p-2 rounded mt-1 text-black" type="text" placeholder="Enter your username"></input>

            <labe className="text-xl mt-4">Email</labe>
            <input className="p-2 rounded mt-1 text-black" type="email" placeholder="Enter your email"></input>

            <label className="text-xl mt-4">Password</label>
            <input className="p-2 rounded mt-1 mb-4 text-black" type="password" placeholder="Enter your password"></input>

            <button 
            className="border-white border-2 mt-6 rounded w-48 h-10"
            onClick={(onSignup) => {
                console.log("Signup button clicked")
            }}>Signup</button>
        </div>
    )
}