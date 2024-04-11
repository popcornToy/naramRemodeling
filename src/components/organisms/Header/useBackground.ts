import { isClicked } from '@/store/store';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

export default function useBackground(isMain: boolean) {
  const [changeColor, setChangeColor] = useState<string>('transparent');
  const [textColor, setTextColor] = useState<string>('#333333');
  const [iconColor, setIconColor] = useState<string>('#3974CC');
  const [isScroll, setIsScroll] = useState(false);
  const [isClick] = useAtom(isClicked);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isClick) {
      setChangeColor('#ffffff');
    } else if (isScroll) {
      setChangeColor('#ffffff');
    } else {
      const timeoutId = setTimeout(() => {
        setChangeColor('transparent');
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [isClick, isScroll]);

  useEffect(() => {
    if (isClick || isScroll) {
      setTextColor('#333333');
      setIconColor('#3974CC');
    } else {
      if (isMain) {
        const timeoutId = setTimeout(() => {
          setTextColor('#ffffff');
          setIconColor('#ffffff');
        }, 500);
        return () => clearTimeout(timeoutId);
      } else {
        setTextColor('#333333');
        setIconColor('#3974CC');
      }
    }
  }, [isClick, isScroll, isMain]);

  return { changeColor, isScroll, isClick, textColor, iconColor };
}
