"use client";

import { ArrowLeft, Check, Search, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const agents = [
  {
    status: "Opened",
    name: "Courtney Peldon",
    agency: "Affinity Artists Agency",
    location: "New York, NY",
  },
  {
    status: "Opened",
    name: "Ross Grossman",
    agency: "Affinity Artists Agency",
    location: "New York, NY",
  },
  {
    status: "Opened",
    name: "Ross Grossman",
    agency: "Affinity Artists Agency",
    location: "New York, NY",
  },
  {
    status: "Opened",
    name: "Ross Grossman",
    agency: "Affinity Artists Agency",
    location: "New York, NY",
  },
  {
    status: "Opened",
    name: "Ross Grossman",
    agency: "Affinity Artists Agency",
    location: "New York, NY",
  },
  {
    status: "Opened",
    name: "Ross Grossman",
    agency: "Affinity Artists Agency",
    location: "New York, NY",
  },
  {
    status: "Opened",
    name: "Ross Grossman",
    agency: "Affinity Artists Agency",
    location: "New York, NY",
  },
  {
    status: "Opened",
    name: "Ross Grossman",
    agency: "Affinity Artists Agency",
    location: "New York, NY",
  },
];

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>

          <div className="flex items-center gap-2 mb-8">
            <LayoutGrid className="w-5 h-5 text-gray-700" />
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Emails Sent */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Emails Sent</div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-gray-900">112</span>
              <span className="text-sm text-gray-500">224 total agents</span>
            </div>
            <div className="mb-2">
              <div className="text-xs text-gray-600 mb-1">Submission</div>
              <div className="text-sm font-medium text-gray-900 mb-2">50%</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#42A3B2] h-2 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Emails Opened */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Emails Opened</div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-gray-900">67</span>
              <span className="text-sm text-gray-500">12 since yesterday</span>
            </div>
            <div className="mb-2">
              <div className="text-xs text-gray-600 mb-1">Your rate</div>
              <div className="text-sm font-medium text-gray-900 mb-2">60%</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#42A3B2] h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Average open rate <span className="font-medium">52%</span>
            </div>
          </div>

          {/* Emails Clicked */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Emails Clicked</div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-gray-900">19</span>
              <span className="text-sm text-gray-500">3 since yesterday</span>
            </div>
            <div className="mb-2">
              <div className="text-xs text-gray-600 mb-1">Your rate</div>
              <div className="text-sm font-medium text-gray-900 mb-2">40%</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#42A3B2] h-2 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Average click rate <span className="font-medium">32%</span>
            </div>
          </div>
        </div>

        {/* Your Market Lists */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Your Market Lists
              </h2>
              <Link href="/user-dashboard/edit-lists">
                <Button className="bg-[#42A3B2] hover:bg-[#42A3B2]/80 text-white">
                  Edit List
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Select your market to see the lists
            </p>
          </div>

          <div className="p-6">
            <RadioGroup defaultValue="commercial" className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#42A3B2] rounded-full"></div>
                  <div>
                    <Label className="text-sm font-medium text-gray-900">
                      Los Angeles Commercial Agent List
                    </Label>
                    <div className="text-xs text-gray-500">Spring 2025</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">214 agent emails</div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 border-2 border-gray-300 rounded-full"></div>
                  <div>
                    <Label className="text-sm font-medium text-gray-900">
                      Los Angeles Theatrical Agent List
                    </Label>
                    <div className="text-xs text-gray-500">Spring 2025</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">204 agent emails</div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 border-2 border-gray-300 rounded-full"></div>
                  <div>
                    <Label className="text-sm font-medium text-gray-900">
                      Los Angeles Combo Agent List
                    </Label>
                    <div className="text-xs text-gray-500">
                      (Commercial & Theatrical) Spring 2025
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">283 agent emails</div>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Agents Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search agents"
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>
          </div>

          <div className="overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Agent Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Agency
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {agents.map((agent, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-green-600 font-medium">
                          {agent.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {agent.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {agent.agency}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {agent.location}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
