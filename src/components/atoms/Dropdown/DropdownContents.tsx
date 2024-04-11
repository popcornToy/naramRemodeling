import { isClicked } from '@/store/store';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';

export type DropdownContentsProps = {
  content: string;
  route: string;
};

export default function DropdownContents({ content, route }: DropdownContentsProps) {
  const [isClick, setIsClick] = useAtom(isClicked);

  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <li
      style={{
        color: '#666',
        fontWeight: 500,
      }}
    >
      <Link to={route} onClick={handleClick}>
        {content}
      </Link>
    </li>
  );
}
