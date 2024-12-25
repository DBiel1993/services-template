import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/service";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
