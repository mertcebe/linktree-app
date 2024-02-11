'use client';

import { auth } from "@/firebase/firebaseConfig";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import { redirect, useRouter } from "next/navigation";

export default function LogoutButton({
    className = 'flex items-center gap-2 border p-2 px-4 shadow',
    iconLeft = false,
    iconClasses = '',
}) {
    const router = useRouter();
    return (
        <button
            className={className}
            onClick={() => {
                signOut(auth)
                    .then(() => {
                        router.push('/login');
                    })
            }}>
            {iconLeft && (
                <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses} />
            )}
            <span>Logout</span>
            {!iconLeft && (
                <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses} />
            )}
        </button>
    );
}