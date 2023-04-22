import { AccordionSet } from './AccordionSet';
import { AccordionFillter } from './AccordionFillter';
import styles from './ProductListNav.module.scss';

import { useRef, useState } from 'react';

import { many_product_sort, name_sort, priceSort } from '@/utils';
import { includeSort } from '@/utils/product_list/includeSort';

export function Accordion({ data }) {
  // 카테고리 데이터 불러오기
  const categoryData = [many_product_sort(data, 'category')];
  // 브랜드 - 가나다순 정렬 데이터
  const brand_name_sort_data = name_sort(data, 'brand');
  // 브랜드 - 상품 많은순 데이터
  const brand_product_sort_data = many_product_sort(data, 'brand');
  // 브랜드 데이터 불러오기
  const brandData = [brand_name_sort_data, brand_product_sort_data];
  // 가격 데이터 불러오기
  const priceData = [priceSort(data)];
  // 혜택 - 할인상품 데이터
  const saleProduct_data = includeSort(data, 'saleProduct');
  // 혜택 - 한정수량 데이터
  const limitstock_data = includeSort(data, 'stock');
  // 혜택 데이터 불러오기
  const benefitData = [saleProduct_data, limitstock_data];
  // 유형 - bob-lion Only 데이터
  const bobLionOnly_data = includeSort(data, 'bobLionOnly');
  // 유형 데이터 불러오기
  const typeData = [bobLionOnly_data];

  const [categorySelectData, setCategorySelectData] = useState([]);
  const [brandSelectData, setBrandSelectData] = useState([]);
  const [priceSelectData, setPriceSelectData] = useState([]);
  const [benefitSelectData, setBenefitSelectData] = useState([]);
  const [typeSelectData, setTypeSelectData] = useState([]);

  return (
    <div>
      <div className={styles.accordion}>
        <AccordionFillter
          categorySelectData={categorySelectData}
          setCategorySelectData={setCategorySelectData}
        />
        {/* 리스트 아이템의 수가 10개 이상일때 more 값을 true 로 전달 아니면 false */}
        <AccordionSet
          data={categoryData}
          listName="카테고리"
          selectData={categorySelectData}
          setSelectData={setCategorySelectData}
        />
        <AccordionSet
          data={brandData}
          listName="브랜드"
          selectData={brandSelectData}
          setSelectData={setBrandSelectData}
        />
        <AccordionSet
          data={priceData}
          listName="가격"
          selectData={priceSelectData}
          setSelectData={setPriceSelectData}
        />
        <AccordionSet
          data={[benefitData]}
          listName="혜택"
          selectData={benefitSelectData}
          setSelectData={setBenefitSelectData}
        />
        <AccordionSet
          data={[typeData]}
          listName="유형"
          selectData={typeSelectData}
          setSelectData={setTypeSelectData}
        />
      </div>
    </div>
  );
}
