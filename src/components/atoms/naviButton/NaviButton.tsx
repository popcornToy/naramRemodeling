import { Link } from 'react-router-dom';

type NaviButtonProps = {
  route: string;
  text: string;
};

export default function NaviButton({ route, text }: NaviButtonProps) {
  return (
    <Link to={route} className="navi-button">
      <p>{text}</p>
    </Link>
  );
}
