import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Image
        src="/say.png"
        alt="Vector Graphic"
        width={500}
        height={300}
        className="object-cover w-full  mx-auto"
      />
      <section className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-4 sm:p-6 mb-8 sm:mb-12">
        <div className="flex-shrink-0">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
          />
        </div>
        <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">Hi, I’m Your Name!</h1>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-2">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development. Lorem ipsum is a dummy or
            placeholder text commonly used in graphic design, publishing, and
            web development.
          </p>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-2">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development. Lorem ipsum is a dummy or
            placeholder text commonly used in graphic design, publishing, and
            web development.
          </p>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-2">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development. Lorem ipsum is a dummy or
            placeholder text commonly used in graphic design, publishing, and
            web development.
          </p>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-2">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development. Lorem ipsum is a dummy or
            placeholder text commonly used in graphic design, publishing, and
            web development.
          </p>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development. Lorem ipsum is a dummy or
            placeholder text commonly used in graphic design, publishing, and
            web development.
          </p>
        </div>
      </section>
      <Image
        src="/say.png"
        alt="Vector Graphic"
        width={500}
        height={300}
        className="object-cover w-full mx-auto"
      />
    </div>
  );
};

export default AboutMe;