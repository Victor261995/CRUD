import { Router } from 'express';
import express from 'express';
import { getFruits } from "../Controllers/fruitController";

const FruitRuter=express.Router()

FruitRuter.get('/:id?',async(req,res)=>{

const {id}=req.params;
const idAsNumber=id ? parseInt(id):undefined;

try{
const fruit= await getFruits();

res.json(fruit);

}catch(error){
    console.error("Error:",error)
    res.status(500).json({ error: "Can not get fruits" });
}
})
export default FruitRuter