import express from 'express';
import bodyParser from 'body-parser'; 
import UserRouter from './Rutes/UserRutes';
import buyRouter from './Rutes/BuyRutes';
import FruitRuter from './Rutes/FruitRutes';
import { PrismaClient } from "@prisma/client";
import { fruitSeed } from './Fruits/FruitsSeed';

const prisma= new PrismaClient();

const app=express();
const PORT=process.env.PORT|| 3002;

app.use(bodyParser.json());

app.use(UserRouter);
app.use(FruitRuter);
app.use( buyRouter);
const backInit= async()=> {
    try {
    
   await prisma.$connect();
   

   app.listen(PORT, () => {
    fruitSeed();
      
        console.log(`Server listen on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error('Error database start', error);
    }
  }


  backInit();