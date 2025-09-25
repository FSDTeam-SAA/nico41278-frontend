
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
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            How you&apos;ll use <span className="text-[#003DFF]">uModel</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cardItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/70 p-6 rounded-lg shadow-sm"
                variants={cardVariants as any}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 mb-4"
                  />
                </motion.div>
                <h3 className="mb-3 font-semibold text-[#170F49]">{item.title}</h3>
                <p className="text-[#292727]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-10">
            <motion.button
              className="bg-[#44B6CA] text-white py-3 px-6 rounded-lg hover:bg-[#3799a8] transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(68, 182, 202, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Represented
            </motion.button>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            How you&apos;ll use <span className="text-[#003DFF]">Website Name</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cardItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#f0fdff] p-6 rounded-lg shadow-sm"
                variants={cardVariants as any}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 mb-4"
                  />
                </motion.div>
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
