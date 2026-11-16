export default function DeviceFrame({ children, className = '', phone = false }) {
  return (
    <div className={`${phone ? 'mx-auto max-w-[220px]' : 'w-full'} ${className}`}>
      <div className={`${phone ? 'rounded-[30px] border border-ink/10 bg-[#0d0f13] p-3 shadow-soft' : 'overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-soft'}`}>
        {children}
      </div>
    </div>
  )
}
