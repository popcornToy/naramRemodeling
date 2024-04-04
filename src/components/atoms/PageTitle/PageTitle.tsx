import { StyledPageEngTitle, StyledPageH2Title } from '@/styles/components/Board';

// type
export type TextType = {
  text: string;
};

// component
export function PageEngTitle({ text }: TextType): React.ReactNode {
  return <StyledPageEngTitle>{text}</StyledPageEngTitle>;
}

export function PageH2Title({ text }: TextType): React.ReactNode {
  return <StyledPageH2Title>{text}</StyledPageH2Title>;
}
