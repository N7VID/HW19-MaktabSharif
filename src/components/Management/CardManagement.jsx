import { useSearchParams } from "react-router-dom";
import Button from "../Button/Button";
import { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";

export default function CardManagement() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInputValue, setSearchInputValue] = useState(
    searchParams.get("name_like") || ""
  );
  const [selectedDuration, setSelectedDuration] = useState(
    searchParams.get("_order") || ""
  );

  const categories = searchParams.getAll("category");
  const isCheckedOthers = categories.includes("Others");
  const isCheckedDesktop = categories.includes("Desktop");
  const isCheckedMobile = categories.includes("Mobile");
  const isCheckedWeb = categories.includes("Web");

  function handleSearchInput(e) {
    const value = e.target.value;
    setSearchInputValue(value);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (value) {
        params.set("name_like", e.target.value);
        return params;
      } else {
        params.delete("name_like");
        return params;
      }
    });
  }

  function handleSelectOption(e) {
    const value = e.target.value;
    setSelectedDuration(value);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (value) {
        params.set("_sort", "Hours");
        params.set("_order", e.target.value);
        return params;
      } else {
        params.delete("_sort");
        params.delete("_order");
        return params;
      }
    });
  }

  function handleCheckBox(e) {
    if (e.target.checked) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.append("category", e.target.value);
        return params;
      });
    } else {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.delete("category", e.target.value);
        return params;
      });
    }
  }

  function handleResetButton() {
    setSearchParams(new URLSearchParams());
    setSearchInputValue("");
    setSelectedDuration("");
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
            className="py-2 pl-2 rounded-lg border border-black w-full"
            onChange={handleSearchInput}
            value={searchInputValue}
          />
        </div>

        <select
          value={selectedDuration}
          name="Duration"
          id="Duration"
          className="py-2 border border-black rounded-lg px-2"
          onChange={handleSelectOption}
        >
          <option value="">All Courses</option>
          <option value="asc">Shortest Courses</option>
          <option value="desc">Longest Courses</option>
        </select>

        <div className="flex justify-center items-center gap-2 bg-white py-2 px-2 border border-black rounded-lg">
          <CheckBox
            onChange={handleCheckBox}
            checked={isCheckedWeb}
            value={"Web"}
          />
          <CheckBox
            onChange={handleCheckBox}
            checked={isCheckedMobile}
            value={"Mobile"}
          />
          <CheckBox
            onChange={handleCheckBox}
            checked={isCheckedDesktop}
            value={"Desktop"}
          />
          <CheckBox
            onChange={handleCheckBox}
            checked={isCheckedOthers}
            value={"Others"}
          />
        </div>

        <div className="my-3">
          <Button variant={"card"} onClick={handleResetButton}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
