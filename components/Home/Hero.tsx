"use client";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="text-center min-h-[calc(100vh-90.97px)] flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl font-bold max-w-xl mx-auto text-center">
          Connect with <span className="text-color-primary">Real Talent</span>{" "}
          Agents Now
        </h1>
        <p className="my-3 text-gray-500 max-w-lg text-center mx-auto">
          Get discovered by the right people. Get represented by professionals
          who believe in your talent. Get booked for real opportunities that
          move your career forward.
        </p>
        <button className="rounded-sm bg-color-primary py-2 px-5 text-white">
          Get Represented
        </button>
      </div>

      <div className="flex items-center justify-between max-w-[900px] mx-auto -mt-20">
        <Image
          src="/two-image.png"
          alt="Hero Image"
          width={120}
          height={20}
          className="rotate-[70deg]"
        />

        <div className="bg-[#6bd1e3] px-15 py-4 rounded-lg flex gap-5">
          <div className="flex flex-row items-center gap-12">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/leerob.png"
                  alt="@leerob"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/leerob.png"
                  alt="@leerob"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="">
            <p>******</p>
            <p className="text-white text-sm mt-2">5,000+ users</p>
          </div>
        </div>

        <Image
          src="/two-image.png"
          alt="Hero Image"
          width={120}
          height={20}
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;
