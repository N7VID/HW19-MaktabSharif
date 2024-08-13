import { useSearchParams } from "react-router-dom";

export default function CardManagement() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearchInput(e) {
    if (e.target.value) {
      setSearchParams((prev) => {
        prev.set("name_like", e.target.value);
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.delete("name_like");
        return prev;
      });
    }
  }

  function handleSelectOption(e) {
    if (e.target.value) {
      setSearchParams((prev) => {
        prev.set("_sort", "Hours");
        prev.set("_order", e.target.value);
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.delete("_sort");
        prev.delete("_order");
        return prev;
      });
    }
  }

  return (
    <div className="flex flex-col cursor-default">
      <h1 className="text-3xl font-semibold pb-8">{`<Boot Camps/>`}</h1>
      <div className="gap-3 flex flex-col">
        <div className="relative">
          <img
            src="/search icon.svg"
            alt="searchIcon"
            className="w-8 absolute top-1 right-2"
          />
          <input
            type="text"
            placeholder="Search"
            className="py-2 pl-2 rounded-lg border-2 border-black w-full"
            onChange={handleSearchInput}
          />
        </div>
        <select
          name="Duration"
          id="Duration"
          className="py-2 border-2 border-black rounded-lg px-2"
          onChange={handleSelectOption}
        >
          <option value="">All Courses</option>
          <option value="asc">Shortest Courses</option>
          <option value="desc">Longest Courses</option>
        </select>

        <div className="flex justify-center items-center gap-3 bg-white py-2 px-2 border-2 border-black rounded-lg">
          <div className="flex items-center gap-2">
            <label htmlFor="Web">Web</label>
            <input
              type="checkbox"
              id="Web"
              className="accent-[#ffab0b]"
              value={"Web"}
              onChange={(e) => console.log(e.target.checked)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="Mobile">Mobile</label>
            <input type="checkbox" id="Mobile" className="accent-[#ffab0b]" />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="Desktop">Desktop</label>
            <input type="checkbox" id="Desktop" className="accent-[#ffab0b]" />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="Others">Others</label>
            <input type="checkbox" id="Others" className="accent-[#ffab0b]" />
          </div>
        </div>
      </div>
    </div>
  );
}
