import {
  StyledDetailTitleContainer,
  StyledDetailTitleWrapper,
  StyledFileWrapper,
  StyledDetailSubTitle,
} from '@/styles/components/Board/BoardDetail';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

type List = {
  userId: number;
  id: number;
  title: string;
  important: boolean;
};

// async function fetchData(): Promise<List[]> {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
//     return response.data;
//   } catch (error) {
//     console.log('error:', error);
//     return [];
//   }
// }

function DetailTitle() {
  //   const [data, setData] = useState<List[]>([]);

  //   useEffect(() => {
  //     fetchData().then((fetchedData) => {
  //       setData(fetchedData);
  //     });
  //   }, []);

  return (
    <StyledDetailTitleContainer>
      <StyledDetailTitleWrapper>
        <div>제목이 들어가는 란입니다.</div>
        {data.map((item) => (
          <StyledDetailSubTitle key={item.id}>
            {item.id} | {item.userId} | {item.id}
          </StyledDetailSubTitle>
        ))}
      </StyledDetailTitleWrapper>
      <StyledFileWrapper>
        <img src="/public/file.svg" alt="파일첨부" />
        <div>첨부파일 제목</div>
      </StyledFileWrapper>
    </StyledDetailTitleContainer>
  );
}

export default DetailTitle;
