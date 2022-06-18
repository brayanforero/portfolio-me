export function NavSkeleton() {
  return (
    <div className="fixed top-0 left-0 z-40 flex items-center justify-between w-full px-8 py-5 bg-white shadow-sm">
      <span className="p-4 rounded-full skeleton"></span>
      <div className="flex w-2/4 gap-4">
        <span className="flex-grow p-3 rounded-2xl skeleton"></span>
        <span className="flex-grow p-3 rounded-2xl skeleton"></span>
        <span className="flex-grow p-3 rounded-2xl skeleton"></span>
        <span className="flex-grow p-3 rounded-2xl skeleton"></span>
        <span className="flex-grow p-3 rounded-2xl skeleton"></span>
      </div>
    </div>
  )
}
