// components/AboutMe.tsx
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="container mx-auto">
      <Image
        src="/say.png" // Replace with your image path
        alt="Vector Graphic"
        width={500}
        height={300}
        className="object-cover w-full my-28"
      />
      <section className="flex items-start gap-6 p-6  mb-12">
        <div className="flex-shrink-0">
          <Image
            src="/profile.png" // Replace with your image path
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-semibold mb-3">Hi, I’m Your Name!</h1>
          <p className="text-sm text-gray-700 mb-2">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development.Lorem ipsum is a dummy or
            placeholder text commonly used in graphic design, publishing, and
            web development.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development.Lorem ipsum is a dummy or
            placeholder text commonly used in graphic design, publishing, and
            web development.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development.Lorem ipsum is a dummy or
            placeholder text commonly used in graphic design, publishing, and
            web development.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development.Lorem ipsum is a dummy or
            placeholder text commonly used in graphic design, publishing, and
            web development.
          </p>
          <p className="text-sm text-gray-700">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development.Lorem ipsum is a dummy or
            placeholder text commonly used in graphic design, publishing, and
            web development.
          </p>
        </div>
      </section>
      <Image
        src="/say.png" // Replace with your image path
        alt="Vector Graphic"
        width={500}
        height={300}
        className="object-cover w-full my-28"
      />
    </div>
  );
};

export default AboutMe;
