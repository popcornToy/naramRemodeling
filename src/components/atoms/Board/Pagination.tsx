import { StyledPagination } from '@/styles/components/Board/Pagination';

type pagination = {
  handlePageClick: any;
};

const Pagination = ({ handlePageClick }: pagination) => {
  return (
    <StyledPagination
      pageCount={Math.ceil(100 / 10)}
      pageRangeDisplayed={3}
      breakLabel="..."
      previousLabel={'이전'}
      nextLabel={'다음'}
      onPageChange={handlePageClick}
      containerClassName={'pagination-ul'}
      activeClassName={'currentPage'}
      previousClassName={'pageLabel-btn'}
      nextClassName={'pageLabel-btn'}
    />
  );
};

export default Pagination;
