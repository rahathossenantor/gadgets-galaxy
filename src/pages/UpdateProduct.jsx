import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const data = useLoaderData();
    const navigate = useNavigate();

    // update product
    const updateProduct = async (e) => {
        e.preventDefault();
        const formData = e.target;

        const productName = formData.productName.value;
        const brand = formData.brand.value;
        const price = formData.price.value;
        const ratings = formData.ratings.value;
        const productType = formData.productType.value;
        const details = formData.details.value;
        const photo = formData.photo.value;
        const updatedProduct = { productName, brand, productType, price, ratings, details, photo };

        try {
            const res = await fetch(`http://localhost:5000/update-product/${data._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedProduct)
            });
            const result = await res.json();
            if (result.modifiedCount) {
                Swal.fire({
                    title: "Success!",
                    text: "Successfully updated!",
                    icon: "success",
                    confirmButtonText: "Close"
                });
                formData.reset();
                navigate("/");
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="border shadow-xl 2xl:p-20 xl:p-20 lg:p-10 md:p-10 p-5 my-10 rounded-md">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-2">Update <span className="text-[#e73c17]">Product</span></h2>
                    <p className="font-raleway mb-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout.</p>
                </div>
                <form onSubmit={updateProduct}>
                    {/* first row */}
                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5 mb-5">
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="productName" className="font-semibold text-lg">Product Name:</label>
                            <input type="text" defaultValue={data?.productName} required placeholder="Enter product name" id="productName" name="productName" className="input input-bordered w-full" />
                        </div>
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="brand" className="font-semibold text-lg">Brand:</label>
                            <select id="brand" defaultValue={data?.brand} required name="brand" className="input input-bordered w-full">
                                <option value="" hidden >Select brand</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Lenovo">Lenovo</option>
                                <option value="Asus">Asus</option>
                                <option value="Apple">Apple</option>
                                <option value="Microsoft">Microsoft</option>
                                <option value="Android">Android</option>
                            </select>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5 mb-5">
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="productType" className="font-semibold text-lg">Product Type:</label>
                            <select id="productType" defaultValue={data?.productType} required name="productType" className="input input-bordered w-full">
                                <option value="" hidden >Select product type</option>
                                <option value="Phone">Phone</option>
                                <option value="Tab">Tab</option>
                                <option value="Computer">Computer</option>
                                <option value="Laptop">Laptop</option>
                            </select>
                        </div>
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="price" className="font-semibold text-lg">Price:</label>
                            <input type="number" defaultValue={data?.price} required placeholder="Enter product price" id="price" name="price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* third row */}
                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5 mb-5">
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="ratings" className="font-semibold text-lg">Ratings:</label>
                            <input type="number" defaultValue={data?.ratings} required min={0} max={5} placeholder="Rate this product (Min 0, Max 5)" id="ratings" name="ratings" className="input input-bordered w-full" />
                        </div>
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="details" className="font-semibold text-lg">Short Description:</label>
                            <input type="text" defaultValue={data?.details} required placeholder="Type short description" id="details" name="details" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* fourth row */}
                    <div className="mb-5">
                        <label htmlFor="photo" className="font-semibold text-lg">Product Image:</label>
                        <input type="text" defaultValue={data.photo} required placeholder="Enter photo URL" id="photo" name="photo" className="input input-bordered w-full" />
                    </div>
                    <input type="submit" value="Update Product" className="btn btn-block normal-case text-lg text-[#e73c17] bg-white hover:bg-white hover:border-[#e73c17] border-[#e73c17]" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
