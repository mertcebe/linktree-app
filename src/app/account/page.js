"use client";

import UseAuthorized from '@/auth/UseAuthorized';
import UsernameForm from '@/components/forms/UsernameForm';
import React, { useEffect, useState } from 'react'

const AccountPage = ({ searchParams }) => {
    const desiredUsername = searchParams?.desiredUsername;
    const [session, setSession] = useState(null);
    useEffect(() => {
        UseAuthorized()
            .then((userCredentials) => {
                setSession(userCredentials);
            })
    }, []);
    return (
        <div>
            {session?.displayName}
            <UsernameForm desiredUsername={desiredUsername} />
        </div>
    )
}

export default AccountPage