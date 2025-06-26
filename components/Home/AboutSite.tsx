const AboutSite = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
          Challenges are part of the journey...
        </h1>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center md:text-left">
            About Our Site
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development. It helps designers visualize
            the layout and typography of a project without relying on final content.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            Our site leverages modern web technologies to provide a seamless experience
            across all devices. Whether you&apos;re on a phone, tablet, or desktop, our
            content adapts to ensure readability and usability.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We are committed to delivering high-quality, accessible content that meets
            the needs of our diverse audience. Explore our site to learn more about
            our mission and offerings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSite;