import click_check_on from '@/../public/ProductListImage/Check_on.svg';
import click_check_off from '@/../public/ProductListImage/Check_off.svg';
import styles from './ProductListNav.module.scss';
import { useState, useRef, useEffect } from 'react';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { productCheckResetState } from '../../@atom/accordion/productCheckResetState';
import { accordionModalState } from '@/@atom/accordion/accordionModalState';
import { categorySelectState } from '@/@atom/accordion/categorySelectState';
import { brandSelectState } from '@/@atom/accordion/brandSelectState';

//아코디언 목록의 리스트
export function AccordionList({
  name,
  count,
  selectData,
  listName,
  modalStyle,
}) {
  const [btnToggle, setBtnToggle] = useState(false);
  const hoverSpan = useRef();
  const listCheckReset = useSetRecoilState(productCheckResetState);

  const [accordionModal, setAccordionModal] =
    useRecoilState(accordionModalState);

  const handleEnter = () => {
    hoverSpan.current.style.color = 'rgb(161, 95, 4)';
  };
  const handleLeave = () => {
    hoverSpan.current.style.color = 'rgb(51, 51, 51)';
  };

  const setCategorySelectData = useSetRecoilState(categorySelectState);
  const setBrandSelectData = useSetRecoilState(brandSelectState);

  const handleClickCheck = () => {
    // 체크 버튼이 활성화 될때 값이 배열에 없으면 추가하고 체크버튼이 비활성화 될때 해당 값을 삭제해 준다.
    if (!selectData.includes(name)) {
      selectData.push(name);
    } else {
      const index = selectData.indexOf(name);
      selectData.splice(index, 1);
      //     if (item !== name) {
      //       console.log(selectData);
      //       return item;
      //     }
      //   });
    }

    console.log(selectData);
    const classificationData = selectData.slice();

    if (listName === '카테고리') {
      setCategorySelectData(classificationData);
    }

    if (listName === '브랜드') {
      setBrandSelectData(classificationData);
    }

    // 리셋 버튼 활성화 상태 설정
    if (selectData.length > 0) {
      listCheckReset(true);
    } else {
      listCheckReset(false);
    }

    setBtnToggle(!btnToggle);
  };

  return (
    <li className={`${styles.accordionList} ${modalStyle}`}>
      <button
        className={styles.accordionListItemcheckButton}
        type="button"
        onClick={handleClickCheck}
      >
        <img
          alt="해당 리스트 체크하는 버튼"
          src={selectData.includes(name) ? click_check_on : click_check_off}
        ></img>
        <span
          ref={hoverSpan}
          className={styles.accordionListItemName}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {name}
        </span>
        <span className={styles.accordionListItemCount}>{count}</span>
      </button>
    </li>
  );
}
