import "./home.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { DealsOfTheDay } from "../components/homePage/DealsOfTheDay";
import { Advertisements } from "../components/homePage/Advertisements";
import { Arrivals } from "../components/homePage/Arrivals";


const Home = () => {

  return (
    <>
      <Navbar />
      <DealsOfTheDay />
      <Advertisements />
      <Arrivals />
      <Footer />
    </>
  );
};

export { Home };
