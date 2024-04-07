import NaviButton from '@/components/atoms/naviButton/NaviButton';
import { GNBContainer } from '@/styles/components/naviButton/naviButton';
import { useLocation } from 'react-router-dom';

type NaviBarProps = {
  isHeader: boolean;
  justifyContent: 'start' | 'end';
  isLast?: boolean;
  color?: 'gray' | 'black' | 'white';
};

export default function NaviBar({ isHeader, justifyContent, color }: NaviBarProps) {
  // 현재페이지 pathname을 가져오기 위해 useLocation 사용
  const { pathname } = useLocation();

  // 현재페이지 pathname을 확인하여 색상을 결정하는 함수
  const decideColor = (route: string) => {
    if (isHeader) {
      return color || 'black';
    } else if (!isHeader && pathname === route) {
      return 'black';
    }
    return 'gray';
  };
  return (
    <GNBContainer justifyContent={justifyContent}>
      <li>
        <NaviButton text="회사소개" route="/Introduction" isHeader={isHeader} color={decideColor('/Introduction')} />
      </li>
      <li>
        <NaviButton
          text="정보센터"
          route="/InformationCenter"
          isHeader={isHeader}
          color={decideColor('/InformationCenter')}
        />
      </li>
      <li>
        <NaviButton
          text="제품정보"
          route="/ProductInformation"
          isHeader={isHeader}
          color={decideColor('/ProductInformation')}
        />
      </li>
      <li>
        <NaviButton text="인재채용" route="/Recruitment" isHeader={isHeader} color={decideColor('/Recruitment')} />
      </li>
      <li>
        <NaviButton text="고객센터" route="/" isHeader={isHeader} color={decideColor('/')} isLast />
      </li>
    </GNBContainer>
  );
}
