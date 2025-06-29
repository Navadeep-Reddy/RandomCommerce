import { JSX, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteProduct, getImage, getProductById } from "@/api/productAPI";
import { Product } from "@/types/productType";

export default function Description(): JSX.Element {
  const [product, setProduct] = useState<Product | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      if (id) {
        await deleteProduct(parseInt(id));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            <div className="flex gap-x-6 mt-10">
              <Link to={`/update/${product.id}`}>
                <button className="border  bg-primary px-5 py-2 text-white font-semibold border-none rounded-full">
                  Update
                </button>
              </Link>
              <button
                className="border bg-primary px-5 py-2 text-white font-semibold border-none rounded-full"
                onClick={() => handleClick()}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="image">
            {image ? (
              <img src={image} className="h-[500px] w-[700px] object-cover"></img>
            ) : (
              <div>Loading Image</div>
            )}
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
