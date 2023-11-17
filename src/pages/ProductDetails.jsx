import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const ProductDetails = () => {
    const product = useLoaderData();
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch(`https://gadgets-galaxy-server.vercel.app/cart/${user?.email}`)
            .then(res => res.json())
            .then(data => setCartItems(data));
    }, [user?.email]);

    const addToCart = async (product) => {
        const isExist = cartItems.find(item => product._id === item._id);

        if (isExist) {
            Swal.fire({
                title: "Error!",
                text: "Product already added!",
                icon: "error",
                confirmButtonText: "Close"
            });
            return;
        }
        try {
            const productData = {
                _id: product._id,
                userEmail: user?.email
            };
            const res = await fetch("https://gadgets-galaxy-server.vercel.app/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            });
            const result = await res.json();
            if (result.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Successfully added",
                    icon: "success",
                    confirmButtonText: "Close"
                });
                history.back();
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 border">
            <div className="py-10 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5 items-center justify-center">
                <div className="2xl:w-3/6 xl:w-3/6 lg:w-3/6 md:w-full w-full border flex items-center justify-center">
                    <img src={product?.photo} alt="cover-image" className="inline-block 2xl:h-96 xl:h-96 lg:h-[380px] md:h-96 rounded-xl" />
                </div>
                <div className="2xl:w-3/6 xl:w-3/6 lg:w-3/6 md:w-full w-full">
                    <div className="mb-3">
                        <h2 className="xl:text-4xl md:text-3xl text-3xl font-semibold mb-2 text-[#e73c17]">{product?.productName}</h2>
                        <h4 className="text-[25px]">Brand: <span className="font-semibold">{product?.brand}</span></h4>
                        <h3 className="text-[34px] my-1">Price: $<span className="font-semibold">{product?.price}</span></h3>
                        <div className="flex gap-5">
                            <div className="rating">
                                {
                                    new Array(parseInt(product.ratings)).fill(1).map((ratings, i) =>
                                        <input key={i}
                                            type="radio" name={`rating-${product._id}`}
                                            className="mask mask-star bg-orange-400"
                                            defaultChecked />
                                    )
                                }
                                {
                                    new Array(5 - parseInt(product.ratings)).fill(1).map((ratings, i) =>
                                        <input key={i} type="radio" name={`rating-${product._id}`} className="mask mask-star bg-orange-400" />
                                    )
                                }
                            </div>
                            <h3 className="text-[19px]">Category: <span className="font-semibold">{product?.productType}</span></h3>
                        </div>
                        <p className="text-[19px] font-semibold">{product.brand} Store 1 Year Official Warranty Support</p>
                    </div>
                    <p className="text-lg mb-[10px]">{product?.details}</p>
                    <button onClick={() => addToCart(product)} className="bn632-hover bn28 px-[30px] py-[8px] radius-none">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
