import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../../redux/auth/auth-selectors';
import { logOut } from '../../../redux/auth/auth-operations';

import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <span>Hello {name}. </span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </button>
    </div>
  );
};
