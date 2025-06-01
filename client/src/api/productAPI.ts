import { Product } from "@/types/productType";

export async function getAllProducts(): Promise<Product[] | null> {
  try {
    const response = await fetch("http://localhost:8080/api/products");

    if (!response.ok) {
      throw new Error("Failed to fetch details of all products");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getProductById(prodId: string): Promise<Product | null> {
  try {
    const response = await fetch(`http://localhost:8080/api/product/${prodId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch by ID");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
