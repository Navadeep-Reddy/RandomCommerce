import { JSX, useEffect, useState } from "react";
import { getAllProducts } from "@/api/productAPI";
import { Product } from "@/types/productType";
import { Link } from "react-router-dom";

function Home(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      try {
        const data: Product[] | null = await getAllProducts();
        console.log(data);
        setProducts(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  return loading ? (
    <div className="h-screen pt-[5%] bg-secondary">
      <h1 className="text-4xl mx-[5%]">Please wait content is still loading</h1>
    </div>
  ) : (
    <div className="h-screen pt-[5%] bg-secondary">
      <div className="grid grid-cols-3 gap-4 mx-[5%]">
        {products?.map((product: Product): any => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div
              className="bg-tertiary p-7 rounded-xl hover:bg-accent duration-100 flex justify-between"
              key={product.id}
            >
              <div>
                <p className="id text-2xl">Product Name : {product.name}</p>
                <p>Price : {product.price}</p>
                <p className="Avail">
                  Availability :{" "}
                  {product.availability ? product.quantity : "Out of Stock"}
                </p>
                <p>Description : {product.description}</p>
              </div>
              {/*We manually make the url form the data instead of converting into a blob and then getting url for it */}
              <img
                className="h-28 w-28 object-cover"
                src={`data:${product.imageType};base64,${product.imageData}`}
              ></img>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
