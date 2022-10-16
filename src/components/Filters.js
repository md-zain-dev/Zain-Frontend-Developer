import React, { useState } from "react";
import Listing from "./Listing";
import useShips from "../hooks/useShips";
import Pagination from "../components/Pagination";
import ReactLoading from "react-loading";
import axios from "axios";
import { SHIPS_API_URL } from "../api/ApiConstants";

const Filters = () => {
  const LISTING_PER_PAGE = 9;
  const shipsData = useShips();
  const [searchString, setSearchString] = useState("");
  const [searchFilter, setSearchFilter] = useState({
    type: false,
    name: false,
    shipStatus: false,
  });
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(shipsData.totalCount / LISTING_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const formSubmit = () => {
    if (searchString.length < 1) {
      alert("Please add something to search bar");
    } else {
      fetchData(
        0,
        searchString,
        searchFilter.type,
        searchFilter.name,
        searchFilter.shipStatus
      );
      setPage(1);
    }
  };

  const fetchData = async (
    offset = 0,
    searchStr = "",
    type = false,
    name = false,
    shipStatus = false
  ) => {
    setIsLoading(true);
    const response = await axios.get(SHIPS_API_URL, {
      params: {
        offset,
        ...(type ? { ship_type: searchStr } : {}),
        ...(name ? { ship_name: searchStr } : {}),
        ...(shipStatus ? { ship_status: searchStr } : {}),
      },
    });

    const { status, data } = response;

    if (status === 200) {
      shipsData.data = data;
      if (searchStr.length > 0) {
        shipsData.totalCount = data.length;
      }
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-center">
        <ReactLoading type="spinningBubbles" color="blue" />
      </div>
    );
  }

  return (
    <section id="spx-filters">
      <div className="container mx-auto flex items-center flex-wrap">
        <form
          className="w-full p-6"
          onSubmit={(e) => {
            e.preventDefault();
            formSubmit();
          }}
        >
          <div className="flex flex-wrap">
            <label className="inline-flex items-center md:mr-0 mr-3 md:w-1/6">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                checked={searchFilter.type}
                onChange={() => {
                  setSearchFilter({
                    ...searchFilter,
                    type: !searchFilter.type,
                  });
                }}
              />
              <span className="ml-2 text-gray-700">Type</span>
            </label>
            <label className="inline-flex items-center md:mr-0 mr-3 md:w-1/6">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                checked={searchFilter.name}
                onChange={() => {
                  setSearchFilter({
                    ...searchFilter,
                    name: !searchFilter.name,
                  });
                }}
              />
              <span className="ml-2 text-gray-700">Name</span>
            </label>
            <label className="inline-flex items-center md:mr-0 mr-3 md:w-1/6">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                checked={searchFilter.shipStatus}
                onChange={() => {
                  setSearchFilter({
                    ...searchFilter,
                    shipStatus: !searchFilter.shipStatus,
                  });
                }}
              />
              <span className="ml-2 text-gray-700">Status</span>
            </label>
            <div className="relative col-span-4 w-full md:w-1/2">
              <input
                id="search-dropdown"
                type="search"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Ships..."
                required=""
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <div className="pt-4 pb-12 flex items-center flex-wrap">
          {shipsData.data.length ? (
            shipsData.data.map((shipData, index) => {
              if (index < LISTING_PER_PAGE) {
                return <Listing key={index} shipData={shipData} />;
              }
            })
          ) : (
            <div>No Result</div>
          )}
          {shipsData.data.length && totalPage > 1 && (
            <Pagination
              page={page}
              onPageChange={(pageNo) => {
                fetchData(
                  (pageNo - 1) * LISTING_PER_PAGE,
                  searchString,
                  searchFilter.type,
                  searchFilter.name,
                  searchFilter.shipStatus
                );
                setPage(pageNo);
              }}
              totalPages={totalPage}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Filters;
