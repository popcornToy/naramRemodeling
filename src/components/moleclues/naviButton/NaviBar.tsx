import NaviButton from '@/components/atoms/naviButton/NaviButton';
import { GNBContainer } from '@/styles/components/naviButton/naviButton';

type NaviBarProps = {
  isHeader: boolean;
  color: 'gray' | 'black' | 'white';
  justifyContent: 'start' | 'end';
};

export default function NaviBar({ isHeader, color, justifyContent }: NaviBarProps) {
  return (
    <GNBContainer justifyContent={justifyContent}>
      <li>
        <NaviButton text="회사소개" route="/CompanyIntroduction/Introduction" isHeader={isHeader} color={color} />
      </li>
      <li>
        <NaviButton text="정보센터" route="/InformationCenter" isHeader={isHeader} color={color} />
      </li>
      <li>
        <NaviButton text="제품정보" route="/ProductInformation" isHeader={isHeader} color={color} />
      </li>
      <li>
        <NaviButton text="인재채용" route="/Recruitment" isHeader={isHeader} color={color} />
      </li>
      <li>
        <NaviButton text="고객센터" route="/" isHeader={isHeader} color={color} />
      </li>
    </GNBContainer>
  );
}
