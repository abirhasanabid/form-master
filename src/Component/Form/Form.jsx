
const Form = () => {

    const handleForm = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;