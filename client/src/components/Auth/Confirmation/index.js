import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuthentication from '../../../lib/hooks/useAuthentication';

const Confirmation = () => {
    const [ message, setMessage ] = useState();
    const search = useLocation().search;
    const params = new URLSearchParams(search);
    const token = params.get('token'); 
    const tokenId = params.get('tokenId'); 
    const { handleEmailConfirmation } = useAuthentication();

    useEffect(() => {
        handleEmailConfirmation(token, tokenId)
        .then((response) => setMessage(response))
        .catch((error) => setMessage(error))
    }, [token, tokenId]);

    return(
        <p style={{padding: '7rem 0', textAlign: 'center'}}>{message}</p>
    );
}
export default Confirmation;