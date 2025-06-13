import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { Product } from "@/types/productType";
import { searchProductByKeyword } from "@/api/productAPI";
function NavigationBar() {
  const [search, setSearch] = useState<string>("");
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data: Product[] = await searchProductByKeyword(search);
      setProducts(data);
    };

    fetchProducts();
  }, [search]);

  useEffect(() => {
    const setter = (): void => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", setter);

    return () => window.removeEventListener("scroll", setter);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-[100%] ${
        isSticky ? "shadow-xl" : "shadow-sm"
      } flex items-center px-10 justify-between z-50 bg-neutral`}
    >
      <h1 className="text-3xl font-extrabold text-white">RandomCommerce</h1>
      <ul className="flex  justify-center gap-x-5 font-bold  text-[20px] text-white my-5">
        <Link to="/">
          <li className="hover:text-secondary duration-100 cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="/add">
          <li className="hover:text-secondary duration-100 cursor-pointer">
            Add Product
          </li>
        </Link>
      </ul>
      <div className="gap-x-2 relative " id="search-container">
        <Input
          placeholder="Search"
          className="bg-secondary focus:ring-primary focus:ring-0"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {search.length > 0 ? (
          <div
            className="w-full flex flex-col gap-y-1 absolute top-[120%] bg-white rounded-xl overflow-hidden"
            id="search-fieldBox"
          >
            {products.length > 0 ? (
              products.map((item, key) => (
                <Link to={`/product/${item.id}`}>
                  <div className="border-b-1" id="searchField" key={key}>
                    <p className="px-5 py-1">{item.name}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="border-b-1" id="searchField">
                <p className="px-5 py-1">Not Found</p>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
