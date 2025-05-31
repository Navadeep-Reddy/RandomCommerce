import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
function NavigationBar() {
  const [isSticky, setIsSticky] = useState<boolean>(false);

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
        <li className="hover:text-secondary duration-100 cursor-pointer">
          Home
        </li>
        <li className="hover:text-secondary duration-100 cursor-pointer">
          Add Product
        </li>
        <li className="hover:text-secondary duration-100 cursor-pointer">
          Categories
        </li>
      </ul>
      <div className="flex gap-x-2">
        <Button className="rounded-4xl bg-primary text-white">Search</Button>
        <Input placeholder="Enter product" className="bg-secondary" />
      </div>
    </nav>
  );
}

export default NavigationBar;
