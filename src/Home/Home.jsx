import About from "../NavItems/About/About";
import Services from "../NavItems/Services/Services";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <About></About>
           <Services></Services>
        </div>
    );
};

export default Home;