const express=require('express');
const fs=require('fs');
const path=require('path');
const port = 5000;

const app=express();
app.use(express.json());
app.post("/createfile",(req,res)=>{
    // fs.writeFile("sample-folder/sampleone.txt","Sample content created",
    // ()=>{
    //     console.log("File created successfully");
    // })
    fs.writeFileSync(`sample-folder/${new Date().toISOString()}`,`${Date.now()}`)
    console.log("File created successfully")
    res.status(200).send(new Date());
})