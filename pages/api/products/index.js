import { products } from "@database/products";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    return response.status(200).json(products);
  }

  if (method === "POST") {
    const { body } = request;
    products.push({ ...body, id: products.length + 1 });
    return response.status(200).json(products);
  }
}