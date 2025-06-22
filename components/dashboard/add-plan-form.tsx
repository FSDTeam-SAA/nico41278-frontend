"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function AddPlanForm() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center">
          <span className="text-white text-sm">+</span>
        </div>
        <h1 className="text-xl font-semibold text-gray-900">Add New Plan</h1>
      </div>

      <form className="space-y-6">
        <div>
          <Label htmlFor="planName" className="text-sm font-medium text-gray-700">
            Plan Name
          </Label>
          <Input id="planName" type="text" className="mt-1" placeholder="Enter plan name" />
        </div>

        <div>
          <Label htmlFor="price" className="text-sm font-medium text-gray-700">
            Price
          </Label>
          <Input id="price" type="text" className="mt-1" placeholder="Enter price" />
        </div>

        <div>
          <Label htmlFor="totalAccess" className="text-sm font-medium text-gray-700">
            Total Access Emails
          </Label>
          <Input id="totalAccess" type="text" className="mt-1" placeholder="Enter total access emails" />
        </div>

        <div>
          <Label htmlFor="description" className="text-sm font-medium text-gray-700">
            Description
          </Label>
          <Textarea id="description" className="mt-1" placeholder="Enter description" rows={4} />
        </div>

        <div>
          <Label htmlFor="advantages" className="text-sm font-medium text-gray-700">
            Set Advantages
          </Label>
          <Textarea id="advantages" className="mt-1" placeholder="Enter advantages" rows={4} />
        </div>

        <div className="flex justify-center pt-4">
          <Button type="submit" className="bg-teal-500 hover:bg-teal-600 px-8">
            Add Plan
          </Button>
        </div>
      </form>
    </div>
  )
}
