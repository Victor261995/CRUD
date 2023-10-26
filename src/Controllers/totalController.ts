import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient()

export const TotalPrice= async(userId:number) =>{
    try{
    const userBuys= await prisma.buy.findMany({
    where:{userId:userId},
    include:{fruit:true}
    }
    )
const total =userBuys.reduce((accum:number,buy)=>{
return accum+buy.fruit.price*buy.quantity


},0);

return total ;
}catch(error){

console.error('Error calculating total price',error)

}


}
