import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="container  lg:py-12">
      <header className="mb-8">
        <Link
          href="/"
          className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </header>
      <main className="">
        <h1 className="text-3xl font-semibold text-[#505050] mb-8">Terms of Service</h1>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-base text-[#505050] font-normal leading-[150%]">
            Welcome to yourwebsite. By accessing and using our website dripswag.com and purchasing our products, you
            agree to comply with and be bound by the following terms and conditions. Please read these Terms carefully.
            If you do not agree to these Terms, please do not use the Site or make a purchase.
          </p>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Eligibility</h2>
            <p className="text-base text-[#505050] font-normal leading-[150%]">
              You must be at least 18 years old and legally able to enter into contracts to use our Site. By using the
              Site, you represent and warrant that you meet these eligibility requirements.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Account Registration</h2>
            <p className="text-base text-[#505050] font-normal leading-[150%]">
              To participate in auctions and place bids, you must create an account on our Site. When registering, you
              agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information during the registration process.</li>
              <li>
                Maintain the confidentiality of your account credentials and notify us immediately of any unauthorized
                access to your account.
              </li>
              <li>Be responsible for all activity under your account, even if you have not directly authorized it.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Auctions & Bidding</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="font-bold text-[#505050]">Auction Process:</strong> Auctions on our Site are conducted in real-time or at scheduled times,
                depending on the auction type. You can place bids on items listed by sellers.
              </li>
              <li>
                <strong className="font-bold text-[#505050]">Bidding Rules:</strong> By placing a bid, you are making a legally binding offer to purchase the
                item. If you have the highest bid when the auction ends, you are required to complete the purchase.
              </li>
              <li>
                <strong className="font-bold text-[#505050]">Bid Cancellation:</strong> Once a bid is placed, it cannot be canceled or withdrawn. If you are
                the winning bidder, you are obligated to pay the bid amount.
              </li>
              <li>
                <strong>Reserve Price:</strong> Some items may have a reserve price. If the highest bid does not meet
                the reserve price, the item will not be sold.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Winning Bid and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="font-bold text-[#505050]">Payment:</strong> If you win an auction, you agree to pay the bid amount plus any applicable
                taxes, fees, and shipping costs. Payments must be made through the methods specified on the Site.
              </li>
              <li>
                <strong className="font-bold text-[#505050]">Failure to Pay:</strong> If you fail to make the required payment within the specified time, we
                may cancel the transaction, and you may be subject to penalties, including being banned from future
                auctions.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Fees</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="font-bold text-[#505050]">Listing Fees:</strong> Sellers may be required to pay a fee to list an item for auction on our
                Site. These fees are outlined in our fee schedule available on the Site.
              </li>
              <li>
                <strong className="font-bold text-[#505050]">Transaction Fees:</strong> We may charge a transaction fee for successful auctions, which will
                be specified at the time of the auction.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Seller Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="font-bold text-[#505050]">Item Description:</strong> Sellers must provide accurate and honest descriptions of the items
                they list for auction, including clear details about condition, defects, and authenticity.
              </li>
              <li>
                <strong className="font-bold text-[#505050]">Shipping:</strong> Sellers are responsible for shipping the items to the winning bidder within
                the timeframe specified on the Site.
              </li>
              <li>
                <strong className="font-bold text-[#505050]">Returns and Disputes:</strong> Sellers must adhere to our return policy and resolve any disputes
                related to their items in a fair and timely manner.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Prohibited Activities</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li >Violate any applicable laws or regulations.</li>
              <li>
                Engage in fraudulent activities, such as placing fake bids, creating multiple accounts to manipulate
                auction outcomes, or misrepresenting items for sale.
              </li>
              <li>Interfere with or disrupt the Site&apos;s functionality or security.</li>
              <li>Use our Site for any illegal or harmful purposes.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Intellectual Property</h2>
            <p className="text-base text-[#505050] font-normal leading-[150%]">
              Ownership: All content on the Site, including text, graphics, logos, images, and software, is the property
              of [Your Website Name] or our licensors and is protected by intellectual property laws.
            </p>
            <p className="text-base text-[#505050] font-normal leading-[150%]">
              Limited License: We grant you a limited, non-exclusive, non-transferable license to access and use the
              Site for its intended purpose.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Privacy</h2>
            <p>
              Your use of the Site is also governed by our [Privacy Policy], which outlines how we collect, use, and
              protect your personal information.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Limitation of Liability</h2>
            <p className="text-base text-[#505050] font-normal leading-[150%]">
              To the fullest extent permitted by law, [Your Website Name] shall not be liable for any direct, indirect,
              incidental, special, or consequential damages arising from your use of the Site or any transactions
              conducted through the Site.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Dispute Resolution</h2>
            <p>
              Any disputes arising out of or related to these Terms and your use of the Site will be resolved through
              binding arbitration in accordance with the laws of [Your Country/State]. You agree to waive the right to
              participate in class actions, class arbitrations, or any other proceedings involving multiple parties.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Site at our discretion, without notice,
              for violations of these Terms or any other reason. If your account is terminated, any outstanding
              transactions or obligations will remain enforceable.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The most current version will always be available on this
              page. By continuing to use the Site after changes are posted, you agree to be bound by the updated Terms.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-[#505050] font-medium mb-4">Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of [Your Country/State]. Any legal
              action or proceeding related to these Terms shall be brought in the competent courts located in
              [Jurisdiction].
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
