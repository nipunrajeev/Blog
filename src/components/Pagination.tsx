import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export function Pagination({ pageCount, onPageChange }: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName="flex gap-2 justify-center mt-8"
      pageClassName="px-3 py-1 rounded border dark:border-gray-700"
      activeClassName="bg-indigo-600 text-white border-indigo-600"
      previousClassName="px-3 py-1 rounded border dark:border-gray-700"
      nextClassName="px-3 py-1 rounded border dark:border-gray-700"
      disabledClassName="opacity-50 cursor-not-allowed"
    />
  );
}