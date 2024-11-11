import { useEffect, useRef, useState } from "react";

const RefFrom = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [error, errorPass] = useState('');

    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const handleForm = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

        if(error.length < 6){
            errorPass('password must be 8 or more character');
        }else{
            errorPass('');
        }
    };


    return (
        <div>
            <form onSubmit={handleForm}>
                <input ref={nameRef} defaultValue={'name :'} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" required id="" />
                <br />
                {
                    error && <p>{error}</p>
                }
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefFrom;