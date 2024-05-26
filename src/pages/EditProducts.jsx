import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditProducts = () => {
  const shoe = useLoaderData();

  const [title, setTitle] = useState(shoe.title);
  const [price, setPrice] = useState(shoe.price);
  const [brand, setBrand] = useState(shoe.brand);
  const [id, setId] = useState(shoe.id);
  const [description, setDescription] = useState(shoe.description);
  const [image_url, setImageURL] = useState(shoe.image_url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };


    Swal.fire({
      title: "Are you want to update?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update"
    }).then( async (result) => {
      if (result.isConfirmed) {


        await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Updated!",
          text: "Successfully updated.",
          icon: "success"
        });
      });

       
      }
    });
  }

    

  return (
    <div className="p-20">
      <h1 className="font-bold text-4xl">Edit Product</h1>

      <div className="my-16 flex justify-center items-center gap-20">
        <form onSubmit={handleSubmit} className="w-[450px] bg-slate-200 p-6 rounded-xl shadow-lg">
          <div className="mt-2">
            <input
              className="bg-slate-50 p-4 w-full focus:border-none rounded-xl"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-slate-50 p-4 w-full focus:border-none rounded-xl"
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-slate-50 p-4 w-full focus:border-none rounded-xl"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-slate-50 p-4 w-full focus:border-none rounded-xl"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-slate-50 p-4 w-full focus:border-none rounded-xl"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-slate-50 p-4 w-full focus:border-none rounded-xl"
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-slate-600 text-white p-4"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
