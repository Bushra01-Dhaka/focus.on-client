import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/COntact";
import Features from "../../Components/Features/Features";
import Footer from "../../ReUsed/Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Features></Features>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;