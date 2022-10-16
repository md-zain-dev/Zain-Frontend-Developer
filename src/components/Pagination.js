import React from "react";

const Pagination = ({ page, totalPages, onPageChange }) => {
  const handleClick = (pageNo) => {
    onPageChange(pageNo);
  };
  return (
    <div className="flex justify-center items-center w-full pt-10">
      <nav aria-label="Page navigation">
        <ul className="inline-flex">
          <li>
            <button
              className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              disabled={page > 1 ? false : true}
              onClick={() => handleClick(page - 1)}
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages).keys()].map((pageNumber) => {
            return page == pageNumber + 1 ? (
              <li key={pageNumber}>
                <button className="py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                  {pageNumber + 1}
                </button>
              </li>
            ) : (
              <li key={pageNumber}>
                <button
                  className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => handleClick(pageNumber + 1)}
                >
                  {pageNumber + 1}
                </button>
              </li>
            );
          })}
          <li>
            <button
              className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              disabled={page < totalPages ? false : true}
              onClick={() => handleClick(page + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
