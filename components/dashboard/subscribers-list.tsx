import { ArrowLeft } from "lucide-react"

const subscribers = Array(12)
  .fill("demo@gmail.com")
  .map((email, index) => ({
    id: index + 1,
    email: email,
  }))

export function SubscribersList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Send mail to the subscribers</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ser Subscribers
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subscriber Mail
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscribers.map((subscriber) => (
              <tr key={subscriber.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{subscriber.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subscriber.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
