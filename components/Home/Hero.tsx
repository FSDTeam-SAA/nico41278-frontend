"use client";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="text-center min-h-[calc(100vh-200.97px)] flex flex-col justify-center items-center py-8 sm:py-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-bold mx-auto text-center">
          Connect with <span className="text-dashprimary">Real Talent</span>{" "}
          Agents Now
        </h1>
        <p className="my-3 text-gray-500 max-w-sm sm:max-w-md lg:max-w-lg text-sm sm:text-base md:text-lg text-center mx-auto">
          Get discovered by the right people. Get represented by professionals
          who believe in your talent. Get booked for real opportunities that
          move your career forward.
        </p>
        <button className="rounded-sm bg-[#44b6ca] py-2 px-4 sm:px-5 text-white text-sm sm:text-base">
          Get Represented
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between max-w-[900px] mx-auto -mt-12 sm:-mt-16 lg:-mt-20 gap-4 sm:gap-0">
        <Image
          src="/two-image.png"
          alt="Hero Image"
          width={80}
          height={20}
          className="rotate-[70deg] w-16 sm:w-20 lg:w-[120px] hidden md:block"
        />

        <div className="bg-[#6bd1e3] px-4 sm:px-6 lg:px-15 py-4 rounded-lg flex flex-col sm:flex-row gap-3 sm:gap-5  sm:mt-8 w-full sm:w-auto">
          <div className="flex flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12">
            <div className="flex -space-x-1 sm:-space-x-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                <AvatarImage
                  src="https://github.com/leerob.png"
                  alt="@leerob"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                <AvatarImage
                  src="https://github.com/leerob.png"
                  alt="@leerob"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <p className="flex text-xl sm:text-2xl lg:text-3xl text-yellow-500 gap-1 sm:gap-2 justify-center sm:justify-start">******</p>
            <p className="text-white text-xs sm:text-sm mt-1 sm:mt-2">5,000+ users</p>
          </div>
        </div>

        <Image
          src="/two-image.png"
          alt="Hero Image"
          width={80}
          height={20}
          className="w-16 sm:w-20 lg:w-[120px] hidden md:block"
        />
      </div>
    </div>
  );
};

export default Hero;