"use client"

import Link from "next/link"
import { ArrowRight, Linkedin, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.footer
      className="bg-[#FFFFFF] py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8"
          variants={containerVariants}
        >
          {/* Logo and Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants as any}>
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={167}
                height={47}
                className="w-40 sm:w-44 h-auto object-contain"
              />
            </motion.div>
            <div className="space-y-2 text-sm sm:text-base text-gray-600">
              <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                +1 (7635) 547-12-97
              </motion.p>
              <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                support@lift.agency
              </motion.p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants as any}>
            <h3 className="text-base sm:text-lg font-normal text-[#000000]">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {["Home", "Testimonials", "Pricing", "FAQ"].map((link, index) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href="#"
                    className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors inline-block"
                  >
                    <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      {link}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Legal Links */}
          <motion.div className="space-y-4" variants={itemVariants as any}>
            <h3 className="text-base sm:text-lg font-normal text-[#000000] lg:opacity-0">Legal</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors inline-block"
                  >
                    <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div className="space-y-4" variants={itemVariants as any}>
            <h3 className="text-base sm:text-lg font-normal text-[#000000]">Subscribe</h3>
            <motion.div className="flex w-full max-w-md" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <input
                type="email"
                placeholder="Get new updates"
                className="flex-1 bg-[#9AB7BC] border border-[#9AB7BC] text-sm sm:text-base outline-none h-10 sm:h-12 rounded-tl-[6px] rounded-bl-[6px] pl-3 placeholder:text-[#000000]"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#311FD4] text-white px-3 rounded-none h-10 sm:h-12 hover:bg-[#311FD4] rounded-tr-[6px] rounded-br-[6px]">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="border-t border-gray-200 pt-6" variants={itemVariants as any}>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            {/* Social Media Icons */}
            <motion.div className="flex space-x-4" variants={containerVariants}>
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }, index) => (
                <motion.div
                  key={label}
                  variants={socialVariants as any}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="text-sm sm:text-base text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              © 2025 Lift Agency. All Rights Reserved.
            </motion.div>

            {/* Product Attribution */}
            <motion.div
              className="flex items-center space-x-2 text-sm sm:text-base text-gray-600"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span>A product of</span>
              <motion.div
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={80}
                  height={70}
                  className="w-16 sm:w-20 h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
