import {
  StyledDetailTitleContainer,
  StyledDetailTitleWrapper,
  StyledFileWrapper,
  StyledDetailSubTitle,
} from '@/styles/components/Board/BoardDetail';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type List = {
  userId: number;
  id: number;
  title: string;
};

function DetailTitle() {
  const { id } = useParams();
  console.log({ id });
  const [data, setData] = useState<List[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<List[]>(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setData(response.data);
      } catch (error) {
        console.log('error:', error);
        setData([]);
      }
    }

    fetchData();
  }, [id]);

  return (
    <StyledDetailTitleContainer>
      <StyledDetailTitleWrapper>
        <div>{data.title}</div>
        <StyledDetailSubTitle key={data.id}>
          {data.id} | {data.userId} | {data.id}
        </StyledDetailSubTitle>
      </StyledDetailTitleWrapper>
      <StyledFileWrapper>
        <img src="/public/file.svg" alt="파일첨부" />
        <div>첨부파일 제목</div>
      </StyledFileWrapper>
    </StyledDetailTitleContainer>
  );
}

export default DetailTitle;
