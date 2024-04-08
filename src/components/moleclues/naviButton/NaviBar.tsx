import NaviButton from '@/components/atoms/naviButton/NaviButton';
import { GNBContainer } from '@/styles/components/naviButton/naviButton';

type NaviBarProps = {
  color: 'black' | 'white';
  isMain?: boolean;
};

export default function NaviBar({ color, isMain }: NaviBarProps) {
  return (
    <GNBContainer isMain={isMain}>
      <li>
        <NaviButton text="회사소개" route="/Introduction" color={color} />
      </li>
      <li>
        <NaviButton text="정보센터" route="/InformationCenter" color={color} />
      </li>
      <li>
        <NaviButton text="제품정보" route="/ProductInformation" color={color} />
      </li>
      <li>
        <NaviButton text="인재채용" route="/Recruitment" color={color} />
      </li>
      <li>
        <NaviButton text="고객센터" route="/CustomerService" color={color} />
      </li>
      <li>
        <NaviButton text="로그인" route="/CustomerService" color={color} />
      </li>
    </GNBContainer>
  );
}
