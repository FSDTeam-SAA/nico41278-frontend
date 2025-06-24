import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="container mx-auto mb-20 px-4">
      <h1 className="text-center font-bold text-4xl md:text-5xl mb-8">How it works</h1>

      {/* step 1 */}
      <div>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <Image
              src={"/1.png"}
              alt="1"
              width={1000}
              height={1000}
              className="h-32 w-32"
            />

            <div className="border-b-8 border-dashprimary rounded-lg max-w-lg h-auto md:h-[150px]">
              <h1 className="text-dashprimary">Step One</h1>
              <h2 className="font-semibold my-2">View and edit list</h2>
              <p>
                Get instant access to our entire vetted list of LA, NY, or ATL
                agent emails and customize them as you see fit.
              </p>
            </div>
          </div>

          <div>
            <Image
              src={"/1-arrow.png"}
              alt="1"
              width={1000}
              height={1000}
              className="h-[150px] md:h-[250px] w-auto"
            />
          </div>
        </div>

        <div className="mt-5">
          <Image
            src={"/step-1.png"}
            alt="step-1"
            width={1200}
            height={1000}
            className="mx-auto w-full h-auto"
          />
        </div>
      </div>

      {/* step 2 */}
      <div className="mt-16">
        <div className="flex flex-col-reverse md:flex-row gap-5 items-center">
          <div>
            <Image
              src={"/2-arrow.png"}
              alt="2"
              width={1000}
              height={1000}
              className="h-[150px] md:h-[250px] w-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-5 items-center">
            <Image
              src={"/2.png"}
              alt="2"
              width={1000}
              height={1000}
              className="h-32 w-32"
            />

            <div className="border-b-8 border-dashprimary rounded-lg max-w-lg h-auto md:h-[175px]">
              <h1 className="text-dashprimary">Step Two</h1>
              <h2 className="font-semibold my-2">Compose submission</h2>
              <p>
                Use our custom-built composer to attach your headshoots and
                draft your personalized cover letter. Gmail required.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Image
            src={"/step-2.png"}
            alt="step-2"
            width={1200}
            height={1000}
            className="mx-auto w-full h-auto"
          />
        </div>
      </div>

      {/* step 3 */}
      <div className="mt-16">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <Image
              src={"/3.png"}
              alt="3"
              width={1000}
              height={1000}
              className="h-32 w-32"
            />

            <div className="border-b-8 border-dashprimary rounded-lg max-w-lg h-auto md:h-[150px]">
              <h1 className="text-dashprimary">Step Three</h1>
              <h2 className="font-semibold my-2">Send and track</h2>
              <p>
                Send your individually addressed emails all at once and track
                every interaction with a click of a button.
              </p>
            </div>
          </div>

          <div>
            <Image
              src={"/1-arrow.png"}
              alt="3-arrow"
              width={1000}
              height={1000}
              className="h-[150px] md:h-[250px] w-auto"
            />
          </div>
        </div>

        <div className="mt-5">
          <Image
            src={"/step-3.png"}
            alt="step-3"
            width={1200}
            height={1000}
            className="mx-auto w-full h-auto"
          />
        </div>
      </div>

      {/* step 4 */}
      <div className="mt-16">
        <div className="flex flex-col-reverse md:flex-row gap-5 items-center">
          <div>
            <Image
              src={"/2-arrow.png"}
              alt="4-arrow"
              width={1000}
              height={1000}
              className="h-[150px] md:h-[250px] w-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-5 items-center">
            <Image
              src={"/4.png"}
              alt="4"
              width={1000}
              height={1000}
              className="h-32 w-32"
            />

            <div className="border-b-8 border-dashprimary rounded-lg max-w-lg h-auto md:h-[175px]">
              <h1 className="text-dashprimary">Step Four</h1>
              <h2 className="font-semibold my-2">Rinse and repeat</h2>
              <p>
                Get up to 3 full submission attempts for each list purchased
                with our plus bundle. *Allow one month between submissions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Image
            src={"/step-4.png"}
            alt="step-4"
            width={1200}
            height={1000}
            className="mx-auto w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
