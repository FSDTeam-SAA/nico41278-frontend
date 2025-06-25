// components/AboutMe.tsx
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="flex items-start gap-6 p-6 container mx-auto mb-12">
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
          design, publishing, and web development.Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development.
        </p>
        <p className="text-sm text-gray-700 mb-2">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development.Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development.
        </p>
        <p className="text-sm text-gray-700 mb-2">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development.Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development.
        </p>
        <p className="text-sm text-gray-700 mb-2">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development.Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development.
        </p>
        <p className="text-sm text-gray-700">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development.Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
