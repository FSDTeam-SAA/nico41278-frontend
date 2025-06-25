"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const chartData = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 150 },
  { month: "Mar", value: 80 },
  { month: "Apr", value: 280 },
  { month: "May", value: 400 },
  { month: "Jun", value: 280 },
  { month: "Jul", value: 100 },
  { month: "Aug", value: 250 },
  { month: "Sep", value: 380 },
  { month: "Oct", value: 220 },
  { month: "Nov", value: 100 },
  { month: "Dec", value: 480 },
]

export function MonthlyChart() {
  const [selectedYear] = useState("This year")
  const maxValue = Math.max(...chartData.map((d) => d.value))

  return (
    <div className="bg-dashsecoundary rounded-lg p-6 shadow-[0px_4px_8px_1px_#00000033]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Monthly Purchase Amount</h2>
        <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
          <span>{selectedYear}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
          <span>500</span>
          <span>400</span>
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 pl-4">
          <div className="flex items-end justify-between h-64 border-l border-b border-gray-200">
            {chartData.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center flex-1">
                <div className="w-full flex justify-center mb-2">
                  <div
                    className={`w-8 rounded-t ${index % 2 === 0 ? "bg-blue-500" : "bg-teal-400"}`}
                    style={{
                      height: `${(data.value / maxValue) * 200}px`,
                      minHeight: "4px",
                    }}
                  />
                </div>
                <span className="text-xs text-gray-600 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
