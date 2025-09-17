"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const agents = [
  {
    id: 1,
    name: "AQUA Talent",
    email: "abcd@gmail.com",
    agency: "AQUA Talent Agency",
    location: "London park",
    selected: true,
  },
  {
    id: 2,
    name: "AQUA Talent",
    email: "abcd@gmail.com",
    agency: "AQUA Talent Agency",
    location: "London park",
    selected: false,
  },
  {
    id: 3,
    name: "AQUA Talent",
    email: "abcd@gmail.com",
    agency: "AQUA Talent Agency",
    location: "London park",
    selected: false,
  },
  {
    id: 4,
    name: "AQUA Talent",
    email: "abcd@gmail.com",
    agency: "AQUA Talent Agency",
    location: "London park",
    selected: true,
  },
  {
    id: 5,
    name: "AQUA Talent",
    email: "abcd@gmail.com",
    agency: "AQUA Talent Agency",
    location: "London park",
    selected: false,
  },
  {
    id: 6,
    name: "AQUA Talent",
    email: "abcd@gmail.com",
    agency: "AQUA Talent Agency",
    location: "London park",
    selected: true,
  },
  {
    id: 7,
    name: "AQUA Talent",
    email: "abcd@gmail.com",
    agency: "AQUA Talent Agency",
    location: "London park",
    selected: true,
  },
  {
    id: 8,
    name: "AQUA Talent",
    email: "abcd@gmail.com",
    agency: "AQUA Talent Agency",
    location: "London park",
    selected: true,
  },
  {
    id: 9,
    name: "AQUA Talent",
    email: "abcd@gmail.com",
    agency: "AQUA Talent Agency",
    location: "London park",
    selected: false,
  },
  {
    id: 10,
    name: "AQUA Talent",
    email: "abcd@gmail.com",
    agency: "AQUA Talent Agency",
    location: "London park",
    selected: false,
  },
];

export default function SelectAndSend() {
  const [selectedAgents, setSelectedAgents] = useState(agents);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    setSelectedAgents((prev) =>
      prev.map((agent) => ({ ...agent, selected: checked }))
    );
  };

  const handleSelectAgent = (id: number, checked: boolean) => {
    setSelectedAgents((prev) =>
      prev.map((agent) =>
        agent.id === id ? { ...agent, selected: checked } : agent
      )
    );
  };

  const selectedCount = selectedAgents.filter((agent) => agent.selected).length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/user-dashboard/edit-lists"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>

          <h1 className="text-2xl font-bold text-gray-900">Select and Send</h1>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={selectAll}
                      onCheckedChange={handleSelectAll}
                    />
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      All
                    </span>
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Agent Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Agency Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {selectedAgents.map((agent) => (
                <tr key={agent.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Checkbox
                      checked={agent.selected}
                      onCheckedChange={(checked: boolean | "indeterminate") =>
                        handleSelectAgent(agent.id, checked as boolean)
                      }
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {agent.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{agent.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{agent.agency}</div>
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

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-center">
            <Link href="/user-dashboard/compose-email">
              <Button
                className="bg-[#42A3B2] hover:bg-[#42A3B2]/80 text-white px-8"
                disabled={selectedCount === 0}
              >
                Submit ({selectedCount} selected)
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
