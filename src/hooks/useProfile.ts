import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import User from '@/interfaces/User';
import UserService from '@/services/UserService';
import AuthenticationService from '@/services/AuthenticationService';
import Session from '@/interfaces/Session';

const userService = new UserService();
const authenticationService = new AuthenticationService();

export default function useProfile(userId: number) {
    const [user, setUser] = useState<User>();
    const [session, setSession] = useState<Session>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        Promise.all([
            userService.findById(userId),
            authenticationService.getSession(),
        ]).then(responses =>  {
            console.log(responses);
            setUser(responses[0].data);
            setSession(responses[1].data);
        }).catch(error => {
            toast.error(error.message);
        }).finally(() => setIsLoading(false));
    }, [])
    
    return {user, session, isLoading};
}
