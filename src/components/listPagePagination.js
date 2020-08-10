import React from "react";

const ListPagePagination = ({ actorPage, setListPage, listPage }) => {
  const nextPage = () => {
    setListPage(listPage + 1);
  };

  const previousPage = () => {
    if (listPage <= 1) {
      setListPage(1);
    } else {
      setListPage(listPage - 1);
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

export default ListPagePagination;
