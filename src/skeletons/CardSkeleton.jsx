export default function CardSkeleton() {
  return (
    <div
      className="bg-white shadow-lg rounded-lg flex justify-center flex-col items-center
py-4 px-8 w-64 h-[450px] gap-4 cursor-default"
    >
      <div className="text-2xl font-semibold w-28 h-8 bg-slate-300 animate-pulse rounded-lg"></div>
      <div className="w-28 h-28 bg-slate-300 animate-pulse rounded-lg"></div>
      <div className="flex flex-col gap-2 my-7">
        <p className="justify-center w-28 h-4 text-center bg-slate-300 animate-pulse rounded-lg"></p>
        <p className="justify-center w-28 h-4 text-center bg-slate-300 animate-pulse rounded-lg"></p>
        <p className="justify-center w-28 h-4 text-center bg-slate-300 animate-pulse rounded-lg"></p>
        <p className="justify-center w-28 h-4 text-center bg-slate-300 animate-pulse rounded-lg"></p>
        <p className="justify-center w-16 h-4 text-center bg-slate-300 animate-pulse rounded-lg"></p>
      </div>
      <div className="h-14 w-44 rounded-xl text-xl bg-slate-300 animate-pulse"></div>
    </div>
  );
}
