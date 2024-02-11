'use client';

import { auth, database, provider } from "@/firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { setUserToFirebaseWithGoogle } from "@/firebase/firebaseActions";

export default function LoginWithGoogle() {
    const router = useRouter();
    return (
        <button
            onClick={() => {
                setUserToFirebaseWithGoogle()
                    .then(() => {
                        router.push('/')
                    })
            }}
            className="bg-white shadow text-center w-full py-4 flex gap-3 items-center justify-center">
            <FontAwesomeIcon icon={faGoogle} className="h-6" />
            <span>Sign In with Google</span>
        </button>
    );
}