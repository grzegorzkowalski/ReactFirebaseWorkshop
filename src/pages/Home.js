import {useEffect, useState} from 'react';
import { auth, db } from "../firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

const Home = () => {
    const [userInfo, setUserInfo] = useState("użytkownik niezalogowany");
    const [data, setData] = useState([]);
    const user = auth.currentUser;

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
    function compare( a, b ) {
        if ( a.title < b.title ){
            return -1;
        }
        if ( a.title > b.title ){
            return 1;
        }
        return 0;
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        (async () => {
            if (user) {
                const querySnapshot = await getDocs(collection(db, "articles"));
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    setData((prev) => [...prev, doc.data()]);
                });
                // const docRef = doc(db, "articles", "EIfSaVBgyAtvoPYxrYyA");
                // const docSnap = await getDoc(docRef);
                //
                // if (docSnap.exists()) {
                //     console.log("Document data:", docSnap.data());
                //     setData(() => [ docSnap.data()]);
                // } else {
                //     // doc.data() will be undefined in this case
                //     console.log("No such document!");
                // }
            } else {
                console.log("no user");
            }
        })();
    }, [userInfo]);

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
            {
                data.sort(compare).map(el => {
                    return <article>
                        <img alt="panda" src={el.image} />
                        <h3>{el.title}</h3>
                        <p>{el.body}</p>
                    </article>
                })
            }
            <h1>{userInfo}</h1>
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
            <button onClick={logOut}>signOut</button>
        </>
    );
};

export default Home;
