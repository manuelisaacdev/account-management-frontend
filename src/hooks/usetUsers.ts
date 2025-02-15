import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import User from '@/interfaces/User';
import UserService from '@/services/UserService';
import AuthenticationService from '@/services/AuthenticationService';
import Session from '@/interfaces/Session';

const userService = new UserService();
const authenticationService = new AuthenticationService();

export default function usetUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [session, setSession] = useState<Session>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        Promise.all([
            userService.findAll(),
            authenticationService.getSession(),
        ]).then(responses =>  {
            console.log(responses);
            setUsers(responses[0].data);
            setSession(responses[1].data);
        }).catch(error => {
            toast.error(error.message);
        }).finally(() => setIsLoading(false));
    }, [])
    
    return {users, setUsers, session, isLoading};
}
