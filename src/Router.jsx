import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./sections/About";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
import PropertyDetails from "./sections/PropertyDetails";
import Services from "./sections/Services";
import Slider from "./sections/Slider";
import Layout from "./layout/layout";
import Login from "./sections/Login";
import Register from "./sections/Register";


const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular-areas" element={<PopularAreas />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/services" element={<Services />} />
        <Route path="/details" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
