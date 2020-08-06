import React from "react";

const Pagination = ({ setPage }) => {
  return (
    <div className="pagination-container">
      <span onClick={() => setPage(1)} className="pagination-dugme">
        1
      </span>
      <span onClick={() => setPage(2)} className="pagination-dugme">
        2
      </span>
      <span onClick={() => setPage(3)} className="pagination-dugme">
        3
      </span>
      <span onClick={() => setPage(4)} className="pagination-dugme">
        4
      </span>
    </div>
  );
};

export default Pagination;
