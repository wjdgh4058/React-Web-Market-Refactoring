import { storingWaySort } from '@/utils/storingWay/storingWaySort';
import { useEffect } from 'react';
import { CartPageSet } from './CartPageSet';
import { ProductSelectCtrl } from './ProductSelectCtrl';
import refrigeratedImg from '@/../public/icons/web-icons/Refrigerated.svg';
import frozenImg from '@/../public/icons/web-icons/Frozen.svg';
import normalImg from '@/../public/icons/web-icons/Normal.svg';
import { useRecoilState } from 'recoil';
import { cartTotalSeletState } from '@/@atom/cartPage/cartTotalSeletState';
import styles from './CartPageAccordion.module.scss';

export function CartPageAccordion({ data }) {
  // 냉장 식품 선별
  let refrigerated = [];
  // 냉동 식품 선별
  let frozen = [];
  // 상온 식품 선별
  let roomTemperature = [];
  if (data) {
    // 냉장 식품 선별
    refrigerated = storingWaySort(data, '냉장');
    // 냉동 식품 선별
    frozen = storingWaySort(data, '냉동');
    // 상온 식품 선별
    roomTemperature = storingWaySort(data, '상온');
  }

  if (!data || data.length < 1) {
    return (
      <div>
        <ProductSelectCtrl cartData={data} />
        <div className={styles.nonAddCartProduct}>
          장바구니에 담긴 상품이 없습니다.
        </div>

        <ProductSelectCtrl cartData={data} />
      </div>
    );
  } else {
    return (
      <div>
        <ProductSelectCtrl cartData={data} />
        {refrigerated.length > 0 ? (
          <CartPageSet
            data={refrigerated}
            productType={'냉장'}
            storingWayImg={refrigeratedImg}
          />
        ) : null}
        {frozen.length > 0 ? (
          <CartPageSet
            data={frozen}
            productType={'냉동'}
            storingWayImg={frozenImg}
          />
        ) : null}
        {roomTemperature.length > 0 ? (
          <CartPageSet
            data={roomTemperature}
            productType={'상온'}
            storingWayImg={normalImg}
          />
        ) : null}
        <ProductSelectCtrl cartData={data} />
      </div>
    );
  }
}
