import { JSX, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImage, getProductById } from "@/api/productAPI";
import { Product } from "@/types/productType";

export default function Description(): JSX.Element {
  const [product, setProduct] = useState<Product | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        console.log("Product Not Found ");
        return null;
      }

      const data: Product | null = await getProductById(id);
      setProduct(data);

      const imageURL = await getImage(parseInt(id));
      if (imageURL) {
        setImage(imageURL);
      } else {
        setImage(null);
      }
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className="desc-box h-screen bg-secondary">
      {product ? (
        <div className="product-box w-[80%] mx-auto  pt-[10%] h-full flex">
          <div className="flex flex-col  basis-[50%]">
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <div className="mt-10 flex gap-x-2">
              <h3 className="font-semibold">Description:</h3>
              <p className="">{product.description}</p>
            </div>
            <div className="mt-2 flex gap-x-2">
              <h3 className="font-semibold">Price:</h3>
              <p className="">{product.price}</p>
            </div>
            <div className="mt-2 flex gap-x-2">
              <h3 className="font-semibold">Category:</h3>
              <p className="">{product.category}</p>
            </div>
            <div className="mt-2 flex gap-x-2">
              <h3 className="font-semibold">Release Date:</h3>
              <p className="">{product.releaseDate}</p>
            </div>
            <div className="mt-2 flex gap-x-2">
              <h3 className="font-semibold">Quantity:</h3>
              <p className="">{product.quantity}</p>
            </div>
          </div>
          <div className="image">
            {image ? <img src={image} className="h-[500px] w-[500px]"></img> : <div>Loading Image</div>}
          </div>
        </div>
      ) : (
        <div className="no-product">
          <h1 className="text-red-500 text-4xl">Not Found</h1>
        </div>
      )}
    </div>
  );
}
