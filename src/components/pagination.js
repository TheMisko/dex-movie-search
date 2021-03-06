import React from "react";

const Pagination = ({ setPage, page, totalResults }) => {
  console.log("TOTAL RESULTS", totalResults);
  const nextPage = () => {
    if (page > totalResults / 10) {
      setPage(page);
    } else {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };
  return (
    <div className="pagination-container">
      <a
        onClick={() => previousPage()}
        class="arrow arrow-left"
        title="Previous"
        href="javascript:;"
      ></a>
      <div className="arrow-space"></div>
      <a
        onClick={() => nextPage()}
        class="arrow arrow-right"
        title="Next"
        href="javascript:;"
      ></a>
    </div>
  );
};

export default Pagination;
