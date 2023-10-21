import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ product }) => {

    return (
        <div className="border shadow-xl">
            <figure className="w-full">
                <div className="rounded-md flex items-center justify-center p-5 pb-0">
                    <img className="inline-block rounded-lg h-60 rounded-b-none" src={product.photo} alt="product-image" />
                </div>
            </figure>
            <div className="p-5 rounded-lg rounded-t-none">
                <h4 className="font-bold text-[22px] text-[#e73c17]">{product.productName}</h4>
                <div className="flex justify-between mb-1">
                    <h4 className="text-[19px]">Brand: <span className="font-semibold">{product.brand}</span></h4>
                    <h4 className="text-[19px]">Type: <span className="font-semibold">{product.productType}</span></h4>
                </div>
                <div className="flex justify-between mb-2">
                    <h3 className="text-[19px]">Price: $<span className="font-semibold">{product.price}</span></h3>
                    <h3 className="text-[19px] flex gap-1">Ratings: <span className="font-semibold">{product.ratings}/5</span>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star bg-orange-400" defaultChecked />
                        </div>
                    </h3>
                </div>
                <p className="mb-3">{product.details}</p>
                <div className="flex gap-5">
                    <Link to={`/product-details/${product._id}`}><button className="bn632-hover bn28 px-[30px] py-[8px] radius-none">Details</button></Link>
                    <Link to={`/product/${product._id}`}><button className="bn632-hover bn28 px-[30px] py-[8px] radius-none">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;
