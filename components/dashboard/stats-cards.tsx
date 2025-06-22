import { Users, UserCheck, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "120",
    icon: Users,
    bgColor: "bg-dashprimary",
  },
  {
    title: "Paid Users",
    value: "350",
    icon: UserCheck,
    bgColor: "bg-dashprimary",
  },
  {
    title: "Sell Amount",
    value: "$ 2000",
    icon: DollarSign,
    bgColor: "bg-dashprimary",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`${stat.bgColor} rounded-lg p-6 text-white shadow-[0px_4px_8px_1px_#00000033]`}
        >
          <div className="flex items-center justify-between">
            <stat.icon className="h-12 w-12 text-white" />
            <div>
              <p className="text-white text-sm font-medium">{stat.title}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
