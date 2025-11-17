import "./App.css";
import Hero from "./components/hero/Hero";
import HowITWORKS from "./components/howITWORKS/HowITWORKS";
import JoinUsToday from "./components/joinUsToday/JoinUsToday";
import PeopleSays from "./components/peopleSays/PeopleSays";
import Products from "./components/products/Products";
import QualityToProtection from "./components/qualityToProtection/QualityToProtection";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";

function App() {
  return (
    <section className="space-y-12 md:space-y-16">
      <Hero />
      <Products />
      <WhyChooseUs />
      <QualityToProtection />
      <HowITWORKS />
      <PeopleSays />
      <JoinUsToday />
    </section>
  );
}

export default App;
