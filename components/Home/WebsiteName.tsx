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
    <div className="container mx-auto mb-20 mt-0 md:mt-5 ">
      <h1 className="text-5xl font-bold text-center mb-10">How you&apos;ll use Website Name</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardItmes.map((item, index) => (
          <div key={index} className="bg-[#f0fdff] p-4 rounded-lg">
            <Image
              width={16}
              height={16}
              src={item.image}
              alt={item.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="mb-3 font-semibold">{item.title}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteName;
