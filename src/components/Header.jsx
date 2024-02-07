"use client";

import Link from 'next/link'
import React from 'react'
import LogoutButton from './buttons/LogoutButton';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Header = () => {
    const loc = usePathname();
    const {data: session} = useSession();
    const user = session?.user;

    return (
        <header className="bg-white border-b py-4">
            <div className="max-w-4xl flex justify-between mx-auto px-6">
                <div className="flex items-center gap-6 navigation">
                    <Link href={'/'} className={`flex items-center gap-2 ${loc == '/'?'active':''}`}>
                        {/* <FontAwesomeIcon icon={faLink} className="text-blue-500" /> */}
                        <span className="font-bold">LinkList</span>
                    </Link>
                    <nav className="flex items-center gap-4 text-slate-500 text-sm">
                        <Link href={'/about'} className={loc.includes('about')?'active':''}>About</Link>
                        <Link href={'/pricing'} className={loc.includes('pricing')?'active':''}>Pricing</Link>
                        <Link href={'/contact'} className={loc.includes('contact')?'active':''}>Contact</Link>
                    </nav>
                </div>
                <nav className="flex items-center gap-4 text-sm text-slate-500">
                    {!!session && (
                        <>
                            <Link href={'/account'}>
                                Hello, {session?.user?.name}
                            </Link>
                            <LogoutButton />
                        </>
                    )}
                    {!session && (
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