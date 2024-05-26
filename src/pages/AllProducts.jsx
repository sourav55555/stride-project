import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-20 w-full">
      <h1 className="font-bold text-4xl">All Products</h1>
      <div className="my-16 grid grid-cols-3 mx-auto gap-6 justify-center">
        {products.map((shoe) => (
          <SingleProductCardDashboard
            key={shoe.id}
            shoe={shoe}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
