import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function Faq() {
  return (
    <div className="mb-32 relative">
      {/* <div className=" absolute top-4 right-32 h-[1000px] w-[500px]">
        <Image
          src={"/faq-arrow.png"}
          alt="faq-arrow"
          width={1000}
          height={800}
          className="h-full w-full"
        />
      </div> */}

      <div className="container mx-auto relative z-10">
        {/* FAQ Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          FAQ&apos;s
        </h1>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="item-1"
            className="bg-[#F8F8F8] rounded-lg border border-gray-200 px-6 data-[state=open]:border-l-4 data-[state=open]:border-l-[#311FD4] data-[state=open]:bg-[linear-gradient(259.88deg,#FFFFFF_-29.31%,#F4F5FF_60.8%)]"
          >
            <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-6 data-[state=open]:text-[#311FD4]">
              What is your favorite template from BRIX Templates?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              This is placeholder content for the first FAQ item.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="bg-[#F8F8F8] rounded-lg border border-gray-200 px-6 data-[state=open]:border-l-4 data-[state=open]:border-l-[#311FD4] data-[state=open]:bg-[linear-gradient(259.88deg,#FFFFFF_-29.31%,#F4F5FF_60.8%)]"
          >
            <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-6 data-[state=open]:text-[#311FD4]">
              What is your favorite template from BRIX Templates?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              This is placeholder content for the second FAQ item.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="bg-[#F8F8F8] rounded-lg border border-gray-200 px-6 data-[state=open]:border-l-4 data-[state=open]:border-l-[#311FD4] data-[state=open]:bg-[linear-gradient(259.88deg,#FFFFFF_-29.31%,#F4F5FF_60.8%)]"
          >
            <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-6 data-[state=open]:text-[#311FD4]">
              What is your favorite template from BRIX Templates?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              This is placeholder content for the third FAQ item.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="bg-[#F8F8F8] rounded-lg border border-gray-200 px-6 data-[state=open]:border-l-4 data-[state=open]:border-l-[#311FD4] data-[state=open]:bg-[linear-gradient(259.88deg,#FFFFFF_-29.31%,#F4F5FF_60.8%)]"
          >
            <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-6 data-[state=open]:text-[#311FD4]">
              What is your favorite template from BRIX Templates?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              This is placeholder content for the fourth FAQ item.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="bg-[#F8F8F8] rounded-lg border border-gray-200 px-6 data-[state=open]:border-l-4 data-[state=open]:border-l-[#311FD4] data-[state=open]:bg-[linear-gradient(259.88deg,#FFFFFF_-29.31%,#F4F5FF_60.8%)]"
          >
            <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-6 data-[state=open]:text-[#311FD4]">
              What is Webflow and why is it the best website builder?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
              Webflow is a powerful visual development platform that allows
              designers to build fully responsive websites without writing a
              single line of code. It combines the flexibility of code with the
              simplicity of a visual editor, empowering creators to bring their
              ideas to life faster and more efficiently than ever before.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
