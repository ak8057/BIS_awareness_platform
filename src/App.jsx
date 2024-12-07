import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import AnimatedCursor from "react-animated-cursor";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Faq from "./sections/Faq";
import Experience from "./components/Experience";
import StarsCanvas from "./components/canvas/Stars";
import ImageSection from "./components/ImageSection";
import ScrollingImages from "./components/ScrollingImages";
import Slider from "./components/Slider";
import GsapSlider from "./components/GsapSlider";
import GsapHeader from "./components/GsapHeader";
import { Example } from "./components/MouseImageTrail";
import FuzzyOverlayExample from "./components/FuzzyOverlay";
// import ExampleBubbleText from "./components/BubbleText";
import { AuroraHero } from "./components/AuroraHero";
import SuffleHero from "./components/SuffleHero";
import { SwipeCarousel } from "./components/SwipeCarousel";
import ParticleRing from "./components/ParticleRing";
import VerticalAccordion from "./components/VerticalAccordion";
import { HoverImageLinks } from "./components/HoverImageLinks";
// import { VelocityText } from "./components/VelocityText";
// import HorizontalScrollCarousel from "./components/HorizontalScrollCarousel";
import quiz from "./pages/quiz"; // Quiz page for routing

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <AnimatedCursor
        innerSize={12}
        outerSize={40}
        color="0, 50, 150" // Dark blue shade
        outerAlpha={0.5} // Slightly more visible outer cursor
        innerScale={0.8} // Subtle scaling for the inner cursor
        outerScale={2} // Slightly larger scaling for the outer cursor
        trailingSpeed={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        hasBlendMode={true} // Enables blending for a modern look
        outerStyle={{
          mixBlendMode: "exclusion", // Ensures the cursor contrasts with the background
        }}
      />
      <NavBar />
      <Hero />
      <About />
      <Features />
      {/* <HorizontalScrollCarousel /> */}
      <div className="relative z-0  bg-primary">
        <ScrollingImages />
        <ImageSection />
        {/* <StarsCanvas /> */}
      </div>
      {/* <Slider type="slider1" /> */}
      <div className="relative z-0  bg-primary">
        <Experience />
        {/* <StarsCanvas /> */}
      </div>
      <AuroraHero />
      <Faq />
      <div className="relative z-0  bg-black">
        <GsapHeader />
        <GsapSlider />
        <Slider type="slider2" reverse />
      </div>
      <Story />
      <Example />
      <FuzzyOverlayExample />
      {/* <ExampleBubbleText /> */}
      {/* <VelocityText/> */}
      <SuffleHero />
      <SwipeCarousel />
      <VerticalAccordion />
      <ParticleRing />
      <Contact />
      <HoverImageLinks />
      <Footer />
    </main>





  );
}

export default App;
