import { useCallback } from 'react';
import addCartIconUrl from '../../../public/icons/web-icons/Cart.svg';
import { useSetRecoilState } from 'recoil';
import { cartPopupVisibleState } from '@/@atom/addCartPopup/cartPopupVisibleState';
import { currentProductState } from '@/@atom/currentProductState';

export default function AddCartShortcutBtn(props) {
  const setter = useSetRecoilState(cartPopupVisibleState);

  const { content } = props;

  const setCurrentProductState = useSetRecoilState(currentProductState);

  const handleAddCartPopup = useCallback(() => {
    setCurrentProductState(content);
    setter(true);
  }, []);

  return (
    <button
      // style={'z'}
      className="AddCartShortcutBtn"
      type="button"
      onClick={handleAddCartPopup}
    >
      <img alt="장바구니 아이콘" src={addCartIconUrl} />
    </button>
  );
}
