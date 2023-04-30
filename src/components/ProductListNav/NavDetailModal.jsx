import { BrandSortBtn } from './BrandSortBtn';
import modalClose from '@/../public/ProductListImage/ModalClose.svg';
import resetButton from '@/../public/ProductListImage/resetButton.svg';
import styles from './ProductListNav.module.scss';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { accordionModalState } from '@/@atom/accordion/accordionModalState';
import { modalVisibleState } from '@/@atom/accordion/modalVisibleState';

export function NavDetailModal({
  data,
  listName,
  setSortData,
  renderData,
  setModalVisible,
}) {
  const [accordionModal, setAccordionModal] =
    useRecoilState(accordionModalState);

  const setModalVisibleCtrlState = useSetRecoilState(modalVisibleState);

  const handleModalClose = () => {
    setModalVisible(false);
    setModalVisibleCtrlState(false);
    setAccordionModal(!accordionModal);
  };
  return (
    <div className={styles.moreModalBackground}>
      <div className={styles.moreModalWindow}>
        <div className={styles.moreModal}>
          <div className={styles.moreModalHeader}>
            <strong className={styles.moreModalHeaderListName}>
              {listName}
            </strong>
            {listName === '브랜드' ? (
              <ul className={styles.moreModalHeaderBrandSortBtn}>
                <BrandSortBtn data={data} setSortData={setSortData} />
              </ul>
            ) : null}
            <button
              className={styles.moreModalHeaderModalCloseBtn}
              type="button"
              onClick={handleModalClose}
            >
              <img alt="모달창 닫기 버튼" src={modalClose} />
            </button>
          </div>
          <ul className={styles.moreModalList}>{renderData}</ul>
          <div className={styles.moreModalFooter}>
            <button className={styles.moreModalFooterResetBtn} type="button">
              <img alt="리셋버튼 이미지 로고" src={resetButton} />
              <span className={styles.moreModalFooterResetBtnText}>초기화</span>
            </button>
            <button
              className={styles.moreModalFooterCloseCheck}
              type="button"
              onClick={handleModalClose}
            >
              <span>확인</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
