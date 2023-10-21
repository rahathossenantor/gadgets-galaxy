import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
    const loadedData = useLoaderData();
    const [cartData, setCartData] = useState(loadedData);
    const [dataLength, setDataLength] = useState(6);
    const [isShowAll, setIsShowAll] = useState(false);

    const handleIsShowAll = () => {
        if (dataLength === 6) {
            setDataLength(cartData.length);
        } else {
            setDataLength(6);
        }
        setIsShowAll(!isShowAll);
    };

    const deleteProduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://gadgets-galaxy-server.vercel.app/cart/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your coffee has been deleted.",
                                "success"
                            );
                            const updatedProducts = cartData.filter(pd => pd._id !== id);
                            setCartData(updatedProducts);
                        }
                    })
                    .catch(err => console.log(err.message));
            }
        });
    };

    const showAllToggleBtn = <>
        <div className="text-center mb-10">
            <button onClick={handleIsShowAll} className="bn632-hover bn28 px-8 py-[8px]">{!isShowAll ? "See All" : "See Less"}</button>
        </div>
    </>

    const noItemsYet = <>
        <div className="text-center py-20">
            <img src="https://i.ibb.co/C7PRSC9/shopping-cart.png" alt="party" className="w-20 mb-5 inline-block" />
            <h2 className="text-3xl">Your cart is empty!</h2>
        </div>
    </>

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 my-10">
                {
                    cartData.length !== 0 && cartData.slice(0, dataLength).map(product => <div key={product?._id} className="border shadow-xl">
                        <figure className="w-full">
                            <div className="rounded-md flex items-center justify-center p-5 pb-0">
                                <img className="inline-block rounded-lg h-60 rounded-b-none" src={product?.photo} alt="product-image" />
                            </div>
                        </figure>
                        <div className="p-5 rounded-lg rounded-t-none">
                            <h4 className="font-bold text-[22px] text-[#e73c17]">{product?.productName}</h4>
                            <div className="flex justify-between mb-1">
                                <h4 className="text-[19px]">Brand: <span className="font-semibold">{product?.brand}</span></h4>
                                <h4 className="text-[19px]">Type: <span className="font-semibold">{product?.productType}</span></h4>
                            </div>
                            <div className="flex justify-between mb-2">
                                <h3 className="text-[19px]">Price: $<span className="font-semibold">{product?.price}</span></h3>
                                <h3 className="text-[19px] flex gap-1">Ratings: <span className="font-semibold">{product?.ratings}/5</span>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star bg-orange-400" />
                                    </div>
                                </h3>
                            </div>
                            <p className="mb-3">{product?.details}</p>
                            <button onClick={() => deleteProduct(product?._id)} className="bn632-hover bn28 px-[30px] py-[8px] radius-none">Delete</button>
                        </div>
                    </div>)
                }
            </div>
            {cartData.length === 0 && noItemsYet}
            {
                cartData.length > 4 && showAllToggleBtn
            }
        </div>
    );
};

export default MyCart;
