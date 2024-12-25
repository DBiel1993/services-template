import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="bg-green-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Professional Tree Auger Services
        </h1>
        <p className="text-xl mb-8">
          Efficient and reliable tree planting solutions for your landscaping
          needs
        </p>
        <Button size="lg">
          <a href="#contact">Get a Quote</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
