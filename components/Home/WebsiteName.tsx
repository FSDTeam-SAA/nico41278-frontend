import Image from "next/image";

const WebsiteName = () => {
  const cardItems = [
    {
      title: "Manage and customize your lists.",
      description:
        "Submit to your full agent list, only SAG-franchised agents, or a select few — the choice is yours.",
      image: "/Layer_1.png",
    },
    {
      title: "Track and manage submissions easily.",
      description:
        "Stay organized by monitoring agent responses and keeping your submissions in one place.",
      image: "/Layer_3.png",
    },
    {
      title: "Get insights that matter.",
      description:
        "Understand which agents engage with your profile to refine your strategy.",
      image: "/Layer_2.png",
    },
    {
      title: "Connect with trusted agencies.",
      description:
        "Our vetted network ensures your portfolio reaches the right people.",
      image: "/Layer_4.png",
    },
  ];

  return (
    <div className="bg-[#FCF4E4] py-16">
      <div className="container mx-auto px-4">
        {/* Section 1 */}
        <section className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
            How you&apos;ll use <span className="text-[#003DFF]">uModel</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardItems.map((item, index) => (
              <div key={index} className="bg-white/70 p-6 rounded-lg shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="mb-3 font-semibold text-[#170F49]">
                  {item.title}
                </h3>
                <p className="text-[#292727]">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-[#44B6CA] text-white py-3 px-6 rounded-lg hover:bg-[#3799a8] transition">
              Get Represented
            </button>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
            How you&apos;ll use <span className="text-[#003DFF]">Website Name</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardItems.map((item, index) => (
              <div key={index} className="bg-[#f0fdff] p-6 rounded-lg shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="mb-3 font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebsiteName;
