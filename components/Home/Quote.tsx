export default function Quote() {
  return (
    <div className="flex  container items-center justify-center bg-white p-4 md:p-6">
      <div className="relative flex h-64 w-full  items-center justify-center rounded-lg bg-[#e0f2fe] p-8 text-center shadow-lg md:h-80">
        {/* Top-left decorative elements */}
        <div className="absolute  left-7 -top-10 flex  gap-1">
          <div className="h-[99px] w-[49px] bg-[#42A3B2]" />
          <div className="h-[99px] w-[49px] bg-[#7EECFF]" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">Say Something</h2>

        {/* Bottom-right decorative elements */}
        <div className="absolute -bottom-10 right-7 flex  gap-1">
          <div className="h-[99px] w-[49px] bg-[#7EECFF]" />
          <div className="h-[99px] w-[49px] bg-[#42A3B2]" />
        </div>
      </div>
    </div>
  )
}
