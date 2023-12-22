import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/COntact";
import Features from "../../Components/Features/Features";
import OurClients from "../../Components/OurClients/OurClients";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Features></Features>
           <Contact></Contact>
           <OurClients></OurClients>
        </div>
    );
};

export default Home;