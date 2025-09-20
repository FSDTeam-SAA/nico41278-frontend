"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-[618px] bg-white rounded-2xl border-2 border-[#44B6CA] p-8 shadow-lg">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-[32px] font-bold text-[#000000]">Log In</h2>
            <p className="text-base text-[#999999] mt-4">
              Log in as an Admin by providing your information.
            </p>
          </div>

          <div className="space-y-4 pt-10">
            <div>
              <h3 className="text-lg font-semibold text-[#444444] mb-4">
                Please sign in to continue
              </h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="login-email"
                    className="text-base font-medium text-[#737373]"
                  >
                    Email address
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="Write your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 h-[52px] border border-[#9E9E9E] rounded-lg focus:ring-2 focus:ring-[#44B6CA] focus:border-[#44B6CA] !outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="login-password"
                     className="text-base font-medium text-[#737373]"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 h-[52px] border border-[#9E9E9E] rounded-lg focus:ring-2 focus:ring-[#44B6CA] focus:border-[#44B6CA] !outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-right mt-3">
                <Link href="/forgot-password">
                <button className="text-sm text-[#44B6CA] hover:text-[#44B6CA]/90 font-medium">
                  Forget Password?
                </button>
                </Link>
              </div>
            </div>
          </div>

         <div className="flex justify-center">
           <Button className="w-[240px] h-[52px]  bg-[#44B6CA] hover:bg-[#44B6CA]/80 text-white text-base font-medium py-3 rounded-lg">
            Login
          </Button>
         </div>
        </div>
      </div>
    </div>
  )
}
