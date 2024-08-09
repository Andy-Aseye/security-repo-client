import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalRecords,
}) => {
  const navigateToPage = (page) => {
    onPageChange(page);
  };

  const handleKeyDown = (event, page) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigateToPage(page);
    }
  };

  const renderPaginationNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3;
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i}>
          <button
            className={`px-3 py-2 rounded-md ${
              currentPage === i
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => onPageChange(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            tabIndex={0}
          >
            {i}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  const renderPagination = () => {
    const itemsPerPage = 10;
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalRecords);

    return (
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3">
        <div className="mb-4 md:mb-0 text-center">
          <h6 className="text-sm text-gray-700">
            {startItem.toLocaleString()}-{endItem.toLocaleString()} of{" "}
            {totalRecords?.toLocaleString()} records
          </h6>
        </div>
        <nav aria-label="Page navigation">
          <ul className="flex items-center space-x-1">
            <li>
              <button
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => navigateToPage(1)}
                onKeyDown={(e) => handleKeyDown(e, 1)}
                tabIndex={0}
                aria-label="First page"
              >
                <ChevronsLeft size={16} />
              </button>
            </li>
            <li>
              <button
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => navigateToPage(Math.max(1, currentPage - 1))}
                onKeyDown={(e) =>
                  handleKeyDown(e, Math.max(1, currentPage - 1))
                }
                tabIndex={0}
                aria-label="Previous page"
              >
                <ChevronLeft size={16} />
              </button>
            </li>
            {renderPaginationNumbers()}
            <li>
              <button
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() =>
                  navigateToPage(Math.min(totalPages, currentPage + 1))
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, Math.min(totalPages, currentPage + 1))
                }
                tabIndex={0}
                aria-label="Next page"
              >
                <ChevronRight size={16} />
              </button>
            </li>
            <li>
              <button
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => navigateToPage(totalPages)}
                onKeyDown={(e) => handleKeyDown(e, totalPages)}
                tabIndex={0}
                aria-label="Last page"
              >
                <ChevronsRight size={16} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  return <div>{renderPagination()}</div>;
};

export default Pagination;
