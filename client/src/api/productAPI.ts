import { Product } from "@/types/productType";
import { METHODS } from "http";

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

export async function uploadProducts(
  product: Product,
  image: File
): Promise<any> {
  const formData = new FormData();

  // CORRECTED: Append the product data as a Blob with 'application/json' content type
  formData.append(
    "product",
    new Blob([JSON.stringify(product)], { type: "application/json" })
  );

  formData.append("imageFile", image); // This is correct for the file

  try {
    const response = await fetch("http://localhost:8080/api/add", {
      method: "POST",
      // IMPORTANT: DO NOT set 'Content-Type' header manually for FormData.
      // The browser automatically sets it to 'multipart/form-data'
      // and adds the necessary 'boundary' string.
      body: formData,
    });

    if (!response.ok) {
      // It's good to get more specific error details from the backend if available
      const errorData = await response.json(); // Assuming backend sends JSON on error
      throw new Error(
        `Failed to add product: ${response.status} ${response.statusText} - ${
          errorData.message || JSON.stringify(errorData)
        }`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during product upload:", error); // More specific error message
    throw error; // Re-throw the error so the calling component can handle it
  }
}

export async function getImage(prodId: number): Promise<string | null> {
  try {
    const response = await fetch(
      `http://localhost:8080/api/product/image/${prodId}`
    );

    if (!response.ok) {
      throw new Error("Error in Fetching byte array");
    }

    const imageObject: Blob = await response.blob();

    if (imageObject == null) {
      throw new Error("Error in parsing data to Blob");
    }

    const url = URL.createObjectURL(imageObject);
    return url;
  } catch {
    return null;
  }
}

export async function updateProduct(
  prodId: number,
  product: Product,
  image: File
): Promise<Product | null> {
  let formData = new FormData();
  formData.append(
    "product",
    new Blob([JSON.stringify(product)], { type: "application/json" })
  );
  formData.append("file", image);

  try {
    const response = await fetch(
      `http://localhost:8080/api/product/update/${prodId}`,
      { method: "PUT", body: formData }
    );

    if (!response.ok) {
      throw new Error("Failed during updating");
    }

    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function deleteProduct(prodId: number): Promise<void> {
  await fetch(`http://localhost:8080/api/product/delete/${prodId}`, {
    method: "DELETE",
  });
}
