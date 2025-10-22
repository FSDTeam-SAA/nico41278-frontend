"use client"
import { Card } from "@/components/ui/card"
import { Star, ThumbsUp } from "lucide-react"
import Image from "next/image"
import { motion, type Transition } from "framer-motion"

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
    offset: "md:ml-12 lg:ml-40",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    position: "President of Sales",
    content: "Automates emails and provides great performance analytics, super efficient!",
    image: "/client1.png",
    rating: 5,
    offset: "",
  },
]

type Testimonial = {
  id: number
  name: string
  position: string
  content: string
  image: string
  rating: number
  offset: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
  index: number
}

const TestimonialCard = ({ testimonial, className = "", index }: TestimonialCardProps) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // Alternate from left and right
      rotate: index % 2 === 0 ? -5 : 5,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      } as Transition,
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        y: -8,
      
      }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`relative flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto rounded-xl bg-white shadow-[0px_34.72px_73.87px_0px_#8B8B8B] ${className}`}
      >
        <div className="flex-1 p-4 sm:p-6 md:p-6 lg:p-8 order-2 md:order-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4 md:mb-6">
            {/* Star Ratings */}
            <div className="flex items-center justify-center md:justify-start">
              {[...Array(testimonial.rating)].map((_, starIndex) => (
                <motion.div
                  key={starIndex}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2 + starIndex * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <Star className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-[#3E66DF] text-[#3E66DF]" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial Badge */}
            <motion.div
              className="flex items-center justify-center md:justify-end gap-2 text-sm md:text-base text-[#202020] font-semibold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
            >
              <div className="bg-[#5D5DFF] rounded-full p-1 flex items-center justify-center">
                <ThumbsUp className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <span className="hidden md:inline">Testimonial</span>
            </motion.div>
          </div>

          <motion.p
            className="text-sm md:text-base lg:text-lg text-[#000000] font-normal mb-4 md:mb-6 text-center md:text-left max-w-md md:max-w-lg lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          >
            {testimonial.content}
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          >
            <span className="font-bold text-sm md:text-base text-[#000000]">{testimonial.name}</span>
            <span className="mx-2 hidden md:block text-gray-400">|</span>
            <span className="text-xs md:text-sm text-gray-500 mt-1 md:mt-0">{testimonial.position}</span>
          </motion.div>
        </div>

        <div className="flex-shrink-0 order-1 md:order-2 p-4 md:p-3 lg:p-0">
          <motion.div
            className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full md:rounded-none overflow-hidden"
            initial={{ opacity: 0, scale: 0.5, rotate: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.2, type: "spring" }}
          >
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}

const Happy_Client = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative">
      <div className="absolute top-[480px] right-0 hidden md:block lg:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src="/Decorator2.png"
            alt="Vector Graphic"
            width={1000}
            height={1000}
            className="object-cover w-[120px] h-[240px] md:w-[140px] md:h-[280px] lg:w-[162px] lg:h-[325px]"
          />
        </motion.div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="text-center md:text-left mb-6 sm:mb-8 md:mb-10 lg:mb-16">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold text-[#000000] leading-tight text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], type: "spring", stiffness: 100 }}
          >
            What Our <span className="text-[#003DFF]"> Happy Clients</span> Say
          </motion.h2>
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              className={testimonial.offset}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Happy_Client
