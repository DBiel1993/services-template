const About = () => {
  return (
    <section id="about" className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About TreeAuger Pro
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Tree Auger in action"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              TreeAuger Pro has been providing top-notch tree auger services for
              over a decade. Our team of experienced professionals is dedicated
              to delivering efficient and reliable solutions for all your tree
              planting and landscaping needs.
            </p>
            <p className="text-lg">
              We take pride in our work and strive to exceed our customers'
              expectations with every project. Our state-of-the-art equipment
              and expertise ensure that your trees are planted correctly,
              promoting healthy growth and longevity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
