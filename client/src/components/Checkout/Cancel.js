
import React, { useEffect} from 'react'
const styles = {
  padding: '7rem',
  height: '100vh',
  fontSize: 20
}
function Cancel({ history }) {
  useEffect(() => setTimeout(() => history.push('/cart'), 3000))
  return (
    <>
      <div style={styles} className='d-flex justify-content-center align-items-center'>
          <div className="alert alert-warning mt-3 mb-3">
            <p className="icontext">You will redirected in a few seconds ...</p>
        </div>
      </div>
    </>
  );
}
export default Cancel