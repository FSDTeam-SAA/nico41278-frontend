"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function AddPlanForm() {
  return (
    <div>
      <div className="flex items-center gap-6 p-6 rounded-lg bg-dashsecoundary">
        <div className="w-6 h-6 bg-dashprimary rounded flex items-center justify-center">
          <span className="text-white text-sm">+</span>
        </div>
        <h1 className="text-xl font-semibold text-dashprimary">Add New Plan</h1>
      </div>

      <form className="space-y-6">
        <div className="bg-dashsecoundary p-4 rounded-lg mt-5">
          <Label htmlFor="planName" className="text-sm font-medium text-gray-700">
            Plan Name
          </Label>
          <Input id="planName" type="text" className="mt-1" placeholder="Enter plan name" />
        </div>

        <div className="bg-dashsecoundary p-4 rounded-lg mt-5">
          <Label htmlFor="price" className="text-sm font-medium text-gray-700">
            Price
          </Label>
          <Input id="price" type="text" className="mt-1" placeholder="Enter price" />
        </div>

        <div className="bg-dashsecoundary p-4 rounded-lg mt-5">
          <Label htmlFor="totalAccess" className="text-sm font-medium text-gray-700">
            Total Access Emails
          </Label>
          <Input id="totalAccess" type="text" className="mt-1" placeholder="Enter total access emails" />
        </div>

        <div className="bg-dashsecoundary p-4 rounded-lg mt-5">
          <Label htmlFor="description" className="text-sm font-medium text-gray-700">
            Description
          </Label>
          <Textarea id="description" className="mt-1" placeholder="Enter description" rows={4} />
        </div>

        <div className="bg-dashsecoundary p-4 rounded-lg mt-5">
          <Label htmlFor="advantages" className="text-sm font-medium text-gray-700">
            Set Advantages
          </Label>
          <Textarea id="advantages" className="mt-1" placeholder="Enter advantages" rows={4} />
        </div>

        <div className="flex justify-center pt-4">
          <Button type="submit" className="bg-dashprimary hover:bg-dashprimary px-8">
            Add Plan
          </Button>
        </div>
      </form>
    </div>
  )
}
