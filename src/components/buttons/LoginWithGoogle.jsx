'use client';

import { auth, provider } from "@/firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function LoginWithGoogle() {
    return (
        <button
            onClick={() => {
                signInWithPopup(auth, provider)
                .then((snapshot) => {
                    
                })
            }}
            className="bg-white shadow text-center w-full py-4 flex gap-3 items-center justify-center">
            <FontAwesomeIcon icon={faGoogle} className="h-6" />
            <span>Sign In with Google</span>
        </button>
    );
}