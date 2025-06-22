import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const subscribers = Array(12)
  .fill("demo@gmail.com")
  .map((email, index) => ({
    id: index + 1,
    email: email,
  }));

export function SubscribersList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link href={"/dashboard/subscribers"}>
          <button className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">
          Send mail to the subscribers
        </h1>
      </div>

      <div className="bg-[#effdff] shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Ser Subscribers
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Subscriber Mail
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
            {subscribers.map((subscriber) => (
              <tr key={subscriber.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {subscriber.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {subscriber.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
