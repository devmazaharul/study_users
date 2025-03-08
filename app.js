const express=require("express")
const app=express()
const cors=require("cors")
const {PrismaClient}=require("@prisma/client")
const prisma=new PrismaClient()

app.use([
    express.json(),
    express.urlencoded({extended:true}),
    cors()
])



app.post("/",async(req,res,next)=>{
    try {
        const obj={
            name:"Mazahrul islam",
            email:"maza@gmail.com",
            number:"01797575932",
            address:"Balarampur jessore sadar jessore",
            password:"11223"
        }
        const {address,email,name,number,password}=obj

        const result=await prisma.users.create({
            data:{
                name,
                address,password,email,number
            }
        })
        res.status(201).json(result)
        
    } catch (error) {
        next()
    }
})



app.listen(8081,()=>{
    console.log("Server runnuing...")
})