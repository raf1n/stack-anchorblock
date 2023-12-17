import React from "react";

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div className="flex border-t justify-between p-3 items-center">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className="flex items-center gap-2 border px-4 py-2 rounded-lg border-gray-300 shadow-sm text-gray-600"
      >
        Previous
      </button>
      <p className="text-gray-600">Page 1 of 10</p>
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 border px-4 py-2 rounded-lg border-gray-300 shadow-sm text-gray-600"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
