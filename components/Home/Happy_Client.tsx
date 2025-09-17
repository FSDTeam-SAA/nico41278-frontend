"use client";
import { Card } from "@/components/ui/card";
import { Star, ThumbsUp } from "lucide-react";
import Image from "next/image";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Cameron Williamson",
    position: "President of Sales",
    content: "Automates emails and provides great performance analytics, super efficient!",
    image: "/client1.png",
    rating: 5,
    offset: "",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Marketing Director",
    content: "Incredible tool that has transformed our email marketing strategy completely!",
    image: "/client1.png",
    rating: 5,
    offset: "md:ml-12 lg:ml-40", // Adjusted offset for tablets
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Operations Manager",
    content: "The analytics dashboard provides insights we never had before. Highly recommended!",
    image: "/client1.png",
    rating: 5,
    offset: "",
  },
];

type Testimonial = {
  id: number;
  name: string;
  position: string;
  content: string;
  image: string;
  rating: number;
  offset: string;
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const TestimonialCard = ({ testimonial, className = "" }: TestimonialCardProps) => {
  return (
    <Card
      className={`relative flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto rounded-xl bg-white shadow-[0px_34.72px_73.87px_0px_#8B8B8B] ${className}`}
    >
      <div className="flex-1 p-4 sm:p-6 md:p-6 lg:p-8 order-2 md:order-1">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4 md:mb-6">
          {/* Star Ratings */}
          <div className="flex items-center justify-center md:justify-start">
            {[...Array(testimonial.rating)].map((_, index) => (
              <Star key={index} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-[#3E66DF] text-[#3E66DF]" />
            ))}
          </div>

          {/* Testimonial Badge */}
          <div className="flex items-center justify-center md:justify-end gap-2 text-sm md:text-base text-[#202020] font-semibold">
            <div className="bg-[#5D5DFF] rounded-full p-1 flex items-center justify-center">
              <ThumbsUp className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
            </div>
            <span className="hidden md:inline">Testimonial</span>
          </div>
        </div>

        <p className="text-sm md:text-base lg:text-lg text-[#000000] font-normal mb-4 md:mb-6 text-center md:text-left max-w-md md:max-w-lg lg:max-w-none">
          {testimonial.content}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left">
          <span className="font-bold text-sm md:text-base text-[#000000]">{testimonial.name}</span>
          <span className="mx-2 hidden md:block text-gray-400">|</span>
          <span className="text-xs md:text-sm text-gray-500 mt-1 md:mt-0">{testimonial.position}</span>
        </div>
      </div>

      <div className="flex-shrink-0 order-1 md:order-2 p-4 md:p-3 lg:p-0">
        <div className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full md:rounded-none overflow-hidden">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
};

const Happy_Client = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative">
      <div className="absolute top-[480px] right-0 hidden md:block lg:block">
        <Image
          src="/Decorator2.png"
          alt="Vector Graphic"
          width={1000}
          height={1000}
          className="object-cover w-[120px] h-[240px] md:w-[140px] md:h-[280px] lg:w-[162px] lg:h-[325px]"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="text-center md:text-left mb-6 sm:mb-8 md:mb-10 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold text-[#000000] leading-tight text-center">
           What Our <span className="text-[#003DFF]"> Happy Clients</span> Say 
           
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} className={testimonial.offset} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Happy_Client;