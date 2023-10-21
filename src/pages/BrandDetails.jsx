import { useLoaderData, useParams } from "react-router-dom";
import Product from "../components/Product";

const BrandDetails = () => {
    const products = useLoaderData();
    const { brandName } = useParams();

    const slidesData = {
        "apple": [
            {
                "image": "https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FIphone-15-Pro-Max-Web-Slider-2722.jpg&w=1080&q=75"
            },
            {
                "image": "https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FAirPods-Pro-2nd-Gen-Type-C-Top-Banner-1814.jpg&w=640&q=75"
            },
            {
                "image": "https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FApple-Watch-Series-9-Top-Banner-9485.jpg&w=640&q=75"
            }
        ],
        "asus": [
            {
                "image": "https://i.ibb.co/KjgMPHd/ugk1t8gp8x200n4b-0-0-desktop-0-1-X.jpg"
            },
            {
                "image": "https://i.ibb.co/VNqbD9b/rdyoxrghznwj7jz9-0-0-desktop-0-1-X.jpg"
            },
            {
                "image": "https://i.ibb.co/T20LLn5/gawgilfk27je5fa0-0-0-desktop-0-1-X.jpg"
            }
        ],
        "android": [
            {
                "image": "https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FPixel-8-%26-8-Pro-Slider-(1)-4701.jpg&w=1080&q=75"
            },
            {
                "image": "https://i.ibb.co/LxrdjhM/RE50-MMd-back-view-sapphire-VP5-1920x1080.jpg"
            },
            {
                "image": "https://i.ibb.co/CtZLdgJ/Google-6570.jpg"
            }
        ],
        "lenovo": [
            {
                "image": "https://i.ibb.co/HBhhcXq/Screenshot-2023-10-20-210926.png"
            },
            {
                "image": "https://i.ibb.co/2SGB65D/Screenshot-2023-10-20-211114.png"
            },
            {
                "image": "https://i.ibb.co/x6jVbJz/Screenshot-2023-10-20-211029.png"
            }
        ],
        "microsoft": [
            {
                "image": "https://i.ibb.co/y5bNtQx/Highlight-Surface-Pro-9-Platinum-FY24-HOL-VP5-1920x600.jpg"
            },
            {
                "image": "https://i.ibb.co/LxrdjhM/RE50-MMd-back-view-sapphire-VP5-1920x1080.jpg"
            },
            {
                "image": "https://i.ibb.co/JvLH71B/Highlight-Surface-Laptop-Studio-2-FY24-HOL-VP5-1596x600.jpg"
            }
        ],
        "samsung": [
            {
                "image": "https://images.samsung.com/is/image/samsung/assets/us/home/10182023/HP-FT03-KV-Z-Fold5-lifestyle-1440x640-D.jpeg?imwidth=1366"
            },
            {
                "image": "https://images.samsung.com/is/image/samsung/assets/us/home/10112023/HP-FT03-KV-S23-Ultra-1440x640-D.jpeg?imwidth=1366"
            },
            {
                "image": "https://images.samsung.com/is/image/samsung/assets/us/home/10132023/Display_ProjectEliasKV.jpg?imwidth=1366"
            }
        ]
    };
    let currentBrand = [];

    for (const brand in slidesData) {
        if (brand === brandName.toLocaleLowerCase()) {
            currentBrand = slidesData[brand];
        }
    }

    const noDataFound = <>
        <div className="text-center mt-10 mb-16">
            <img className="inline-block w-20" src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" alt="no-data-found" />
            <div className="text-4xl">No products found!</div>
        </div>
    </>

    return (
        <div>
            {/* slides */}
            <div className="carousel w-full" >
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={currentBrand[0]?.image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={currentBrand[1]?.image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={currentBrand[2]?.image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div >

            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
                {/* products */}
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 my-10">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
            {!products.length ? noDataFound : ""}
        </div>
    );
};

export default BrandDetails;
