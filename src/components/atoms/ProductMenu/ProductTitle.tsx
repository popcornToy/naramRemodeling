import { ProductTitleA } from '@/styles/components/Product/Product';
import { useParams } from 'react-router-dom';

type ProductTitleProps = {
  title: string;
  route: string;
};

export default function ProductTitle({ title, route }: ProductTitleProps) {
  const { productType } = useParams<{ productType: string }>();

  console.log(productType);

  return (
    <ProductTitleA productType={productType} to={route}>
      {title}
    </ProductTitleA>
  );
}
