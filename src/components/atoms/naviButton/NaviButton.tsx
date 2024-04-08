import { Link } from 'react-router-dom';
import { GNBTitle } from '@/styles/components/naviButton/naviButton';

type NaviButtonProps = {
  route: string;
  text: string;
  color: 'black' | 'white';
};

export default function NaviButton({ route, text, color }: NaviButtonProps) {
  return (
    <GNBTitle color={color}>
      <Link to={route} className="navi-button">
        {text}
      </Link>
    </GNBTitle>
  );
}
