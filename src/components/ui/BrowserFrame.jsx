export default function BrowserFrame({ children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-soft ${className}`}>
      <div className="flex items-center gap-2 border-b border-ink/10 bg-paper px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F26A5B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F7C75C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5EC98C]" />
      </div>
      {children}
    </div>
  )
}
