"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (!newPassword || !confirmPassword) {
      setError("Both password fields are required")
      return
    }
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match")
      return
    }
    setError("")
    router.push("/login")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-[618px] bg-white rounded-2xl border-2 border-[#44B6CA] p-8 shadow-lg">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-[32px] font-bold text-[#000000]">Reset Password</h2>
            <p className="text-base text-[#999999] mt-4">Create your new password</p>
          </div>

          <div className="space-y-4 pt-10">
            <div>
              <h3 className="text-lg font-semibold text-[#444444] mb-4">
                Create a new password
              </h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="new-password"
                    className="text-base font-medium text-[#737373]"
                  >
                    Set new Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="new-password"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter your new password"
                      value={newPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewPassword(e.target.value)
                        setError("")
                      }}
                      className="w-full px-4 h-[52px] border border-[#9E9E9E] rounded-lg focus:ring-2 focus:ring-[#44B6CA] focus:border-[#44B6CA] !outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="confirm-password"
                    className="text-base font-medium text-[#737373]"
                  >
                    Confirm new password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your new password"
                      value={confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setConfirmPassword(e.target.value)
                        setError("")
                      }}
                      className="w-full px-4 h-[52px] border border-[#9E9E9E] rounded-lg focus:ring-2 focus:ring-[#44B6CA] focus:border-[#44B6CA] !outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
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
              Reset Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}