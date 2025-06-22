export function Header() {
  return (
    <header className="bg-dashprimary text-white px-6 py-4">
      <div className="flex items-center justify-end">
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="font-medium">Mr. Raja</div>
            <div className="text-sm text-teal-100">@admin</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center">
            <span className="text-white font-medium">R</span>
          </div>
        </div>
      </div>
    </header>
  )
}
