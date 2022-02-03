import { getUserName } from '../../../redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <span>Hello {name}. </span>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};
