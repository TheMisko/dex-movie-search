import React from "react";

const Pagination = ({ setDocumentaryPage, documentaryPage, totalResults }) => {
  const nextPage = () => {
    if (documentaryPage > totalResults / 10) {
      setDocumentaryPage(documentaryPage);
    } else {
      setDocumentaryPage(documentaryPage + 1);
    }
  };

  const previousPage = () => {
    if (documentaryPage <= 1) {
      setDocumentaryPage(1);
    } else {
      setDocumentaryPage(documentaryPage - 1);
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
