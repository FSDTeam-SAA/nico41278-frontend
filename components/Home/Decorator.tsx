import Image from "next/image";

const Decorator = () => {
  return (
    <div className=" relative h-[170px]">
      <div className=" absolute -bottom-28 left-0 h-[325px] w-[162px] hidden lg:block">
        <Image
          src={"/decorator.png"}
          alt="faq-arrow"
          width={1000}
          height={800}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Decorator;
