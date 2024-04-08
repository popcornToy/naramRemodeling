import { Link } from 'react-router-dom';
import { GNBTitle } from '@/styles/components/naviButton/naviButton';

type NaviButtonProps = {
  route: string;
  text: string;
  isHeader?: boolean;
  color: 'gray' | 'black' | 'white';
  isLast?: boolean;
};

export default function NaviButton({ route, text, isHeader = true, color, isLast }: NaviButtonProps) {
  return (
    <GNBTitle isHeader={isHeader} color={color} isLast={isLast}>
      <Link to={route} className="navi-button">
        {text}
      </Link>
    </GNBTitle>
  );
}
