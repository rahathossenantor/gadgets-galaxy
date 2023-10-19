
const bannerContent = <>
    <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col flex-col-reverse">
        <div className="2xl:w-3/6 xl:w-3/6 lg:w-full md:w-full w-full text-left flex items-center">
            <div className="2xl:py-0 xl:py-0 lg:pt-24 lg:pb-0 md:pt-24 md:pb-0 pb-16">
                <h2 className="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-5xl text-5xl font-semibold text-white mb-5">Small & thin smart watch <span className="text-[#e73c17]">4Th</span> gen</h2>
                {/* <button className="py-[10px] uppercase px-5 bg-white text-black hover:bg-[#e73c17] hover:text-white">Shop now</button> */}
                <a href="/"><button className="bn632-hover bn19 bn200 py-[10px] uppercase px-5">Shop now</button></a>
            </div>
        </div>
        <div className="2xl:w-3/6 xl:w-3/6 lg:w-full md:w-full w-full flex items-center justify-center spesial-bg 2xl:py-16 xl:py-16 lg:pb-16 lg:pt-0 md:pb-16 md:pt-0 py-16">
            <img className="inline-block" src="https://htmldemo.net/elehaus/elehaus/assets/images/slider/slider1.png" alt="banner-image" />
        </div>
    </div>
</>

const Banner = () => {
    return (
        <section id="banner" className="bg-black">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 text-center">

                {/* slides */}
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        {bannerContent}
                        <div className="absolute 2xl:flex xl:flex lg:flex md:flex hidden justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        {bannerContent}
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        {bannerContent}
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        {bannerContent}
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;
