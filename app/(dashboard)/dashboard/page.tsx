import { StatsCards } from "@/components/dashboard/stats-cards";
import { MonthlyChart } from "@/components/dashboard/monthly-chart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="p-5 bg-dashsecoundary rounded-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Overview</h1>
        <StatsCards />
      </div>
      <MonthlyChart />
    </div>
  );
}
