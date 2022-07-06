import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit");
        signInWithEmailAndPassword(auth, login, password)
            .then(() => {
                console.log("ok");
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage, "error");
            });
    }
    return (
        <>
            <Box
                noValidate
                autoComplete="off"
            >
                <form onSubmit={(e) => submitHandler(e)}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Mail"
                        margin="normal"
                        fullWidth
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <TextField
                        id="outlined-ok"
                        label="Password"
                        margin="normal"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{mb: 2, ml: 0, mt: 2}}
                    >
                        Zaloguj się
                    </Button>
                    <Link href="/rejsestracja" sx={{display: "flex"}}>Zarejestruj</Link>
                </form>
            </Box>
        </>
    );
};

export default Login;
