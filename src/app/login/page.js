"use client";

import UseAuthorized from '@/auth/UseAuthorized';
import LoginWithGoogle from '@/components/buttons/LoginWithGoogle'
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const LoginPage = () => {
    let [user, setUser] = useState(null);
    useEffect(() => {
        UseAuthorized()
            .then((snapshot) => {
                setUser(snapshot);
            })
    }, []);

    if(user){
        redirect('/');
    }
    return (
        <div className='pt-32'>
            <div className="p-4 max-w-xs mx-auto">
                <h1 className="text-4xl font-bold text-center mb-2">
                    Sign In
                </h1>
                <p className="text-center mb-6 text-gray-500">
                    Sign in to your account using one of the methods below
                </p>
                <LoginWithGoogle />
            </div>
        </div>
    )
}

export default LoginPage