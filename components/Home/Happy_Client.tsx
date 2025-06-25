"use client"
import { Card } from "@/components/ui/card"
import { Star, ThumbsUp } from "lucide-react"
import Image from "next/image"

// Sample testimonial data - you can replace with your actual data
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
    offset: "md:ml-40",
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
]

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
      className={`relative flex flex-col lg:flex-row items-center w-full max-w-5xl mx-auto rounded-xl bg-white shadow-[0_-4px_20px_0_#9EE6F3,0_4px_20px_0_#9EE6F3] ${className}`}
    >
      <div className="flex-1 p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
          {/* Star Ratings */}
          <div className="flex items-center justify-center sm:justify-start">
            {[...Array(testimonial.rating)].map((_, index) => (
              <Star key={index} className="w-5 h-5 sm:w-6 sm:h-6 fill-[#3E66DF] text-[#3E66DF]" />
            ))}
          </div>

          {/* Testimonial Badge */}
          <div className="flex items-center justify-center sm:justify-end gap-2 text-sm sm:text-base text-[#202020] font-semibold">
            <div className="bg-[#5D5DFF] rounded-full p-1 flex items-center justify-center">
              <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="hidden sm:inline">Testimonial</span>
          </div>
        </div>

        <p className="text-sm sm:text-base lg:text-lg text-[#000000] font-normal mb-6 text-center lg:text-left max-w-md lg:max-w-none">
          {testimonial.content}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start text-center lg:text-left">
          <span className="font-bold text-sm sm:text-base text-[#000000]">{testimonial.name}</span>
          <span className="mx-2 hidden sm:block text-gray-400">|</span>
          <span className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">{testimonial.position}</span>
        </div>
      </div>

      <div className="flex-shrink-0 order-1 lg:order-2 p-4 lg:p-0">
        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full lg:rounded-none overflow-hidden">
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
  )
}

const Happy_Client = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#000000] leading-tight">
            What our happy <br className="hidden sm:block lg:hidden" />
            client say
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} className={testimonial.offset} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Happy_Client
