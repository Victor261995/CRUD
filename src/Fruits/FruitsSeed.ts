import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const fruitSeed= async () => {
try{
const fruitData=[
{
  id:1,
name:'banana',
amount: '1 kg',
price: 200
},
{
  id:2,
    name:'pera',
    amount: '1 kg',
    price: 500
    },
    {
      id:3,
        name:'papa',
        amount: '0.5 kg',
        price: 700
        },
{
  id:4,
 name:'sandia',
amount: '0.5 kg',
price: 1700
            },
{
  id:5,
 name:'naranja',
amount: '2 kg',
 price: 250.75
 }




];

for (const fruit of fruitData) {
   await prisma.fruit.create({
      data: fruit,
    });
  }
console.log('frutas agregadas')
}catch(error){
console.log('error adding fruits');


} finally {
await prisma.$disconnect();
}
};



