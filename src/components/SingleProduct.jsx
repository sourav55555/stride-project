import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, image_url } = shoe;

  return (

    <div className="rounded-xl bg-slate-200 bg-opacity-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-md">
      <figure>
        <img className="h-[270px] w-[270px] object-cover rounded-xl" src={image_url} alt={title} />
      </figure>
      <div className="text-center p-5">
        <p className="text-lg font-bold">{title}</p>
        <p className="font-semibold">{brand}</p>
        <p className="mb-2">Price: {price}$</p>
        <button className="btn bg-slate-600 text-white hover:text-black w-full">
            <Link to={`/products/${id}`}>See details</Link>
        </button>
      </div>
    </div>

  );
};

export default SingleProduct;
