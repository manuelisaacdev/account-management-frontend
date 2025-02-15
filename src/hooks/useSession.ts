import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Session from '@/interfaces/Session';
import AuthenticationService from '@/services/AuthenticationService';

const authenticationService = new AuthenticationService();

export default function useSession() {
    const [session, setSession] = useState<Session>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        authenticationService.getSession().then(response =>  {
            setSession(response.data);
        }).catch(error => {
            toast.error(error.message);
        }).finally(() => setIsLoading(false));
    }, [])
    
    return {session, isLoading};
}
