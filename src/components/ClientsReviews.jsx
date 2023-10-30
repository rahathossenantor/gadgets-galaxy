
const reviewsData = [
    {
        "id": 1,
        "name": "Jessy",
        "description": "It is a fact that a reader will be content of a page when looking at its layout",
        "image": "https://htmldemo.net/elehaus/elehaus/assets/images/photos/client1.png",
        "ratings": <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
        </div>
    },
    {
        "id": 2,
        "name": "Marry",
        "description": "It is a fact that a reader will be content of a page when looking at its layout",
        "image": "https://htmldemo.net/elehaus/elehaus/assets/images/photos/client3.png",
        "ratings": <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star" />
            <input type="radio" name="rating-2" className="mask mask-star" />
            <input type="radio" name="rating-2" className="mask mask-star" />
            <input type="radio" name="rating-2" className="mask mask-star" defaultChecked />
            <input type="radio" name="rating-2" className="mask mask-star" />
        </div>
    },
    {
        "id": 3,
        "name": "David",
        "description": "It is a fact that a reader will be content of a page when looking at its layout",
        "image": "https://htmldemo.net/elehaus/elehaus/assets/images/photos/client2.png",
        "ratings": <div className="rating">
            <input type="radio" name="rating-3" className="mask mask-star" />
            <input type="radio" name="rating-3" className="mask mask-star" defaultChecked />
            <input type="radio" name="rating-3" className="mask mask-star" />
            <input type="radio" name="rating-3" className="mask mask-star" />
            <input type="radio" name="rating-3" className="mask mask-star" />
        </div>
    },
    {
        "id": 4,
        "name": "Marry",
        "description": "It is a fact that a reader will be content of a page when looking at its layout",
        "image": "https://htmldemo.net/elehaus/elehaus/assets/images/photos/client3.png",
        "ratings": <div className="rating">
            <input type="radio" name="rating-4" className="mask mask-star" />
            <input type="radio" name="rating-4" className="mask mask-star" />
            <input type="radio" name="rating-4" className="mask mask-star" />
            <input type="radio" name="rating-4" className="mask mask-star" />
            <input type="radio" name="rating-4" className="mask mask-star" defaultChecked />
        </div>
    }
];

const ClientsReviews = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-20">
            <div className="text-center">
                <h2 className="text-4xl font-semibold">Our Customer&apos;s <span className="text-[#e73c17]">Opinion</span></h2>
                <p className="text-lg mb-5">We respect our customer&apos;s comment</p>
            </div>

            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    reviewsData.map(review => <div key={review.id} className="border rounded-lg shadow-xl flex items-center justify-center p-5 gap-5">
                        <div className="text-center">
                            <img src={review.image} className="inline-block mb-2 w-20 h-20 rounded-full" alt="client" />
                            <div>
                                {review.ratings}
                                <h4 className="text-lg font-semibold mb-1">{review.name}</h4>
                                <p>{review.description}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ClientsReviews;
