import Image from "next/image";

const WebsiteName = () => {
  const cardItmes = [
    {
      title: "Manage and customize your lists.",
      description:
        "Submit to your full agent list, only SAG-franchised agents, or a select few — the choice is yours.",
      image: "/Layer_1.png",
    },
    {
      title: "Manage and customize your lists.",
      description:
        "Submit to your full agent list, only SAG-franchised agents, or a select few — the choice is yours.",
      image: "/Layer_2.png",
    },
    {
      title: "Manage and customize your lists.",
      description:
        "Submit to your full agent list, only SAG-franchised agents, or a select few — the choice is yours.",
      image: "/Layer_3.png",
    },
    {
      title: "Manage and customize your lists.",
      description:
        "Submit to your full agent list, only SAG-franchised agents, or a select few — the choice is yours.",
      image: "/Layer_4.png",
    },
  ];

  return (
    <div className="">
      <div className="container mx-auto mb-20 pt-10 ">
        <h1 className="text-5xl font-bold text-center mb-10">
          How you&apos;ll use <span className="text-[#003DFF]">uModel</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardItmes.map((item, index) => (
            <div key={index} className="bg-[#FFFFFF]/70 p-4 rounded-lg">
              <Image
                width={64}
                height={64}
                src={item.image}
                alt={item.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="mb-3 font-semibold text-[#170F49]">{item.title}</h3>
              <p className="text-[#292727]">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-[#44B6CA] text-white py-3 px-6 rounded-lg">Get Represented</button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteName;
