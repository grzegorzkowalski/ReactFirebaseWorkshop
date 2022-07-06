import {useEffect, useState} from 'react';
import { auth } from "../firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

const Home = () => {
    const [userInfo, setUserInfo] = useState("użytkownik niezalogowany");
    const user = auth.currentUser;

    if (user) {
        console.log(user);
    } else {
        console.log("no user");
    }
    const register = () => {
        createUserWithEmailAndPassword(auth, "test@wp.pl", "test_1234")
            .then(() => {
                signInWithEmailAndPassword(auth, "test@wp.pl", "test_1234")
                    .then((res) => {
                        console.log("użytkownik zalogowany.")
                        setUserInfo(res.user.email);
                        // navigate("/o-nas");
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }
    const login = () => {
        signInWithEmailAndPassword(auth, "test@wp.pl", "test_1234")
            .then((res) => {
                console.log("użytkownik zalogowany.")
                setUserInfo(res.user.email);
                // navigate("/o-nas");
            })
            .catch(err => console.log(err));
    }
    const logOut = () => {
        signOut(auth).then(() => {
            console.log("użytkownik wylogowany");
            setUserInfo("użytkownik wylogowany");
        }).catch((error) => {
            // An error happened.
        });
    }

    const checkUser = () => {
        //console.log(firebase)
    }

    useEffect(() => {
        const unsurscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid);
            } else {
                console.log("wylogowany onAuthStateChanged");
            }
        });
        return () => unsurscribe();
    }, []);

    return (
        <>
            <h1>{userInfo}</h1>
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
            <button onClick={logOut}>signOut</button>
            <button onClick={checkUser}>signOut</button>
        </>
    );
};

export default Home;
