import { StyledBoardTable, StyledPaginationBar } from '@/styles/components/Board/Board';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '@/components/atoms/Board/Pagination';
import BasicButton from '@/components/atoms/Board/BasicButton';

function BoardTable(): React.ReactNode {
  type List = {
    userId: number;
    id: number;
    title: string;
  };

  const [data, setData] = useState<List[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // 페이지당 아이템 개수
  const pageCount = Math.ceil(data.length / itemsPerPage); // 전체 페이지 수

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<List[]>('https://jsonplaceholder.typicode.com/posts/');
        setData(data);
      } catch (e) {
        console.error('Error fetching data:', Error);
      }
    };
    fetchData();
  }, []);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const renderData = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
    return data.slice(startIndex, endIndex).map((item) => (
      <StyledBoardTable key={item.id} className="BoardTableList">
        <td>{item.id}</td>
        <td>
          <a href="/">{item.title}</a>
        </td>
        <td>{item.id}</td>
        <td>{item.id}</td>
        <td>{item.id}</td>
      </StyledBoardTable>
    ));
  };

  return (
    <>
      <StyledBoardTable>
        <thead>
          <tr className="BoardTableTitle">
            <th>번호</th>
            <th>제목</th>
            <th>작성일</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </StyledBoardTable>
      <StyledPaginationBar>
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        <BasicButton text="글쓰기" />
      </StyledPaginationBar>
    </>
  );
}

export default BoardTable;

// type List = {
//   number: string;
//   title: string;
//   date: string;
//   id: string;
//   view: string;
// };

// const Lists: List[] = [
//   {
//     number: '0',
//     title: '날씨가 좋네요',
//     date: '2024.04.01',
//     id: '지인',
//     view: '122',
//   },
//   {
//     number: '1',
//     title: '이불괴물아 살려줘',
//     date: '2024.04.01',
//     id: '태욱',
//     view: '5',
//   },
//   {
//     number: '2',
//     title: '경화야 벚꽃보러갈래?',
//     date: '2024.04.01',
//     id: '진성',
//     view: '72',
//   },
//   {
//     number: '3',
//     title: '누나한테 까불지말라했지',
//     date: '2024.04.01',
//     id: '경화',
//     view: '35',
//   },
// ];

{
  /* <tr key={item.userId} className="BoardTableList">
<td>{item.userId}</td>
<td>
  <a href="/">{item.title}</a>
</td>
<td>{item.id}</td>
<td>{item.id}</td>
<td>{item.id}</td>
</tr> */
}
