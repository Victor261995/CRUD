import { PrismaClient } from '@prisma/client'
import { Request,Response } from "express";
import { TotalPrice } from "./totalController";
const prisma=new PrismaClient();


export const buyItem = async (userId:number, items:Array<any>) => {
  try {
    const buysData = items.map((item) => ({
      userId: userId,
      fruitId: item.fruitId,
      quantity: item.quantity,
      totalPriceId: item.totalPriceId,
    }));

    const newBuy = await prisma.buy.createMany({
      data: buysData,
    });

    return newBuy;


}catch(error){
error
};
console.log('error buying');


}

export const calculateTotalPrice=async(userId:number)=>{

try{

const totalPrice=await TotalPrice(userId)
return totalPrice

}catch(error){
throw error

}}


export const deleteItem=async(buyId:number,fruitId:number)=>{
  try {
    const Erase = await prisma.buy.deleteMany({
      where: {
        id: buyId,
        fruitId:fruitId,
      }
    });
     

return Erase;
}catch (error) {
  console.error("Error deleting item from buy", error);

}}
