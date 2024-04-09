import { StyledBoardTable } from '@/styles/components/Board/Board';

function BoardTable(): React.ReactNode {
  type List = {
    number: string;
    title: string;
    date: string;
    id: string;
    view: string;
  };

  const Lists: List[] = [
    {
      number: '0',
      title: '날씨가 좋네요',
      date: '2024.04.01',
      id: '지인',
      view: '122',
    },
    {
      number: '1',
      title: '이불괴물아 살려줘',
      date: '2024.04.01',
      id: '태욱',
      view: '5',
    },
    {
      number: '2',
      title: '경화야 벚꽃보러갈래?',
      date: '2024.04.01',
      id: '진성',
      view: '72',
    },
    {
      number: '3',
      title: '누나한테 까불지말라했지',
      date: '2024.04.01',
      id: '경화',
      view: '35',
    },
  ];

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
          {Lists.map((list) => (
            <tr key={list.number} className="BoardTableList">
              <td>{list.number}</td>
              <td>{list.title}</td>
              <td>{list.date}</td>
              <td>{list.id}</td>
              <td>{list.view}</td>
            </tr>
          ))}
        </tbody>
      </StyledBoardTable>
    </>
  );
}

export default BoardTable;
