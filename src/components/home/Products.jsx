import SingleProduct from "../SingleProduct";

const Products = ({ data }) => {
  return (
    <div>
      <h1 className="pt-32 mb-14 text-3xl font-semibold text-center underline">Our Products</h1>

      <div className="flex gap-4 px-6 justify-center items-center ">
        {
          data.slice(0, 4).map((item) => (
            <SingleProduct key={item.id} shoe={item} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
