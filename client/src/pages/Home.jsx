import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Feature from "../components/Feature";
import PopularMenu from "../components/PopularMenu";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="container mx-auto">
                <Category></Category>
                <PopularMenu></PopularMenu>
                <Feature></Feature>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;