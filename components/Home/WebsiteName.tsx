/* eslint-disable */
"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const WebsiteName = () => {
  const cardItems = [
    {
      title: "Manage and customize your lists.",
      description: "Submit to your full agent list, only SAG-franchised agents, or a select few — the choice is yours.",
      image: "/Layer_1.png",
    },
    {
      title: "Track and manage submissions easily.",
      description: "Stay organized by monitoring agent responses and keeping your submissions in one place.",
      image: "/Layer_3.png",
    },
    {
      title: "Get insights that matter.",
      description: "Understand which agents engage with your profile to refine your strategy.",
      image: "/Layer_2.png",
    },
    {
      title: "Connect with trusted agencies.",
      description: "Our vetted network ensures your portfolio reaches the right people.",
      image: "/Layer_4.png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      y: 50,
      rotate: index % 2 === 0 ? -8 : 8,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <div className="bg-[#FCF4E4] py-16">
      <div className="container mx-auto px-4">
        {/* Section 1 */}
        <section className="mb-20">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
            }}
          >
            How you&apos;ll use <span className="text-[#003DFF]">uModel</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {cardItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                className="bg-white/70 p-6 rounded-lg shadow-sm"
                variants={cardVariants as any}
                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Image (animation removed) */}
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-4"
                />

                <h3 className="mb-3 font-semibold text-[#170F49]">{item.title}</h3>
                <p className="text-[#292727]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-10">
            <motion.button
              className="bg-[#44B6CA] text-white py-3 px-6 rounded-lg hover:bg-[#3799a8] transition"
              whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
            >
              Get Represented
            </motion.button>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center mb-10"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            How you&apos;ll use <span className="text-[#003DFF]">Website Name</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {cardItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                className="bg-[#f0fdff] p-6 rounded-lg shadow-sm"
                variants={cardVariants as any}
                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Image (animation removed) */}
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-4"
                />

                <h3 className="mb-3 font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default WebsiteName
