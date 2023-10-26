import { PrismaClient } from "@prisma/client";
import { error } from "console";

const  prisma=new PrismaClient

export const getFruits=async()=>{
    try{
const fruits=await prisma.fruit.findMany({})
return fruits;
    }   catch{error} {
        console.error('Error getting fruits', error);
   
    }
    }


