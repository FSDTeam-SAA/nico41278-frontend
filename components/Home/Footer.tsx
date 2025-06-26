import Link from "next/link"
import { ArrowRight, Linkedin, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#EEFFFE] py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={167} 
                height={47} 
                className="w-40 sm:w-44 h-auto object-contain" 
              />
            </div>
            <div className="space-y-2 text-sm sm:text-base text-gray-600">
              <p>+1 (7635) 547-12-97</p>
              <p>support@lift.agency</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-normal text-[#000000]">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                Testimonials
              </Link>
              <Link href="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-normal text-[#000000] lg:opacity-0">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy-policy" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-normal text-[#000000]">Subscribe</h3>
            <div className="flex w-full max-w-md">
              <Input 
                type="email" 
                placeholder="Get new updates" 
                className="flex-1 bg-[#9AB7BC] border border-[#9AB7BC] text-sm sm:text-base rounded-none outline-none h-10 sm:h-12" 
              />
              <Button className="bg-[#44B6CA] text-white px-3 rounded-none h-10 sm:h-12">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-sm sm:text-base text-gray-600">© 2025 Lift Agency. All Rights Reserved.</div>

            {/* Product Attribution */}
            <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600">
              <span>A product of</span>
              <div className="flex items-center space-x-1">
                <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  width={80} 
                  height={70} 
                  className="w-16 sm:w-20 h-auto object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}