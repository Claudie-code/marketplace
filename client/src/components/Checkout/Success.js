import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { saveOrder } from '../../lib/state/actions';
import { selectCartTotal } from '../../lib/state/selectors';
import useAuthentication from '../../lib/hooks/useAuthentication';

const styles = {
  padding: '7rem',
  height: '100vh',
  fontSize: 20
};

function Success({ history }) {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  const total = useSelector(selectCartTotal);
  const { handleAuthentication } = useAuthentication(dispatch);

  const dispatchAndSaveOrder = (user) => {
    return new Promise((resolve) => {
      const order = { user, items, total};
      dispatch(saveOrder(order));
      resolve();
    });
  };

  const clearStorage = () => {
    return new Promise((resolve) => {
      localStorage.setItem('items', []);
      resolve();
    });
  };

  const redirectHome = () => {
    setTimeout(() => { history.push('/'); }, 4000);
  };

  useEffect(() => {
    (async () => {
      const address = JSON.parse(localStorage.getItem('orderAddress'));
      await handleAuthentication();
      await dispatchAndSaveOrder(address);
      await clearStorage();
      await redirectHome();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <div style={styles} className='d-flex justify-content-center align-items-center'>
        <div className="alert alert-success mt-3 mb-3">
          <p className="icontext"><i className='bx bx-check'></i>{' '}Thank you for your order &amp; your payment</p>
      </div>
    </div>
    </>
  );
}
export default Success