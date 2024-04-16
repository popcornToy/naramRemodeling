import ProductTitle from '@/components/atoms/ProductMenu/ProductTitle';
import { ProductTitleLi, ProductTitleUl } from '@/styles/components/Product/Product';

export default function ProductCollection() {
  return (
    <nav>
      <ProductTitleUl>
        <li>
          <ProductTitle title="양돈" route="/Product/pork" />
        </li>
        <li>
          <ProductTitle title="계육" route="/Product/chicken" />
        </li>
        <li>
          <ProductTitle title="오리" route="/Product/duck" />
        </li>
      </ProductTitleUl>
    </nav>
  );
}
