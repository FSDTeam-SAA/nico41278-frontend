
"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function Faq() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80,
      rotate: index % 2 === 0 ? -3 : 3,
    }),
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const faqItems = [
    {
      value: "item-1",
      question: "What is your favorite template from BRIX Templates?",
      answer: "This is placeholder content for the first FAQ item.",
    },
    {
      value: "item-2",
      question: "What is your favorite template from BRIX Templates?",
      answer: "This is placeholder content for the second FAQ item.",
    },
    {
      value: "item-3",
      question: "What is your favorite template from BRIX Templates?",
      answer: "This is placeholder content for the third FAQ item.",
    },
    {
      value: "item-4",
      question: "What is your favorite template from BRIX Templates?",
      answer: "This is placeholder content for the fourth FAQ item.",
    },
    {
      value: "item-5",
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Webflow is a powerful visual development platform that allows designers to build fully responsive websites without writing a single line of code. It combines the flexibility of code with the simplicity of a visual editor, empowering creators to bring their ideas to life faster and more efficiently than ever before.",
    },
  ]

  return (
    <div className="mb-20 sm:mb-28 lg:mb-32 relative px-4 sm:px-6 lg:px-0">
      <div className="container mx-auto relative z-10">
        {/* FAQ Title */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-gray-900 leading-snug"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", type: "spring", stiffness: 100 }}
        >
          FAQ&apos;s
        </motion.h1>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.value}
                custom={index}
                variants={itemVariants as any}
                whileHover={{
                  scale: 1.02,
                  x: index % 2 === 0 ? 5 : -5,
                  boxShadow: "0 10px 25px rgba(49, 31, 212, 0.15)",
                }}
                transition={{ duration: 0.2 }}
              >
                <AccordionItem
                  value={item.value}
                  className="bg-[#F8F8F8] rounded-lg border border-gray-200 px-4 sm:px-6 data-[state=open]:border-l-4 data-[state=open]:border-l-[#311FD4] data-[state=open]:bg-[linear-gradient(259.88deg,#FFFFFF_-29.31%,#F4F5FF_60.8%)]"
                >
                  <AccordionTrigger className="text-left !text-sm sm:!text-sm lg:!text-lg font-semibold text-[#170F49] hover:no-underline py-4 sm:py-5 lg:py-6 data-[state=open]:text-[#311FD4]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm sm:text-base leading-relaxed pb-4 sm:pb-5 lg:pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  )
}
