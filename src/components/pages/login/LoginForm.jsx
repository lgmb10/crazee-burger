import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const [firstName, setFirstName] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/order/${firstName}`)
        setFirstName("");
    }

    return (
        <form action={"submit"} onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez vous</h2>
            <input required type="text" placeholder={"Entrez votre prénom"}
                   value={firstName}
                   onChange={(event) => setFirstName(event.target.value)}/>
            <button type={"submit"}>Accéder à votre espace</button>
        </form>
    )
};

export default LoginForm;