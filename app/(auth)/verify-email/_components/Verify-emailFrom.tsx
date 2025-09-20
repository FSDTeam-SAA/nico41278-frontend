"use client"

import { useState, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function VerifyEmail() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""])

  const handleOtpChange = (index: number, value: string): void => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-[618px] bg-white rounded-2xl border-2 border-[#44B6CA] p-8 shadow-lg">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-[32px] font-bold text-[#000000]">Verify Email</h2>
            <p className="text-base text-[#999999] mt-4">
              We&apos;ve sent a verification code to <span className="font-medium">abcdef@gmail.com</span>
            </p>
          </div>

          <div className="space-y-4 pt-10">
            <div className="flex justify-center gap-3">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleOtpChange(index, e.target.value)}
                  className="w-[52px] h-[52px] text-center text-lg font-semibold bg-[#44B6CA]/10 border border-[#9E9E9E] rounded-lg focus:ring-2 focus:ring-[#44B6CA] focus:border-[#44B6CA] !outline-none"
                  maxLength={1}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between text-sm">
            <button className="text-[#44B6CA] hover:text-[#44B6CA]/90 font-medium">
              Don&apos;t receive OTP?
            </button>
            <button className="text-[#44B6CA] hover:text-[#44B6CA]/90 font-medium">
              Resend code
            </button>
          </div>

          <div className="flex justify-center">
            <Button className="w-[240px] h-[52px] bg-[#44B6CA] hover:bg-[#44B6CA]/80 text-white text-base font-medium py-3 rounded-lg">
              Verify
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}