import { useSearchParams } from "react-router-dom";

export default function Pagination({ totalItems, itemsPerPage }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  function getPageNumbers() {
    const pages = [];
    const maxPagesToShow = 5;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(currentPage - halfMaxPagesToShow, 1);
      let endPage = Math.min(currentPage + halfMaxPagesToShow, totalPages);

      if (startPage === 1) {
        endPage = maxPagesToShow;
      } else if (endPage === totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (startPage > 1) {
        if (startPage - 1 >= 2) {
          pages.unshift("...");
        }
        pages.unshift(1);
      }
      if (endPage < totalPages) {
        if (totalPages - endPage !== 1) pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        className="desktop:w-10 desktop:h-10 tablet:w-9 tablet:h-9 w-6 h-6 transition hover:bg-slate-200 flex items-center justify-center rounded-full"
        onClick={() =>
          setSearchParams((prev) => {
            const newPage = Math.max(1, currentPage - 1);
            prev.set("page", newPage);
            return prev;
          })
        }
        disabled={currentPage === 1}
      >
        <img
          src={`/left-black.svg`}
          className="desktop:w-6 tablet:w-5 w-4"
          alt=""
        />
      </button>
      <div className="flex items-center desktop:gap-4 tablet:gap-4 gap-2 shadow-lg desktop:min-w-64 tablet:min-w-64 min-w-40 justify-center py-[6px] rounded-xl desktop:px-6 tablet:px-6s px-2 bg-white desktop:text-lg">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            disabled={page === "..."}
            onClick={() => {
              setSearchParams((prev) => {
                prev.set("page", page);
                return prev;
              });
            }}
            className={`desktop:w-8 desktop:h-8 tablet:w-6 tablet:h-6 w-5 h-5 rounded-full text-center flex justify-center items-center ${
              currentPage === page && page !== "..."
                ? "btn-primary text-white"
                : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="desktop:w-10 desktop:h-10 tablet:w-10 tablet:h-10 w-6 h-6 transition hover:bg-slate-200 flex items-center justify-center rounded-full"
        onClick={() =>
          setSearchParams((prev) => {
            const newPage = Math.min(totalPages, currentPage + 1);
            prev.set("page", newPage);
            return prev;
          })
        }
        disabled={currentPage === totalPages}
      >
        <img
          src={`/right-black.svg`}
          className="desktop:w-6 tablet:w-5 w-4"
          alt=""
        />
      </button>
    </div>
  );
}
