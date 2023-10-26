import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";

const prisma=new PrismaClient();

export const createUser =async(req:Request,res:Response)=>{
try{
const {name,email,password}=req.body;
const alredyUser=await prisma.user.findFirst({
    where:{email},
});
if(alredyUser)
{
return res.status(400).json({error:'User already being register'});

}

const newUser=await prisma.user.create({
data:{
name,
email,
password


},
});
return res.json(newUser);
}catch(error){
console.error('Error Creating user',error)

}
}

export const loginUser=async(req:Request,res:Response)=>{

try{const {email,password}=req.body;
const user=await prisma.user.findFirst({
where:{email:email},
include:{
    Buys:true,
TotalPrice:true
}
}
);

if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  return res.json(user);

}catch(error){
    console.error('error al iniciar sesion', error);
    res.status(500).json({error:'error al iniciar sesion'})
    
}}


export const getUserById = async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.id); 
  
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        include: {
          Buys: true,
          TotalPrice: true,
        },
      });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.json(user);
    } catch (error) {
      console.error('Error getting user', error);
      res.status(500).json({ error: 'Error getting user' });
    }
  }


