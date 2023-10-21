import { useNavigate } from "react-router-dom";

const brandsData = [
    {
        "id": 1,
        "brandName": "Samsung",
        "image": "https://i.ibb.co/3rhhcMy/1562575696.jpg",
        "width": "w-[170px]"
    },
    {
        "id": 2,
        "brandName": "Lenovo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lenovo_%282015%29.svg/1200px-Lenovo_%282015%29.svg.png",
        "width": "w-36"
    },
    {
        "id": 3,
        "brandName": "Asus",
        "image": "https://i.ibb.co/X4FN84q/79183.jpg",
        "width": "w-44"
    },
    {
        "id": 4,
        "brandName": "Apple",
        "image": "https://global-uploads.webflow.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png",
        "width": "w-36"
    },
    {
        "id": 5,
        "brandName": "Microsoft",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/640px-Microsoft_icon.svg.png",
        "width": "w-16"
    },
    {
        "id": 6,
        "brandName": "Android",
        "image": "https://i.ibb.co/n06qRVZ/google-android-11-egj3.png",
        "width": "w-28"
    }
];

const Brands = () => {
    const navigate = useNavigate();

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-20">
            <div className="text-center">
                <h2 className="text-4xl font-semibold">Discover Our <span className="text-[#e73c17]">Brands</span></h2>
                <p className="text-lg mb-5">Explore our world class luxary brands</p>
            </div>

            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    brandsData.map(brand => <div key={brand.id} onClick={() => navigate(`/brand/${brand.brandName}`)} className="border cursor-pointer rounded-xl shadow-lg flex flex-col items-center justify-center p-5">
                        <img src={brand.image} className={`inline-block ${brand.width}`} alt="brand-logo" />
                        <div className="text-center">
                            <h4 className="text-4xl mt-2 font-semibold">{brand.brandName}</h4>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Brands;
