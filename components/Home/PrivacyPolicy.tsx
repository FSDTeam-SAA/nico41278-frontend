"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container  py-6  ">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 p-0 h-auto font-normal text-gray-600 hover:text-gray-900 hover:bg-transparent"
          onClick={() => window.history.back()}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Button>

        {/* Main Content */}
        <div className="prose prose-gray ">
          <h1 className="text-3xl font-semibold text-[#505050] mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8  ">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-base text-[#505050] font-normal leading-[150%]">
                At yourwebsite, we value and respect your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your personal information when you visit our website
                yourwebsite.com] or make a purchase from us.
              </p>
              <p className="text-base text-[#505050] font-normal leading-[150%]">
                By using our website, you agree to the practices described in
                this Privacy Policy. Please read it carefully to understand our
                views and practices regarding your personal data.
              </p>
            </div>

            {/* Information We Collect */}
            <section>
              <h2 className="text-xl text-[#505050] font-medium mb-4">
                Information We Collect
              </h2>
              <p className="mb-4 text-base text-[#505050] font-normal leading-[150%]">
                We collect various types of information to provide and improve
                our auction services, including:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">
                    Personal Information : When you register for an account, place
                    a bid, or use certain features on our Site, we may collect
                    your name, email address, phone number, billing address,
                    shipping address, and payment details.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">
                    Transaction Information : We collect details
                    of your bidding activity, including bids placed, items
                    purchased, and payment history.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">
                   Usage Data : We collect information about
                    your interactions with the Site, including IP address,
                    browser type, device type, pages visited, and time spent on
                    the Site. This helps us improve your user experience and
                    optimize our services.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">
                    Cookies and Tracking Technologies: We use
                    cookies, web beacons, and other tracking technologies to
                    enhance your experience and collect information about how
                    you use our Site.
                  </span>
                </li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-xl text-[#505050] font-medium mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4 text-base text-[#505050] font-normal leading-[150%]">We use the information we collect to:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">
                    Provide and manage the auction services, including
                    processing bids, managing payments, and shipping orders.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">
                    Communicate with you about your account, bids, and
                    purchases.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                   <span className="text-base text-[#505050] font-normal leading-[150%]">
                    Respond to customer service inquiries and resolve any
                    issues.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">
                    Personalize your experience on our Site and recommend
                    relevant products or auctions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">
                    Analyze and improve the performance and functionality of the
                    Site.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                <span className="text-base text-[#505050] font-normal leading-[150%]">
                    Ensure compliance with our terms of service, legal
                    obligations, and prevent fraud.
                  </span>
                </li>
              </ul>
            </section>

            {/* How We Share Your Information */}
            <section>
              <h2 className="text-xl text-[#505050] font-medium mb-4">
                How We Share Your Information
              </h2>
              <p className="mb-4 text-base text-[#505050] font-normal leading-[150%]">
                We may share your personal information in the following
                situations:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span>
                    <strong className="font-bold text-[#505050]">Service Providers:</strong> We may share your data
                    with trusted third-party service providers who assist us in
                    operating the Site, processing payments, and fulfilling
                    orders. These providers are required to use your data solely
                    for the purpose of providing services to us.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span>
                    <strong className="font-bold text-[#505050]">Legal Requirements:</strong> We may disclose your
                    personal information if required to do so by law or in
                    response to valid requests by public authorities (e.g., a
                    court or government agency).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span>
                    <strong className="font-bold text-[#505050]">Business Transfers:</strong> In the event of a
                    merger, acquisition, or sale of assets, your personal
                    information may be transferred as part of the transaction.
                  </span>
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl text-[#505050] font-medium mb-4">
                Data Security
              </h2>
              <p>
                We take the security of your personal information seriously and
                use industry-standard security measures to protect it. However,
                no data transmission over the internet is completely secure, and
                we cannot guarantee the absolute security of your information.
              </p>
            </section>

            {/* Your Data Rights */}
            <section>
              <h2 className="text-xl text-[#505050] font-medium mb-4">
                Your Data Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights
                regarding your personal data, including:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">
                    The right to access the personal information we hold about
                    you.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">
                    The right to correct any inaccuracies in your personal
                    information.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">
                    The right to delete your personal information, subject to
                    legal and contractual obligations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">
                    The right to withdraw consent where we process data based on
                    consent.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-base text-[#505050] font-normal leading-[150%] mr-2">
                    •
                  </span>
                  <span className="text-base text-[#505050] font-normal leading-[150%]">The right to opt-out of marketing communications.</span>
                </li>
              </ul>
              <p className="mt-4 text-base text-[#505050] font-normal leading-[150%]">
                If you wish to exercise any of these rights, please contact us
                at [contact@yourwebsite.com].
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-xl text-[#505050] font-medium mb-4">
                Data Retention
              </h2>
              <p className="text-base text-[#505050] font-normal leading-[150%]">
                We retain your personal information for as long as necessary to
                provide services, comply with legal obligations, and resolve
                disputes. Once your data is no longer needed, we will securely
                delete or anonymize it.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl text-[#505050] font-medium mb-4">
                Cookies
              </h2>
              <p className="text-base text-[#505050] font-normal leading-[150%]">
                We use cookies to enhance your browsing experience. A cookie is
                a small file stored on your device that helps us remember your
                preferences, analyze Site usage, and improve functionality. You
                can control cookies through your browser settings, but disabling
                cookies may affect your ability to use certain features of the
                Site.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-xl text-[#505050] font-medium mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-base text-[#505050] font-normal leading-[150%]">
                Our Site is not intended for children under the age of 13, and
                we do not knowingly collect personal information from children.
                If we become aware that we have inadvertently collected personal
                information from a child under 13, we will take steps to delete
                that information.
              </p>
            </section>

            {/* Changes to This Privacy Policy */}
            <section>
              <h2 className="text-xl text-[#505050] font-medium">
                Changes to This Privacy Policy
              </h2>
              <p className="text-base text-[#505050] font-normal leading-[150%]">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and the &apos;Effective Date&apos; at the top
                will be updated. We encourage you to review this policy
                periodically to stay informed about how we protect your
                information.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
