import { data } from "@database/products";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    const { id } = request.query;

    const products = data.find((product) => product.id.toString() === id);

    if (!products) {
      return response.status(400).json("User not found");
    }

    return response.status(200).json(products);
  }
}