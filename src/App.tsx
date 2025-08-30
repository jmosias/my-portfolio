import { type Component } from "solid-js";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";

const App: Component = () => {
  return (
    <div class="flex justify-center">
      <div class="flex max-w-7xl flex-col gap-8 sm:gap-12 lg:gap-24">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default App;
