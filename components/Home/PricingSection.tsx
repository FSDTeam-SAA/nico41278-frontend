import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PricingSection() {
  const features = [
    { name: "3 full subscription attempts", basic: true, premium: true },
    { name: "Send 50 emails per day", basic: true, premium: true },
    { name: "Track email options", basic: false, premium: true },
    { name: "Customizable recipient list", basic: false, premium: true },
  ];

  return (
    <div className="w-full min-h-screen relative">
     
      <div
        className="absolute left-0 right-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/vector.png')",
          top: "400px", 
          bottom: "20px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Start today, with basic or premium plan, you choose
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            With lots of unique and useful features, you can easily manage your
            wallet easily without any problem.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-none mx-auto">
          {/* Basic Plan */}
          <Card className="relative bg-white border border-gray-200 rounded-2xl p-8 w-[360px] h-[640px] flex flex-col">
            <CardHeader className="p-0 mb-8">
              <div className="text-sm font-medium text-cyan-500 uppercase tracking-wide mb-4">
                BASIC PLAN
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">$60</span>
                <span className="text-gray-500">120 agent emails</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Joy horrible moreover man feelings own shy. Request norland
                neither mistake for yet. Between the for morning assured.
              </p>
            </CardHeader>

            <CardContent className="p-0 flex-grow flex flex-col justify-between">
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.basic ? "bg-cyan-500" : "bg-red-100"
                      }`}
                    >
                      {feature.basic ? (
                        <Check className="w-3 h-3 text-white" />
                      ) : (
                        <X className="w-3 h-3 text-red-400" />
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        feature.basic ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full py-3 text-gray-600 border-gray-300 hover:bg-gray-50 rounded-full"
              >
                Join with basic
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative bg-cyan-500 border-0 rounded-2xl p-8 text-white w-[360px] h-[640px] flex flex-col">
            <Badge className="absolute -top-3 -right-3 bg-gray-800 text-white px-4 py-1 rounded-full text-sm">
              Best choice
            </Badge>

            <CardHeader className="p-0 mb-8">
              <div className="text-sm font-medium text-cyan-100 uppercase tracking-wide mb-4">
                PREMIUM PLAN
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-white">$120</span>
                <span className="text-cyan-100">214 agent emails</span>
              </div>
              <p className="text-cyan-100 text-sm leading-relaxed">
                On even feet time have an no at. Relation so in confined
                smallest children unpacked delicate. Why sir end believe.
              </p>
            </CardHeader>

            <CardContent className="p-0 flex-grow flex flex-col justify-between">
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <Check className="w-3 h-3 text-cyan-500" />
                    </div>
                    <span className="text-sm text-white">{feature.name}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full py-3 bg-white text-gray-800 hover:bg-gray-50 rounded-full font-medium">
                Get the premium
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
