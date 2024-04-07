import NaviButton from '@/components/atoms/naviButton/NaviButton';
import { GNBContainer } from '@/styles/components/naviButton/naviButton';

export default function NaviBar({ isHeader }: { isHeader: boolean }) {
  return (
    <GNBContainer>
      <NaviButton text="회사소개" route="/Introduction" isHeader={isHeader} />
      <NaviButton text="정보센터" route="/InformationCenter" isHeader={isHeader} />
      <NaviButton text="제품정보" route="/ProductInformation" isHeader={isHeader} />
      <NaviButton text="인재채용" route="/Recruitment" isHeader={isHeader} />
      <NaviButton text="고객센터" route="/" isHeader={isHeader} />
    </GNBContainer>
  );
}
