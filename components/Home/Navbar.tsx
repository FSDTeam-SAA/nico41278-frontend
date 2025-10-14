/* eslint-disable */
"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
  ]

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.header
      className="bg-[#FFFFFF] shadow-[0px_2px_8px_0px_#00000029]"
      initial="hidden"
      animate="visible"
      variants={containerVariants as any}
    >
      <nav className="container mx-auto flex items-center justify-between h-[100px] px-4 lg:px-0">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          variants={itemVariants as any}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="h-[167px] w-[40px] rounded-md bg-color-secondary"></div>
          <Link href="/" className="text-xl font-bold">
            <Image src={"/logo.png"} alt="logo" width={100} height={100} className="h-full w-full" />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div className="hidden items-center space-x-6 md:flex" variants={containerVariants as any}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              variants={linkVariants as any}
              whileHover={{
                y: -2,
                transition: { duration: 0.2 },
              }}
            >
              <Link href={link.href} className="relative overflow-hidden group">
                <motion.span className="relative z-10" whileHover={{ color: "#311FD4" }} transition={{ duration: 0.2 }}>
                  {link.name}
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#311FD4] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Auth Buttons (Desktop) */}
        <motion.div className="hidden items-center space-x-4 md:flex" variants={containerVariants as any}>
          <motion.div variants={itemVariants as any} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost">Login</Button>
          </motion.div>
          <motion.button
            className="rounded-sm bg-[#FFEC4C] py-2 px-5 text-[#000000]"
            variants={itemVariants as any}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(255, 236, 76, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get Represented
          </motion.button>
        </motion.div>

        {/* Mobile Nav (Hamburger Menu) */}
        <motion.div className="md:hidden" variants={itemVariants as any}>
          <Sheet>
            <SheetTrigger asChild>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
                <Menu className="h-6 w-6" />
              </motion.button>
            </SheetTrigger>
            <SheetContent className="bg-[#eefffe]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <motion.div
                className="mt-8 flex flex-col space-y-4 px-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={link.href} className="text-lg text-gray-700 hover:text-nav-link">
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="flex flex-col space-y-2 pt-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Login
                  </motion.button>
                  <motion.button
                    className="rounded-sm bg-[#44b6ca] py-2 px-5 text-white"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 4px 12px rgba(68, 182, 202, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Represented
                  </motion.button>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Navbar
