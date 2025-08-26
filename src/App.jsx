import "./App.css";
import { FeatureSection } from "./components/FeatureSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navebar";
import Pricing from "./components/Pricing";
import { Workflow } from "./components/Workflow";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeatureSection />
            <Workflow />
            <Pricing />
        </>
    );
}

export default App;
