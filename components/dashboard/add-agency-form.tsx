"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

export function AddAgencyForm() {
  const [emails, setEmails] = useState([
    "Abcd@gmail.com",
    "Abcd@gmail.com",
    "Abcd@gmail.com",
    "Abcd@gmail.com",
    "Abcd@gmail.com",
    "Abcd@gmail.com",
    "Abcd@gmail.com",
    "Abcd@gmail.com",
    "Abcd@gmail.com",
    "Abcd@gmail.com",
  ])
  const [newEmail, setNewEmail] = useState("")

  const removeEmail = (index: number) => {
    setEmails(emails.filter((_, i) => i !== index))
  }

  const addEmail = () => {
    if (newEmail.trim()) {
      setEmails([...emails, newEmail.trim()])
      setNewEmail("")
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center">
          <span className="text-white text-sm">+</span>
        </div>
        <h1 className="text-xl font-semibold text-gray-900">Add Agency</h1>
      </div>

      <form className="space-y-6">
        <div>
          <Label htmlFor="location" className="text-sm font-medium text-gray-700">
            Agency Location
          </Label>
          <Input id="location" type="text" className="mt-1" placeholder="Enter location" />
        </div>

        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name of the Agency
          </Label>
          <Input id="name" type="text" className="mt-1" placeholder="Enter agency name" />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Add mail
          </Label>
          <div className="mt-1 flex space-x-2">
            <Input
              id="email"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter email"
              className="flex-1"
            />
            <Button type="button" onClick={addEmail} className="bg-teal-500 hover:bg-teal-600">
              Add
            </Button>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700">Emails</Label>
          <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">
            {emails.map((email, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <span className="text-sm text-gray-700">{email}</span>
                <button type="button" onClick={() => removeEmail(index)} className="text-gray-400 hover:text-red-500">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button type="submit" className="bg-teal-500 hover:bg-teal-600 px-8">
            Add Agency
          </Button>
        </div>
      </form>
    </div>
  )
}
