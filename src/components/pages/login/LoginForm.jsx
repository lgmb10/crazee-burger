import React, {useState} from 'react';

const LoginForm = () => {
    const [firstName, setFirstName] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Bonjour " + firstName);
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