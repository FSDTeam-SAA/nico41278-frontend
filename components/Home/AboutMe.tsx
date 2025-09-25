// import Image from "next/image";

// const AboutMe = () => {
//   return (
//     <div className="bg-[#FCF4E4] pt-[100px]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <section className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-4 sm:p-6 ">
//           <div className="flex-shrink-0 ">
//             <Image
//               src="/profile.png"
//               alt="Profile Picture"
//               width={100}
//               height={100}
//               className="rounded-full w-24 h-24 sm:w-28 sm:h-28 lg:w-[280px] lg:h-[280px]"
//             />
//           </div>
//           <div className="space-y-3 sm:space-y-4 text-center sm:text-left py-[136px]">
//             <h1 className="text-lg sm:text-xl lg:text-[32px] text-[#000000] font-semibold mb-2 sm:mb-3">
//               Why We Started This
//             </h1>
//           <p className="text-xs sm:text-sm lg:text-[24px] text-black mb-2 pt-[56px] font-normal !leading-[150%]">
//               As a duo (one a professional actor, the other an experienced
//               model) we bring extensive industry experience and have been where
//               you are: full of potential but unsure where to start. We
//               understand just how challenging it is to get your foot in the door
//               and have both spent countless hours reaching out to agencies,
//               sorting through unreliable contacts, and dead ends. It’s
//               frustrating, time-consuming, and often overwhelming. That’s why we
//               created an extensive, carefully researched list of real, trusted
//               agencies, built from personal experience, industry connections,
//               and testimonials from friends in the business. This isn’t just a
//               random database; it’s a toolkit designed to cut through the noise
//               and help you get noticed by the right people. We want to help new
//               faces get in front of trusted agents without the stress and
//               guesswork. You focus on showing up, we’ll handle the rest.
//             </p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;


"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const AboutMe = () => {
  return (
    <div className="bg-[#FCF4E4] pt-[100px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-4 sm:p-6 ">
          <div className="flex-shrink-0 ">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src="/profile.png"
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full w-24 h-24 sm:w-28 sm:h-28 lg:w-[280px] lg:h-[280px]"
              />
            </motion.div>
          </div>
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left py-[136px]">
            <motion.h1
              className="text-lg sm:text-xl lg:text-[32px] text-[#000000] font-semibold mb-2 sm:mb-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Why We Started This
            </motion.h1>

            <motion.p
              className="text-xs sm:text-sm lg:text-[24px] text-black mb-2 pt-[56px] font-normal !leading-[150%]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              As a duo (one a professional actor, the other an experienced model) we bring extensive industry experience
              and have been where you are: full of potential but unsure where to start. We understand just how
              challenging it is to get your foot in the door and have both spent countless hours reaching out to
              agencies, sorting through unreliable contacts, and dead ends. It's frustrating, time-consuming, and often
              overwhelming. That's why we created an extensive, carefully researched list of real, trusted agencies,
              built from personal experience, industry connections, and testimonials from friends in the business. This
              isn't just a random database; it's a toolkit designed to cut through the noise and help you get noticed by
              the right people. We want to help new faces get in front of trusted agents without the stress and
              guesswork. You focus on showing up, we'll handle the rest.
            </motion.p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutMe
