import { Link } from 'react-router-dom';
import { GNBTitle } from '@/styles/components/naviButton/naviButton';

type NaviButtonProps = {
  route: string;
  text: string;
  isHeader?: boolean;
  color: 'gray' | 'black' | 'white';
};

export default function NaviButton({ route, text, isHeader = true, color }: NaviButtonProps) {
  return (
    <GNBTitle isHeader={isHeader} color={color}>
      <Link to={route} className="navi-button">
        {text}
      </Link>
    </GNBTitle>
  );
}
