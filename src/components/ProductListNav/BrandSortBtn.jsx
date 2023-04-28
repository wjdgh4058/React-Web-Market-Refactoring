import { useRef } from 'react';
import styles from './ProductListNav.module.scss';

export function BrandSortBtn({ data, setSortData }) {
  const nameSortBtn = useRef();
  const productSortBtn = useRef();
  const handleChangeData = (sortName) => {
    if (sortName === 'name') {
      setSortData(data[0]);
      nameSortBtn.current.style.color = 'rgb(161, 95, 4)';
      productSortBtn.current.style.color = 'rgb(51, 51, 51)';
    }
    if (sortName === 'product') {
      setSortData(data[1]);
      nameSortBtn.current.style.color = 'rgb(51, 51, 51)';
      productSortBtn.current.style.color = 'rgb(161, 95, 4)';
    }
  };

  return (
    <>
      <button
        ref={nameSortBtn}
        className={styles.accordionSetBodySortName}
        type="button"
        onClick={() => {
          handleChangeData('name');
        }}
      >
        가나다순
      </button>
      <button
        ref={productSortBtn}
        className={styles.accordionSetBodySortProduct}
        type="button"
        onClick={() => {
          handleChangeData('product');
        }}
      >
        상품 많은순
      </button>
    </>
  );
}
