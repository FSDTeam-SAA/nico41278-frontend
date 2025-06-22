"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Bold,
  Italic,
  Underline,
  Link,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
} from "lucide-react"

export function SendMailForm() {
  const [subject, setSubject] = useState("Experience Because Active - Considered Thankful")
  const [content, setContent] = useState(`Dear friend Name,

I hope this email finds you well. I'm reaching out because I believe you experience and skills would make you a valuable addition to our company.

We are currently looking for talented individuals to join our team in various roles:
• Sales roles in the network television production
• Network commercial campaigns for major brands
• Marketing and advertising positions for established companies

Our company has been operating successfully for over 10 years, and we're looking to expand our team with experienced professionals like yourself. We can assure you of a USD 500-1000 $ monthly salary.

If you're interested in learning more about these opportunities, please don't hesitate to reach out.

Best regards,
[Your Name]`)

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Send mail to the subscribers</h1>
        <Button className="ml-auto bg-teal-500 hover:bg-teal-600">Send Email</Button>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="space-y-6">
          <div>
            <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
              Compose Your Email
            </Label>
            <div className="mt-1">
              <div className="text-xs text-gray-500 mb-2">Subject line</div>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="font-medium"
              />
            </div>
          </div>

          <div>
            {/* Toolbar */}
            <div className="border border-gray-200 rounded-t-lg p-2 bg-gray-50">
              <div className="flex items-center space-x-1">
                <button className="p-1 hover:bg-gray-200 rounded">
                  <Bold className="h-4 w-4" />
                </button>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <Italic className="h-4 w-4" />
                </button>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <Underline className="h-4 w-4" />
                </button>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <Link className="h-4 w-4" />
                </button>
                <div className="w-px h-4 bg-gray-300 mx-2" />
                <button className="p-1 hover:bg-gray-200 rounded">
                  <AlignLeft className="h-4 w-4" />
                </button>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <AlignCenter className="h-4 w-4" />
                </button>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <AlignRight className="h-4 w-4" />
                </button>
                <div className="w-px h-4 bg-gray-300 mx-2" />
                <button className="p-1 hover:bg-gray-200 rounded">
                  <List className="h-4 w-4" />
                </button>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <ListOrdered className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[300px] border-t-0 rounded-t-none resize-none"
            />
          </div>

          <div className="flex justify-center">
            <Button className="bg-teal-500 hover:bg-teal-600 px-8">Send Email</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
