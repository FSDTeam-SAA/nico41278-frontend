"use client";

import {
  ArrowLeft,
  Upload,
  Bold,
  Italic,
  Underline,
  LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function ComposeEmail() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [subject, setSubject] = useState(
    "Experienced Bilingual Actor - Commercial & Theatrical"
  );
  const [emailContent, setEmailContent] = useState(`Dear [Agent Name],

I hope this email finds you well. I'm reaching out because I believe my experience and skills would make me a valuable addition to your roster.

Recent highlights from my career include:

• Lead roles in two network television productions
• National commercial campaigns for major brands  
• Advanced training in method acting and improvisation
• Fluent in English and Spanish with neutral accents

I would welcome the opportunity to discuss how we might work together. You can reach me at (310) 555-0123 or by email.

Best regards,
[Your Name]`);

  const handleSendEmail = () => {
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/user-dashboard/select-send"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Photo Upload Area */}
          <div className="mb-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <div className="text-sm text-gray-500">Add photo</div>
            </div>
          </div>

          {/* Email Composition */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Compose Your Email
            </h2>

            {/* Subject Line */}
            <div>
              <Label
                htmlFor="subject"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Subject Line
              </Label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Rich Text Editor Toolbar */}
            <div className="border border-gray-300 rounded-lg">
              <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Bold className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Italic className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Underline className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <LinkIcon className="w-4 h-4" />
                </Button>
                <div className="w-px h-6 bg-gray-300 mx-1" />
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <AlignLeft className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <AlignCenter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <AlignRight className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <List className="w-4 h-4" />
                </Button>
              </div>

              {/* Email Content */}
              <Textarea
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
                className="min-h-[400px] border-0 resize-none focus-visible:ring-0 rounded-t-none"
                placeholder="Compose your email..."
              />
            </div>

            {/* Send Button */}
            <div className="flex justify-start">
              <Button
                onClick={handleSendEmail}
                className="bg-[#42A3B2] hover:bg-[#42A3B2]/80 text-white px-8"
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
          <DialogContent className="sm:max-w-md">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-[#42A3B2] rounded-full flex items-center justify-center">
                  <div className="text-white text-2xl">🎉</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Your mail has been sent!
              </h3>
              <Link href="/user-dashboard">
                <Button className="bg-[#42A3B2] hover:bg-[#42A3B2]/80 text-white px-8">
                  Thanks!
                </Button>
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
