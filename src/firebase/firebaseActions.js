import { signInWithPopup } from "firebase/auth";
import { auth, database, provider } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const setUserToFirebaseWithGoogle = async () => {
    await signInWithPopup(auth, provider)
        .then((snapshot) => {
            const user = snapshot.user;
            setDoc(doc(database, `users/${user.uid}`), {
                displayName: user.displayName,
                uid: user.uid,
                email: user.email,
                photoURL: user.photoURL,
            });
        })
}