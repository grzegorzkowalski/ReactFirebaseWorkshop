import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../firebase";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, login, password)
            .then(() => {
                signInWithEmailAndPassword(auth, login, password)
                    .then((res) => {
                        console.log("użytkownik zalogowany.")
                        navigate("/");
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Typography variant="h2" gutterBottom component="div">
                Rejestracja
            </Typography>
            <Box>
                <form onSubmit={(e) => submitHandler(e)}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Mail"
                        fullWidth
                        margin="normal"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <TextField
                        id="outlined-ok"
                        label="Password"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Zarejestruj się
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default Register;
