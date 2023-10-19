
const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-20">
                {/* news letter */}
                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5">
                    <div className="flex items-center gap-3">
                        <img src="https://htmldemo.net/elehaus/elehaus/assets/images/icons/5.png" alt="icon" />
                        <div className="text-white">
                            <h4 className="text-2xl">Newsletter & Get Updates</h4>
                            <p>Sign up for our newsletter to get up-to-date from us</p>
                        </div>
                    </div>
                    <div className="2xl:text-left xl:text-left lg:text-left md:text-left text-center">
                        <input type="email" placeholder="Enter your email" className="input 2xl:w-4/6 xl:w-4/6 lg:w-4/6 md:w-4/6 w-full inline-block" />
                        <button className="bn632-hover bn19 no-radius px-[30px] py-[12px]">Send Mail</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;