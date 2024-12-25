import { Check } from "lucide-react";

const services = [
  "Tree Planting",
  "Soil Preparation",
  "Landscaping",
  "Hole Digging for Fences",
  "Garden Bed Preparation",
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Check className="text-green-500 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">
                Professional and efficient {service.toLowerCase()} services for
                your property.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
