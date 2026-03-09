import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import CaseStudy from "./components/CaseStudy";
import Tools from "./components/Tools";
import About from "./components/About";
import CalendlyEmbed from "./components/CalendlyEmbed";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <Services />
        <CaseStudy />
        <Tools />
        <About />
        {/* TODO: Re-enable once real testimonials are collected */}
        {/* <Testimonials /> */}
        <CalendlyEmbed />
      </main>
      <Footer />
    </>
  );
}
