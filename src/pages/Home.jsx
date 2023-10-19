import Banner from "../components/Banner";
import Brands from "../components/Brands";
import ClientsReviews from "../components/ClientsReviews";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Brands></Brands>
            <ClientsReviews></ClientsReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
