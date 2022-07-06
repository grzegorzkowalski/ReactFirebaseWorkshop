import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddArticle = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    let navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(e);
        try {
            await addDoc(collection(db, "articles"), {
                title,
                image,
                body,
                date: Date.now()
            });
            navigate("/");
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h2" gutterBottom component="div">
                Dodaj artykuł
            </Typography>
            <Box>
                <form onSubmit={(e) => submitHandler(e)}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Tytuł"
                        fullWidth
                        margin="normal"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        id="outlined-ok"
                        label="Zdjęcie"
                        fullWidth
                        margin="normal"
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <TextField
                        id="outlined-ok"
                        label="Tekst"
                        fullWidth
                        margin="normal"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Dodaj artykuł
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default AddArticle;
