import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="w-[250px] bg-slate-600 text-white min-h-screen p-8">
        <ul className="mt-6">
          <li className=" p-3 text w-full ">
            <Link className="hover:border-b" to={"home"}>Dashboard</Link>
          </li>
          <li className=" p-3 text w-full">
            <Link className="hover:border-b" to={"all-products"}>All Products</Link>
          </li>
          <li className=" p-3 text w-full">
            <Link className="hover:border-b" to={"add-products"}>Add Product</Link>
          </li>
          <li className=" p-3 text w-full">
            <Link className="hover:border-b" to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
