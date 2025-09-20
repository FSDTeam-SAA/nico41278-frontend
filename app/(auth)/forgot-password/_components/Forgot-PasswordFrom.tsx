"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function ForgetPassword() {
  const [email, setEmail] = useState<string>("")
  const [error, setError] = useState<string>("")
  const router = useRouter()

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (!email) {
      setError("Email is required")
      return
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }
    setError("")
    router.push("/verify-email")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-[618px] bg-white rounded-2xl border-2 border-[#44B6CA] p-8 shadow-lg">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-[32px] font-bold text-[#000000]">Forget Password?</h2>
            <p className="text-base text-[#999999] mt-4">
              Please enter your email and we&apos;ll send you a 6-digit code.
            </p>
          </div>

          <div className="space-y-4 pt-10">
            <div>
              <h3 className="text-lg font-semibold text-[#444444] mb-4">
                Enter your Personal Information
              </h3>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-base font-medium text-[#737373]"
                >
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Write your email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value)
                    setError("")
                  }}
                  className="w-full px-4 h-[52px] border border-[#9E9E9E] rounded-lg focus:ring-2 focus:ring-[#44B6CA] focus:border-[#44B6CA] !outline-none"
                />
                {error && (
                  <p className="text-sm text-red-500 mt-1">{error}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleSubmit}
              className="w-[240px] h-[52px] bg-[#44B6CA] hover:bg-[#44B6CA]/80 text-white text-base font-medium py-3 rounded-lg"
            >
              Send OTP
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}