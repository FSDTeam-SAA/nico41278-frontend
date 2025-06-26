"use client";

import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function EditLists() {
  const [expandedSections, setExpandedSections] = useState({
    la: true,
    ny: true,
  });

  const toggleSection = (section: "la" | "ny") => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/user-dashboard"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>

          <h1 className="text-2xl font-bold text-gray-900">Edit Your Lists</h1>
        </div>

        {/* LA Commercial Agents List */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="p-6 border-b border-gray-200">
            <button
              onClick={() => toggleSection("la")}
              className="flex items-center justify-between w-full text-left"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                LA Commercial Agents List
              </h2>
              {expandedSections.la ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>

          {expandedSections.la && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    Submission <span className="font-medium">2</span> for{" "}
                    <span className="text-teal-500 font-medium">
                      LA Commercial Agents List
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    list was started on{" "}
                    <span className="text-teal-500 font-medium">8/23/24</span>
                  </div>
                </div>
                <Link href="/user-dashboard/select-send">
                  <Button className="bg-[#42A3B2] hover:bg-[#42A3B2]/80 text-white">
                    Edit email
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 mb-6">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    TOTAL CONTACTS
                  </div>
                  <div className="text-3xl font-bold text-gray-900">260</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    SENT EMAILS
                  </div>
                  <div className="text-3xl font-bold text-gray-900">50</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    SUBMISSION
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-gray-900">
                      2
                    </span>
                    <span className="text-sm text-teal-500 font-medium">
                      In progress
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#42A3B2] h-2 rounded-full"
                        style={{ width: "19%" }}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-teal-500 font-medium mt-1">
                      19%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* NY Commercial Agents List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <button
              onClick={() => toggleSection("ny")}
              className="flex items-center justify-between w-full text-left"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                NY Commercial Agents List
              </h2>
              {expandedSections.ny ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>

          {expandedSections.ny && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    Submission <span className="font-medium">3</span> for{" "}
                    <span className="text-teal-500 font-medium">
                      NY Commercial Agents List
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    list was started on{" "}
                    <span className="text-teal-500 font-medium">5/21/24</span>
                  </div>
                </div>
                <Link href="/user-dashboard/select-send">
                  <Button className="bg-[#42A3B2] hover:bg-[#42A3B2]/80 text-white">
                    Edit email
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 mb-6">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    TOTAL CONTACTS
                  </div>
                  <div className="text-3xl font-bold text-gray-900">185</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    SENT EMAILS
                  </div>
                  <div className="text-3xl font-bold text-gray-900">148</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    SUBMISSION
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-gray-900">
                      3
                    </span>
                    <span className="text-sm text-teal-500 font-medium">
                      In progress
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#42A3B2] h-2 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-teal-500 font-medium mt-1">
                      80%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
