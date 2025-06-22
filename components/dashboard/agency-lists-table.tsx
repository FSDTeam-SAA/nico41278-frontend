import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

const agencyData = Array(8).fill({
  name: "Los Angeles Commercial Agent List",
  addedDate: "5 Jun 2025",
  totalAgentEmails: "214",
  location: "Los Angeles",
});

export function AgencyListsTable() {
  return (
    <div className="rounded-lg shadow-sm">
      <div className="flex items-center justify-between p-6 rounded-lg bg-dashsecoundary">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-dashprimary rounded flex items-center justify-center">
            <span className="text-white text-sm">📋</span>
          </div>
          <h1 className="text-2xl text-dashprimary font-bold">Agency Lists</h1>
        </div>
        <Link href={"/dashboard/add-agency/agency-lists"}>
          {" "}
          <button className="bg-dashprimary w-[120px] py-2 rounded-lg text-white">Add +</button>
        </Link>
      </div>

      <div className="p-6 rounded-lg bg-dashsecoundary mt-5">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search by Email" className="pl-10" />
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto bg-[#effdff] mt-5 rounded-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Name of the Agency
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Added Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Total Agent Emails
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {agencyData.map((agency, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {agency.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {agency.addedDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {agency.totalAgentEmails}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {agency.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
