// import React from "react";

// const Weknow = () => {
//   return (
//     <section className="relative mx-auto px-4 sm:px-6 lg:px-8 ">
//       {/* Hero background */}
//       <div
//         style={{
//           backgroundImage: "url('/amit.png')",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//         className="text-center w-full min-h-[calc(100vh-200px)] flex flex-col justify-center items-center "
//       >
//         {/* Heading */}
//         <div className="mb-10 px-4">
//           <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-black">
//             We know,
//           </h2>
//           <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-black">
//             breaking in isn&apos;t easy...
//           </h2>
//         </div>

//         {/* Content */}
//         <div className="container mx-auto max-w-4xl space-y-12 text-left sm:text-center">
//           <p className="text-lg sm:text-xl lg:text-2xl font-medium text-black !leading-[150%]">
//             Finding a legitimate modeling agency can be confusing,
//             time-consuming, and frustrating, especially when you&apos;re just starting
//             out. Most agencies don&apos;t advertise how to submit portfolios and
//             getting a response can feel impossible. That&apos;s where we come in. We
//             make sure your photos land directly in front of real agents who are
//             actually looking for new talent.
//           </p>

//           <p className="text-base sm:text-lg lg:text-xl font-medium text-black !leading-[150%]">
//             Modeling is an incredibly hush-hush community, even more so than
//             acting. It&apos;s a tight-knit, competitive world where connections often
//             mean everything. If you don&apos;t know someone, it can feel like doors
//             stay firmly closed. Agencies and scouts rely heavily on trusted
//             referrals, and without the right contacts, it&apos;s easy to get
//             overlooked no matter how talented you are. That&apos;s why having direct
//             access to vetted agencies and insider knowledge is a game-changer; it
//             helps level the playing field and gets you noticed without relying
//             solely on who you already know. We&apos;re your gateway to that solution,
//             ready to open doors and connect you with the right people, so you can
//             take control and start your career on your terms.
//           </p> 
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Weknow;


"use client"
import { motion } from "framer-motion"

const Weknow = () => {
  return (
    <section className="relative mx-auto px-4 sm:px-6 lg:px-8 ">
      {/* Hero background */}
      <div
        style={{
          backgroundImage: "url('/amit.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="text-center w-full min-h-[calc(100vh-200px)] flex flex-col justify-center items-center "
      >
        {/* Heading */}
        <div className="mb-10 px-4">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-black"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We know,
          </motion.h2>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-black"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            breaking in isn&apos;t easy...
          </motion.h2>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-4xl space-y-12 text-left sm:text-center">
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-medium text-black !leading-[150%]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Finding a legitimate modeling agency can be confusing, time-consuming, and frustrating, especially when
            you&apos;re just starting out. Most agencies don&apos;t advertise how to submit portfolios and getting a
            response can feel impossible. That&apos;s where we come in. We make sure your photos land directly in front
            of real agents who are actually looking for new talent.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg lg:text-xl font-medium text-black !leading-[150%]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Modeling is an incredibly hush-hush community, even more so than acting. It&apos;s a tight-knit, competitive
            world where connections often mean everything. If you don&apos;t know someone, it can feel like doors stay
            firmly closed. Agencies and scouts rely heavily on trusted referrals, and without the right contacts,
            it&apos;s easy to get overlooked no matter how talented you are. That&apos;s why having direct access to
            vetted agencies and insider knowledge is a game-changer; it helps level the playing field and gets you
            noticed without relying solely on who you already know. We&apos;re your gateway to that solution, ready to
            open doors and connect you with the right people, so you can take control and start your career on your
            terms.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Weknow

