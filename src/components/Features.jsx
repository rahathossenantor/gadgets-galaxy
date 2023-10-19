
const featuresData = [
    {
        "id": 1,
        "title": "SUPPORT 24/7",
        "description": "Delicated 24/7 Support",
        "image": "https://htmldemo.net/elehaus/elehaus/assets/images/icons/1.png"
    },
    {
        "id": 2,
        "title": "EASY RETURNS",
        "description": "Shop With Confidence",
        "image": "https://htmldemo.net/elehaus/elehaus/assets/images/icons/2.png"
    },
    {
        "id": 3,
        "title": "CARD PAYMENT",
        "description": "12 Months Installments",
        "image": "https://htmldemo.net/elehaus/elehaus/assets/images/icons/3.png"
    },
    {
        "id": 4,
        "title": "FREE SHIPPING",
        "description": "Capped at $50 per order",
        "image": "https://htmldemo.net/elehaus/elehaus/assets/images/icons/4.png"
    }
];

const Features = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-20">
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    featuresData.map((data) => <div key={data.id} className="border rounded-xl shadow-lg flex items-center justify-center p-5 gap-5">
                        <img src={data.image} className="inline-block mb-2 w-12" alt="features-icon" />
                        <div>
                            <h4 className="text-lg font-semibold">{data.title}</h4>
                            <p>{data.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;
