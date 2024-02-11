import { auth } from '@/firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'

const UseAuthorized = async () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user);
            }
            else {
                resolve(null);
            }
        })
    })
}

export default UseAuthorized