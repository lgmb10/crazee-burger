import {useState} from 'react';

export default function LoginPage() {
    const [firstName, setFirstName] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Bonjour " + firstName);
        setFirstName("");
    }

    return (
        <>
            <div>
                <h1>Bienvenue chez nous !</h1>
                <h2>Connectez vous</h2>
                <form action={"submit"} onSubmit={handleSubmit}>
                    <input required type="text" placeholder={"Entrez votre prénom"}
                           value={firstName}
                           onChange={(event) => setFirstName(event.target.value)}/>
                    <button type={"submit"}>Accéder à votre espace</button>
                </form>
            </div>
        </>
    );
}