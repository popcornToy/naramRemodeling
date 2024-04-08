import { Link } from 'react-router-dom';
import Logo from '/logo.png';

export default function LogoLink() {
  return (
    <Link to="/">
      <img src={Logo} alt="주식회사 나람" />
    </Link>
  );
}
