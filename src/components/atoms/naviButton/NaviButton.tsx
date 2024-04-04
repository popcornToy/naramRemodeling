import { Link } from 'react-router-dom';
import { GNBTitle } from '@/styles/components/naviButton/naviButton';

type NaviButtonProps = {
  route: string;
  text: string;
  isHeader?: boolean;
};

export default function NaviButton({ route, text, isHeader = true }: NaviButtonProps) {
  return (
    <GNBTitle isHeader={isHeader}>
      <Link to={route} className="navi-button">
        {text}
      </Link>
    </GNBTitle>
  );
}
