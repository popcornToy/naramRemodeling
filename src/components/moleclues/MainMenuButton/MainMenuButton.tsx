import NaviButton from '@/components/atoms/naviButton/NaviButton';
import { MenuButtonContainer } from '@/styles/components/MainMenuButton/MainMenuButton';

export default function MainMenuButton({ isHeader }: { isHeader: boolean }) {
  return (
    <MenuButtonContainer>
      <NaviButton text="회사소개" route="/" isHeader={isHeader} />
      <div className="divider" />
      <NaviButton text="정보센터" route="/" isHeader={isHeader} />
      <div className="divider" />
      <NaviButton text="제품정보" route="/" isHeader={isHeader} />
      <div className="divider" />
      <NaviButton text="인재채용" route="/" isHeader={isHeader} />
      <div className="divider" />
      <NaviButton text="고객센터" route="/" isHeader={isHeader} />
    </MenuButtonContainer>
  );
}
