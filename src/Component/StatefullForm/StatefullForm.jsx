import { useState } from "react";

const StatefullForm = () => {

    // declaring state
    const [email, setEmail] = useState('Email :');
    const [password, setPassword] = useState(null);
    const [name,setName] = useState('name :');
    const [error,setError] = useState('');
    

    // sunmit btn
    const handleForm = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('password must be 6 caracter or longer');
        }else{
            setError('');
        }
        console.log(email, password,name);
    };

    // Email input
    const handleEmail = e => {
        setEmail(e.target.value);
    };

    // password input
    const handlePassword = p => {
        setPassword(p.target.value);
    };
    // name change 
    const handleNameChange = n =>{
        setName(n.target.value);
    };

    const errorP = {
        color : 'red'
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input value={name} 
                onChange={handleNameChange}
                type="text" name="name" />
                <br />
                <input
                    onChange={handleEmail}
                    type="email" name="email" id="" />
                <br />
                <input 
                    onChange={handlePassword}
                    type="password" name="" id="" required />
                    <br />
                    {
                        error && <p style={errorP} >{error}</p>
                    }
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefullForm;