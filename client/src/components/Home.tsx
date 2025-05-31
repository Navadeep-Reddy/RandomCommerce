import { JSX, useEffect, useState } from "react";
import { getAllProducts } from "@/api/productAPI";
import { Product } from "@/types/productType";

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
    <div className="h-screen pt-[5%]">
      <h1 className="text-4xl mx-[5%]">Please wait content is still loading</h1>
    </div>
  ) : (
    <div className="h-screen pt-[5%]">
      <div className="grid grid-cols-3 gap-4 mx-[5%]">
        {products?.map((product: Product): any => (
          <div className="bg-tertiary p-7 rounded-xl hover:bg-accent duration-100" key={product.id}>
            <p className="id">Product Name : {product.name}</p>
            <p>Price : {product.price}</p>
            <p className="Avail">
              Availability :{" "}
              {product.availability ? product.quantity : "Out of Stock"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
