import { Link } from 'react-router-dom';

export type DropdownContentsProps = {
  content: string;
  route: string;
};

export default function DropdownContents({ content, route }: DropdownContentsProps) {
  return (
    <li
      style={{
        color: '#666',
        fontWeight: 500,
      }}
    >
      <Link to={route}>{content}</Link>
    </li>
  );
}
