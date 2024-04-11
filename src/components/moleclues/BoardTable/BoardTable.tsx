import { StyledBoardTable } from '@/styles/components/Board/Board';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BoardTable(): React.ReactNode {
  type List = {
    userId: number;
    id: number;
    title: string;
  };

  // type List = {
  //   number: string;
  //   title: string;
  //   date: string;
  //   id: string;
  //   view: string;
  // };

  const [data, setData] = useState<List[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<List[]>('https://jsonplaceholder.typicode.com/posts/');
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

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
        <tbody>
          {data.map((list: List) => (
            <tr key={list.userId} className="BoardTableList">
              <td>{list.userId}</td>
              <td>
                <a href="/">{list.title}</a>
              </td>
              <td>{list.id}</td>
              <td>{list.id}</td>
              <td>{list.id}</td>
            </tr>
          ))}
        </tbody>
      </StyledBoardTable>
    </>
  );
}

export default BoardTable;
