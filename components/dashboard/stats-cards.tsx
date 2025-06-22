import { Users, UserCheck, DollarSign } from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "120",
    icon: Users,
    bgColor: "bg-teal-500",
  },
  {
    title: "Paid Users",
    value: "350",
    icon: UserCheck,
    bgColor: "bg-teal-500",
  },
  {
    title: "Sell Amount",
    value: "$ 2000",
    icon: DollarSign,
    bgColor: "bg-teal-500",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.title} className={`${stat.bgColor} rounded-lg p-6 text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-teal-100 text-sm font-medium">{stat.title}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
            <stat.icon className="h-12 w-12 text-teal-200" />
          </div>
        </div>
      ))}
    </div>
  )
}
