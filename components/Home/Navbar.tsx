import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="bg-[#FFFFFF] shadow-[0px_2px_8px_0px_#00000029]">
      <nav className="container mx-auto flex items-center justify-between h-[100px] px-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">

          <div className="h-[167px] w-[40px] rounded-md bg-color-secondary"></div>
          <Link href="/" className="text-xl font-bold">
            <Image src={"/logo.png"} alt="logo" width={100} height={100} className="h-full w-full" />

          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden items-center space-x-4 md:flex">
          <Button variant="ghost">Login</Button>
          <button className="rounded-sm bg-[#FFEC4C] py-2 px-5 text-[#000000]">
            Get Represented
          </button>
        </div>

        {/* Mobile Nav (Hamburger Menu) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-[#eefffe]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col space-y-4 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg text-gray-700 hover:text-nav-link"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <button>Login</button>
                  <button className="rounded-sm bg-[#44b6ca] py-2 px-5 text-white">
                    Get Represented
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
