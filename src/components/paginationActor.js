import React from "react";

const Pagination = ({ actorPage, setActorPage, totalResults }) => {
  console.log("TOTAL RESULTS", totalResults);
  const nextPage = () => {
    if (actorPage > totalResults / 10) {
      setActorPage(actorPage);
    } else {
      setActorPage(actorPage + 1);
    }
  };

  const previousPage = () => {
    if (actorPage <= 1) {
      setActorPage(1);
    } else {
      setActorPage(actorPage - 1);
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
