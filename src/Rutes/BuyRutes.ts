import { buyItem,calculateTotalPrice,deleteItem } from "../Controllers/buysController";
import express, { Router,Request,Response } from 'express';


 export const buyRouter=Router();

 buyRouter.post('/BuyItem', async (req: Request, res: Response) => {
    try  {
        const { userId, items } = req.body;
        const result = await buyItem(userId, items);
        res.status(200).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not add fruit' });
      }
    });

    
    
    buyRouter.delete('/DeleteItem/:BuyId/:FruitId', async (req: Request, res: Response) => {
        try {
            const buyId = parseInt(req.params.buyId);
    const fruitId = parseInt(req.params.fruitId);
        
          const result = await deleteItem(buyId, fruitId);
          res.status(200).json(result);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error deleting Fruit' });
        }
      });

      buyRouter.get('/TotalPrice', async (req: Request, res: Response) => {
        try {
            const userId = parseInt(req.params.userId);
          const totalPrice = await calculateTotalPrice(userId); 
          res.status(200).json({ totalPrice });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error gettin total price' });
        }
      });
      export default buyRouter