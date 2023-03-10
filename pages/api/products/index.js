import dbConnect from "../../../utility/mongo";
import Product from "../../../Models/Product";


export default async function handler(req, res) {
  const { method } = req;

  

  dbConnect();

  if (method === "GET") {
    
    try {
      const product = await Product.find();
      res.status(200).json(product);
      
      

    }
    catch(err){
      res.status(5000).json(err);
    
    }
    
  }

  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } 
    catch (err) {
      res.status(500).json(err);
    }
  }
}