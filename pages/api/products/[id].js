import dbConnect from "../../../utility/mongo";
import Product from "../../../Models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(5000).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      const product = await Product.dele(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
