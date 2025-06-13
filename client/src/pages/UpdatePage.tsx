import { useEffect, useState } from "react";
import { Product } from "@/types/productType";
import { getImage, getProductById, updateProduct } from "@/api/productAPI";
import { useParams } from "react-router-dom";

export default function UpdatePage() {
  const [image, setImage] = useState<File | null>(null);
  const { id } = useParams();
  const [product, setProduct] = useState<Product>({
    id: 0,
    price: 0,
    name: "",
    description: "",
    category: "",
    releaseDate: "",
    availability: false,
    quantity: 0,
  });

  async function handleClick() {
    if (image && product && id) {
      const response = await updateProduct(parseInt(id), product, image);
      console.log(response);
    } else {
      console.log("Required data is not filled");
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        if (id) {
          const response: Product | null = await getProductById(id);
          if (response) setProduct(response);
          else console.error("Did not fecth product");
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="h-screen bg-secondary">
      <div className="w-[80%] mx-auto items-center pt-[8%] h-full flex flex-col">
        <h1 className="text-6xl font-bold">Update Product</h1>
        <form
          className="details box mt-10 grid grid-cols-3 gap-x-4 gap-y-6 p-4 rounded-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              className="w-full px-4 pt-4 pb-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder=" "
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <p className="absolute left-4 top-1 text-sm text-black pointer-events-none">
              Name
            </p>
          </div>

          {/* Price */}
          <div className="relative">
            <input
              type="number"
              name="price"
              className="w-full px-4 pt-4 pb-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder=" "
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: parseInt(e.target.value) || 0 })
              }
            />
            <p className="absolute left-4 top-1 text-sm text-black pointer-events-none">
              Price
            </p>
          </div>

          {/* Description */}
          <div className="relative col-span-3">
            <textarea
              name="description"
              className="w-full px-4 pt-4 pb-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder=" "
              rows={4}
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
            <p className="absolute left-4 top-1 text-sm text-black pointer-events-none">
              Description
            </p>
          </div>

          {/* Category */}
          <div className="relative">
            <input
              type="text"
              name="category"
              className="w-full px-4 pt-4 pb-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder=" "
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
            <p className="absolute left-4 top-1 text-sm text-black pointer-events-none">
              Category
            </p>
          </div>

          {/* Release Date */}
          <div className="relative">
            <input
              type="date"
              name="releaseDate"
              className="w-full px-4 pt-4 pb-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder=" "
              value={product.releaseDate}
              onChange={(e) =>
                setProduct({ ...product, releaseDate: e.target.value })
              }
            />
            <p className="absolute left-4 top-1 text-sm text-black pointer-events-none">
              Release Date
            </p>
          </div>

          {/* Availability */}
          <div className="relative flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              name="availability"
              checked={product.availability}
              className="w-5 h-5 appearance-none border-2 border-primary rounded-sm checked:bg-primary checked:border-transparent focus:outline-none transition duration-200"
              onChange={(e) =>
                setProduct({ ...product, availability: e.target.checked })
              }
            />
            <p className="text-sm text-black">Available</p>
          </div>

          {/* Quantity */}
          <div className="relative">
            <input
              type="number"
              name="quantity"
              className="w-full px-4 pt-4 pb-6 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder=" "
              value={product.quantity}
              onChange={(e) =>
                setProduct({
                  ...product,
                  quantity: parseInt(e.target.value) || 0,
                })
              }
            />
            <p className="absolute left-4 top-1 text-sm text-black pointer-events-none">
              Quantity
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full px-4 pt-6 pb-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:rounded-full file:text-primary hover:file:bg-blue-100"
              onChange={(e) => {
                if (e.target.files) {
                  setImage(e.target.files[0]);
                } else {
                  setImage(null);
                }
              }}
            />
            <p className="absolute left-4 top-1 text-sm text-black pointer-events-none">
              Product Image
            </p>
          </div>

          <button
            className="bg-primary rounded-full text-white font-semibold"
            onClick={() => handleClick()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
