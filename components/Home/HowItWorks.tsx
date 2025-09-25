
"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="container mx-auto mb-20 px-4">
      <motion.h1
        className="text-center font-bold text-4xl md:text-5xl mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        How it works
      </motion.h1>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* step 1 */}
        <motion.div variants={stepVariants as any}>
          <div className="flex flex-col md:flex-row justify-between relative  ">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <motion.div variants={imageVariants as any}>
                <Image src={"/1.png"} alt="1" width={1000} height={1000} className="h-32 w-32" />
              </motion.div>

              <div className="  pb-3 h-auto md:h-[150px] w-full lg:w-[262px] ">
                <h1 className="text-[#311FD4]">Step One</h1>
                <h2 className="font-semibold my-2 text-[#000000] text-[25px]">View and edit list</h2>
                <p className="border-b-8 border-[#311FD4] rounded-lg text-[#000000]">
                  Get instant access to our entire vetted list of LA, NY, or ATL agent emails and customize them as you
                  see fit.
                </p>
              </div>
            </div>

            <div className=" pr-10 static lg:absolute top-7 right-0 ">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                  src={"/1-arrow.png"}
                  alt="1"
                  width={1000}
                  height={1000}
                  className="h-[150px] md:h-[191px] w-auto  md:w-[501px]  "
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-5 lg:mt-[60px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image src={"/step-1.png"} alt="step-1" width={1200} height={1000} className="mx-auto w-full h-auto" />
            </motion.div>
          </div>
        </motion.div>

        {/* step 2 */}
        <motion.div className="mt-16 rllative" variants={stepVariants as any}>
          <div className="flex flex-col md:flex-row justify-end relative ">
            <div className=" pl-10 static lg:absolute top-7 left-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                  src={"/2-arrow.png"}
                  alt="2"
                  width={1000}
                  height={1000}
                  className="h-[150px] md:h-[191px] w-auto  md:w-[501px]"
                />
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 items-center">
              <motion.div variants={imageVariants as any}>
                <Image src={"/2.png"} alt="2" width={1000} height={1000} className="h-32 w-32" />
              </motion.div>

              <div className="pb-3 h-auto md:h-[150px] w-full lg:w-[262px]">
                <h1 className="text-[#4733FF]">Step Two</h1>
                <h2 className="font-semibold my-2 text-[#000000] text-[25px]">Compose submission</h2>
                <p className="border-b-8 border-[#4733FF] rounded-lg">
                  Use our custom-built composer to attach your headshoots and draft your personalized cover letter.
                  Gmail required.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[60px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image src={"/step-2.png"} alt="step-2" width={1200} height={1000} className="mx-auto w-full h-auto" />
            </motion.div>
          </div>
        </motion.div>

        {/* step 3 */}
        <motion.div className="mt-16 relative" variants={stepVariants as any}>
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <motion.div variants={imageVariants as any}>
                <Image src={"/3.png"} alt="3" width={1000} height={1000} className="h-32 w-32" />
              </motion.div>

              <div className="pb-3 h-auto md:h-[150px] w-full lg:w-[262px]">
                <h1 className="text-[#4733FF]">Step Three</h1>
                <h2 className="font-semibold my-2 text-[#000000] text-[25px]">Send and track</h2>
                <p className="border-b-8 border-[#311FD4] rounded-lg text-[#000000]">
                  Send your individually addressed emails all at once and track every interaction with a click of a
                  button.
                </p>
              </div>
            </div>

            <div className=" pr-10 static lg:absolute top-7 right-0">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                  src={"/1-arrow.png"}
                  alt="3-arrow"
                  width={1000}
                  height={1000}
                  className="h-[150px] md:h-[191px] w-auto  md:w-[501px] "
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-[64px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image src={"/step-3.png"} alt="step-3" width={1200} height={1000} className="mx-auto w-full h-auto" />
            </motion.div>
          </div>
        </motion.div>

        {/* step 4 */}
        <motion.div className="mt-16" variants={stepVariants as any}>
          <div className="flex flex-col md:flex-row justify-end relative">
            <div className="pl-10 static lg:absolute top-7 left-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                  src={"/2-arrow.png"}
                  alt="4-arrow"
                  width={1000}
                  height={1000}
                  className="h-[150px] md:h-[191px] w-auto  md:w-[501px] "
                />
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row gap-10  items-center">
              <motion.div variants={imageVariants as any}>
                <Image src={"/4.png"} alt="4" width={1000} height={1000} className="h-32 w-32" />
              </motion.div>

              <div className=" pb-3 h-auto md:h-[150px] w-full lg:w-[262px]">
                <h1 className="text-[#311FD4]">Step Four</h1>
                <h2 className="font-semibold my-2 text-[#000000] text-[25px]">Rinse and repeat</h2>
                <p className="border-b-8 border-[#311FD4] rounded-lg text-[#000000]">
                  Get up to 3 full submission attempts for each list purchased with our plus bundle. *Allow one month
                  between submissions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[64px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image src={"/step-4.png"} alt="step-4" width={1200} height={1000} className="mx-auto w-full h-auto" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HowItWorks
