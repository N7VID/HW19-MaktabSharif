export default function SinglePageSkeleton() {
  return (
    <section className="flex justify-between pt-[100px] bg-mainBg">
      <div className="flex-grow flex justify-center items-center">
        <div className="flex flex-col gap-16 cursor-default w-[600px]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-slate-300 animate-pulse rounded-lg"></div>
            <div className="w-64 h-8 bg-slate-300 animate-pulse rounded-lg"></div>
          </div>
          <div className="w-[500px] h-20 bg-slate-300 animate-pulse rounded-lg"></div>
          <div className="flex flex-col gap-1">
            <div className="w-72 h-3 bg-slate-300 animate-pulse rounded-md"></div>
            <div className="w-72 h-3 bg-slate-300 animate-pulse rounded-md"></div>
            <div className="w-72 h-3 bg-slate-300 animate-pulse rounded-md"></div>
            <div className="w-32 h-3 bg-slate-300 animate-pulse rounded-md"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 h-10 bg-slate-300 animate-pulse rounded-lg"></div>
            <div className="w-32 h-10 bg-slate-300 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="w-[727px] h-[613px] bg-slate-300 animate-pulse"></div>
    </section>
  );
}
