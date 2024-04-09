// import { useState } from 'react';
// import PaginationComponent from 'react-js-pagination';

// type PaginationProps = {
//   activePage: number;
//   itemsCountPerPage: number;
//   totalItemsCount: number;
//   pageRangeDisplayed: number;
//   prevPageText: string;
//   nextPageText: string;
//   onChange: (page: number) => void;
// };

// const Pagination = () => {
//   const [page, setPage] = useState(1);

//   const handlePageChange = (page: number) => {
//     setPage(page);
//   };

//   return (
//     <PaginationComponent
//       activePage={page} // 현재 페이지
//       itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
//       totalItemsCount={450} // 총 아이템 갯수
//       pageRangeDisplayed={5} // paginator의 페이지 범위
//       prevPageText={'‹'} // "이전"을 나타낼 텍스트
//       nextPageText={'›'} // "다음"을 나타낼 텍스트
//       onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
//     />
//   );
// };

// export default Pagination;

function Pagination() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <>
      <div>1 | 2 | 3 | 4 | 5 </div>
    </>
  );
}

export default Pagination;
