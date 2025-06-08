// src/components/PaginationControls.jsx
import React from 'react';
import { Pagination } from 'react-bootstrap';

function PaginationControls({ currentPage, totalPages, onPageChange }) {
  const items = [];

  // For simplicity, show up to 5 page items: currentPage - 2 ... currentPage + 2
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  if (currentPage > 1) {
    items.push(
      <Pagination.Prev
        key="prev"
        onClick={() => onPageChange(currentPage - 1)}
      />
    );
  }

  for (let page = startPage; page <= endPage; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => onPageChange(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  if (currentPage < totalPages) {
    items.push(
      <Pagination.Next
        key="next"
        onClick={() => onPageChange(currentPage + 1)}
      />
    );
  }

  return <Pagination>{items}</Pagination>;
}

export default PaginationControls;
