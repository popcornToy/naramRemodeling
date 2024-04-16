import DropdownMenu from '@/components/moleclues/Dropdown/DropdownMenu';
import { animate } from '@/store/store';
import { DropdownMenuNavContainer } from '@/styles/components/DropdownMenu/Dropdown';
import { useAtom } from 'jotai';

const INTRODUCE = [
  { content: 'CEO인사말', route: '/Introduction/#CEO' },
  { content: '연혁', route: '/Introduction/#year' },
  { content: '경영이념', route: '/Introduction/#idle' },
  { content: '찾아오시는 길', route: '/Introduction/location/#location' },
];

const INFORMATION = [
  { content: '공지사항', route: '/Information/notice' },
  { content: '나람 홍보 게시물', route: '/Information/ad' },
];

const PRODUCT = [
  { content: '양돈', route: '/Product/#pork' },
  { content: '계육', route: '/Product/#chicken' },
  { content: '오리', route: '/Product/#duck' },
];

const RECRUITMENT = [{ content: '채용정보', route: '/Recruitment/#info' }];

const CUSTOMER_CENTER = [
  {
    content: 'Q&A',
    route: '/CustomerCenter/#qna',
  },
];

type DropdownMenuNavProps = {
  isClicked: boolean;
};

export default function DropdownMenuNav({ isClicked }: DropdownMenuNavProps) {
  const [isAnimated] = useAtom(animate);
  return (
    <DropdownMenuNavContainer isClicked={isClicked} isAnimated={isAnimated}>
      <DropdownMenu title="회사소개" items={INTRODUCE} />
      <DropdownMenu title="정보센터" items={INFORMATION} />
      <DropdownMenu title="제품정보" items={PRODUCT} />
      <DropdownMenu title="인재채용" items={RECRUITMENT} />
      <DropdownMenu title="고객센터" items={CUSTOMER_CENTER} />
    </DropdownMenuNavContainer>
  );
}
