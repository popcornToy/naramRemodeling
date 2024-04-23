import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StyledMoveToPageWrapper, StyledMoveTopageIcon } from '@/styles/components/Board/BoardDetail';

type MoveToPageProps = {
  id: string;
  userId: string;
  title: string;
};

function MoveToPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<MoveToPageProps | null>(null);
  const [prevPost, setPrevPost] = useState<MoveToPageProps | null>(null);
  const [nextPost, setNextPost] = useState<MoveToPageProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.log('error:', error);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    if (!post) return;

    async function fetchAdjacentPosts() {
      try {
        const prevResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Number(id) - 1}`);
        setPrevPost(prevResponse.data);
      } catch (error) {
        console.log('Previous post not found');
      }

      try {
        const nextResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Number(id) + 1}`);
        setNextPost(nextResponse.data);
      } catch (error) {
        console.log('Next post not found');
      }
    }

    fetchAdjacentPosts();
  }, [id, post]);

  return (
    <div>
      <StyledMoveToPageWrapper>
        <StyledMoveTopageIcon>
          <img src="/public/up_icon.svg" alt="이전글" />
          {prevPost && <Link to={`/BoardDetail/${prevPost.id}`}>이전글</Link>}
        </StyledMoveTopageIcon>
        <div>{prevPost && <Link to={`/BoardDetail/${prevPost.id}`}>{prevPost.title}</Link>}</div>
        <div>{prevPost && <Link to={`/BoardDetail/${prevPost.id}`}>{prevPost.userId}</Link>}</div>
      </StyledMoveToPageWrapper>
      <StyledMoveToPageWrapper>
        <StyledMoveTopageIcon>
          <img src="/public/down_icon.svg" alt="다음글" />
          {nextPost && <Link to={`/BoardDetail/${nextPost.id}`}>다음글</Link>}{' '}
        </StyledMoveTopageIcon>
        <div>{nextPost && <Link to={`/BoardDetail/${nextPost.id}`}>{nextPost.title}</Link>}</div>
        <div>{nextPost && <Link to={`/BoardDetail/${nextPost.id}`}>{nextPost.userId}</Link>}</div>
      </StyledMoveToPageWrapper>
    </div>
  );
}

export default MoveToPage;
