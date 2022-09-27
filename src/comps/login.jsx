import {useRef} from 'react';

function LoginBox(props)
{
    const pass_passed = useRef();
    const user_passed = useRef();

    function sibmitForm(e)
    {
        e.preventDefault();
        props.onBtnPressed({password : pass_passed.current.value, email : user_passed.current.value });
    }
    function register(e)
    {
        e.preventDefault();
        props.Register("Register")
    }

    return (
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={sibmitForm}>
                <div className="user-box">
                    <input type="text" required name="username" id="username" ref={user_passed}/>
                    <label className="text" htmlFor="username">Email</label>
                </div>
                <div className="user-box">
                    <input type="text" required name="pass" id="pass" ref={pass_passed}/>
                    <label htmlFor="pass" className="text">Password</label>
                </div>
                <div className="submit-box">
                    <button type="submit">Check</button>
                </div>
                <div className="submit-box">
                    <button type="button" onClick={register}>Register</button>
                </div>
            </form>
        </div>
    );
}

export default LoginBox;