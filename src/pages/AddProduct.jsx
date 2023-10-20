
import Swal from "sweetalert2";

const AddProduct = () => {

    // add new product
    const addProduct = async (e) => {
        e.preventDefault();
        const formData = e.target;

        const productName = formData.productName.value;
        const brand = formData.brand.value;
        const price = formData.price.value;
        const ratings = formData.ratings.value;
        const productType = formData.productType.value;
        const details = formData.details.value;
        const photo = formData.photo.value;
        const product = { productName, brand, productType, price, ratings, details, photo };

        try {
            const res = await fetch("http://localhost:5000/add-product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            });
            const result = await res.json();
            if (result.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Successfully added",
                    icon: "success",
                    confirmButtonText: "Close"
                });
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="border shadow-xl p-20 my-10 rounded-md">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-2">Add New <span className="text-[#e73c17]">Product</span></h2>
                    <p className="font-raleway mb-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={addProduct}>
                    {/* first row */}
                    <div className="flex gap-5 mb-5">
                        <div className="w-1/2">
                            <label htmlFor="productName" className="font-semibold text-lg">Product Name:</label>
                            <input type="text" placeholder="Enter coffee name" id="productName" name="productName" className="input input-bordered w-full" />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="brand" className="font-semibold text-lg">Brand:</label>
                            {/* <input type="text" placeholder="Enter coffee brand" id="brand" name="brand" className="input input-bordered w-full" /> */}
                            <select id="brand" name="brand" className="input input-bordered w-full">
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
                    <div className="flex gap-5 mb-5">
                        <div className="w-1/2">
                            <label htmlFor="productType" className="font-semibold text-lg">Product Type:</label>
                            <select id="productType" name="productType" className="input input-bordered w-full">
                                <option value="" hidden >Select product type</option>
                                <option value="Phone">Phone</option>
                                <option value="Tab">Tab</option>
                                <option value="Computer">Computer</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Headphone">Headphone</option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="price" className="font-semibold text-lg">Price:</label>
                            <input type="number" placeholder="Enter product price" id="price" name="price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* third row */}
                    <div className="flex gap-5 mb-5">
                        <div className="w-1/2">
                            <label htmlFor="ratings" className="font-semibold text-lg">Ratings:</label>
                            <input type="number" min={0} max={5} placeholder="Rate this product (Min 0, Max 5)" id="ratings" name="ratings" className="input input-bordered w-full" />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="details" className="font-semibold text-lg">Short Description:</label>
                            <input type="text" placeholder="Type short description" id="details" name="details" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* fourth row */}
                    <div className="mb-5">
                        <label htmlFor="photo" className="font-semibold text-lg">Product Image:</label>
                        <input type="text" placeholder="Enter photo URL" id="photo" name="photo" className="input input-bordered w-full" />
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-block normal-case text-lg text-[#e73c17] bg-white hover:bg-white hover:border-[#e73c17] border-[#e73c17]" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
