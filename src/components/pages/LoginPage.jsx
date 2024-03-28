import {useState} from 'react';

export default function LoginPage() {
    const [firstName, setFirstName] = useState("")
    //let validation = useRef(true)


    const handleClick = (event) => {
        event.preventDefault();
        alert("Bonjour " + firstName);
        setFirstName("");
    }

    return (
        <>
            <div>
                <h1>Bienvenue chez nous !</h1>
                <h2>Connectez vous</h2>
                <form action={"submit"}>
                    <input id={"firstNameInput"} required type="text" placeholder={"Entrez votre prénom"}
                           value={firstName}
                           onChange={(event) => setFirstName(event.target.value)}/>
                    <button type={"submit"} onClick={(event) => handleClick(event)}>Accéder à votre espace</button>
                </form>
            </div>
        </>
    );
}