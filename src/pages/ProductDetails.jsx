import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoeData = useLoaderData();

  const { brand, description, image_url, price, title } = shoeData;

  return (
    <div className="bg-slate-200 pt-28 min-h-screen w-full ">
      <div className="flex justify-center items-center max-w-[1200px] mx-auto gap-20">
        <div className="1/2">
          <img className="h-[500px] w-auto object-cover border-4 border-slate-700 rounded-3xl" src={image_url} alt="product image" />
        </div>
        <div className="w-1/2 text-left">
          <h1 className="text-5xl font-bold">{title}</h1>
          <h3 className="text-2xl font-semibold mt-5">Price: {price} $</h3>
          <h3 className="text-xl font-semibold mt-5">Brand: {brand}</h3>
          <p className="text-lg font-light mt-5"> <span className="font-semibold">Description:</span> {description}</p>
          <button className="px-16 py-3 rounded-2xl bg-slate-700 text-white mt-4 font-semibold hover:text-black hover:bg-slate-200 transition-all duration-300 shadow-lg">Add To Cart</button>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;
