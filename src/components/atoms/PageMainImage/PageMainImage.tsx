import { StyledPageMainImage } from '@/styles/components/PageMainImage/PageMainImage';

type PageMainImageProps = {
  image: string;
  alt: string;
};
//ex) 회사 소개 페이지 또는 Q&A 페이지의 상단 메인 이미지
function PageMainImage({ image, alt }: PageMainImageProps) {
  return (
    <StyledPageMainImage>
      <img className="mainImage" src={image} alt={alt} />
    </StyledPageMainImage>
  );
}

export default PageMainImage;
