import {useRef} from "react";
import ComboBoxes from "./comboBoxes";

function FormChar(props)
{
    const name = useRef();
    const email = useRef();
    const firstName = useRef();
    const password = useRef();

    function sibmitForm(e)
    {
        e.preventDefault();
        props.New_user({name : name.current.value, email : email.current.value, firstname : firstName.current.value, password : password.current.value});
    }
    return (
    <div className="login-box">
        <h2>Register</h2>
        <form onSubmit={sibmitForm}>
            <div className="user-box">
                <input type="text" required name="name" id="name" ref={name}/>
                <label className="text" htmlFor="name">*Name</label>
            </div>
            <div className="user-box">
                <input type="email" required name="email" id="email" ref={email}/>
                <label className="text" htmlFor="email">*Email</label>
            </div>
            <div className="user-box">
                <input type="text" required name="first_name" id="first_name" ref={firstName}/>
                <label className="text" htmlFor="first_name">*First Name</label>
            </div>
            <div className="user-box">
                <input type="text" required name="password" id="password" ref={password}/>
                <label className="text" htmlFor="password">*Password</label>
            </div>
            <div className="submit-box">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    );
}

export default FormChar;