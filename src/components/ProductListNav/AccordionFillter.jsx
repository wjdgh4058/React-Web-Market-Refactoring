import resetButton from '@/../public/ProductListImage/resetButton.svg';
import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { productCheckResetState } from '@/@atom/accordion/productCheckResetState';
import styles from './ProductListNav.module.scss';
import { accordionModalState } from '@/@atom/accordion/accordionModalState';

// 아코디언 필터 & 리셋 버튼

export function AccordionFillter({
  categorySelectData,
  setCategorySelectData,
}) {
  const checkReset = useRecoilValue(productCheckResetState);
  const resetBtn = useRef();
  const [accordionModal, setAccordionModal] =
    useRecoilState(accordionModalState);

  useEffect(() => {
    if (checkReset) {
      resetBtn.current.style.color = 'rgb(161, 95, 4)';
    } else {
      resetBtn.current.style.color = 'rgb(221, 221, 221)';
    }
  }, [checkReset]);

  const handleResetBtn = () => {
    setCategorySelectData(categorySelectData.splice(0));
    setAccordionModal(!accordionModal);
  };

  return (
    <div className={styles.accordionFillter}>
      <span className={styles.accordionFillterName}>필터</span>
      <button
        className={styles.accordionFillterButton}
        type="button"
        onClick={handleResetBtn}
      >
        <img alt="초기화 버튼 이미지" src={resetButton} />
        <span ref={resetBtn} className={styles.accordionFillterButtonText}>
          초기화
        </span>
      </button>
    </div>
  );
}
