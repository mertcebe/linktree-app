"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LogoutButton from './buttons/LogoutButton';
import { usePathname } from 'next/navigation';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth } from '@/firebase/firebaseConfig';
import UseAuthorized from '@/auth/UseAuthorized';

const Header = () => {
    const [user, setUser] = useState(null);
    const loc = usePathname();
    useEffect(() => {
        UseAuthorized()
            .then((userCredentials) => {
                setUser(userCredentials);
            })
    }, [loc]);
    console.log(auth.currentUser);
    return (
        <header className="bg-white border-b py-4">
            <div className="max-w-4xl flex justify-between mx-auto px-6">
                <div className="flex items-center gap-6 navigation">
                    <Link href={'/'} className={`flex items-center gap-2 ${loc == '/' ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={faLink} />
                        <span className="font-bold">LinkList</span>
                    </Link>
                    <nav className="flex items-center gap-4 text-slate-500 text-sm">
                        <Link href={'/about'} className={loc.includes('about') ? 'active' : ''}>About</Link>
                        <Link href={'/pricing'} className={loc.includes('pricing') ? 'active' : ''}>Pricing</Link>
                        <Link href={'/contact'} className={loc.includes('contact') ? 'active' : ''}>Contact</Link>
                    </nav>
                </div>
                <nav className="flex items-center gap-4 text-sm text-slate-500">
                    {user && (
                        <>
                            <Link href={'/account'}>
                                Hello, {auth?.currentUser?.displayName}
                            </Link>
                            <LogoutButton />
                        </>
                    )}
                    {!user && (
                        <>
                            <Link href={'/login'}>Sign In</Link>
                            <Link href={'/login'}>Create Account</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header