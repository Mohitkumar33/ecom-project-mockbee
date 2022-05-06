import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export { App };
