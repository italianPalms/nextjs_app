import { connect } from "@/dbConfig/dbConfig";
import User from "@models/userModel";
import { NextRequest, NextResponse } from "next/server";

const connection = connect();

connection
.then(() => {
    console.log('MonogDB connected successfully');
})
.catch ((error) => {
    console.log('MongoDB connection error', error);
});