import "./home.css";
import { DealsOfTheDay } from "../components/homePage/DealsOfTheDay";
import { Advertisements } from "../components/homePage/Advertisements";
import { Arrivals } from "../components/homePage/Arrivals";

const Home = () => {
  return (
    <>
      
      <DealsOfTheDay />
      <Advertisements />
      <Arrivals />

    </>
  );
};

export { Home };
