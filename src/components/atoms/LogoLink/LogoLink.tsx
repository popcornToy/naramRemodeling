import { Link } from 'react-router-dom';
import Logo from '/logo.png';
import { useAtom } from 'jotai';
import { isClicked } from '@/store/store';

export default function LogoLink() {
  const [, setIsClick] = useAtom(isClicked);

  const handleClick = () => {
    setIsClick(false);
  };
  return (
    <Link to="/" onClick={handleClick}>
      <img src={Logo} alt="주식회사 나람" />
    </Link>
  );
}
