import Swal from "sweetalert2";

const AddProducts = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.imageurl.value;

    const data = { id, title, brand, price, description, image_url };


    Swal.fire({
      title: "Are you want to add the product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add!"
    }).then( async (result) => {
      if (result.isConfirmed) {

        await fetch("http://localhost:3000/shoes", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            form.reset();

            Swal.fire({
              title: "Added!",
              text: "Your file has been added.",
              icon: "success"
            });
          });

      }
    });

  };

  return (
    <div className="p-20">
      <h1 className="font-bold text-4xl">Add a Product</h1>

      <div className="my-16 flex justify-center items-center gap-20">
        <div>
          <h2 className="font-semibold text-4xl text-slate-500">Add Your New Product <br /> & Get Profit</h2>
        </div>
        <form onSubmit={handleSubmit} className="w-[450px] bg-slate-200 p-6 rounded-xl shadow-lg">
          <div className="mt-2">
            <input
              className="bg-slate-50 p-4 w-full focus:border-none rounded-xl"
              type="text"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full focus:border-none rounded-xl"
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full focus:border-none rounded-xl"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full focus:border-none rounded-xl"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full focus:border-none rounded-xl"
              type="text"
              name="imageurl"
              placeholder="Image URL"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full focus:border-none rounded-xl"
              type="text"
              name="id"
              placeholder="ID"
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-slate-600 text-white hover:text-black p-4"
              type="submit"
              value="Add product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
