
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete"
    }).then(async(result) => {
      if (result.isConfirmed) {

        await fetch(`http://localhost:3000/shoes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            onDelete(id);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

    
  };

  return (
    <div className="rounded-xl bg-slate-200 bg-opacity-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-md flex flex-col justify-between">
      <figure>
        <img className="h-[280px] w-full object-cover rounded-xl" src={image_url} alt={title} />
      </figure>
      <div className="text-left p-5">
        <p className="text-lg font-bold">{title}</p>
        <p className="font-semibold">{brand}</p>
        <p className="mb-2">Price: {price}$</p>
        <p className="text-left">
          <span className="font-semibold">Description: </span>
          {description}
        </p>
        
      </div>
      <div className="card-actions justify-end py-2 rounded-xl grid grid-cols-3 p-4 mt-auto">
          <button className="btn bg-slate-600 hover:text-black text-white">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
          <button className="btn bg-green-600 text-white">
            <Link to={`edit/${id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
    </div>
  );
};

export default SingleProductCardDashboard;
