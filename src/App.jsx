import LoginBox from "./comps/login";
import FormChar from "./comps/form";
import ErrorMsg from "./comps/ErrorMsg";
import {useState} from "react";
const DummyData = [
    {
        type : "text",
        name : "name",
        title : "*Name",
        defVal: "",
        Data : {}
    },
    {
    type : "text",
    name : "first_name",
    title : "*First Name",
    defVal: "",
    Data : {}
    },
    {
        type : "email",
        name : "name",
        title : "*Email",
        defVal: "",
        Data : {}
    },
    {
        type : "password",
        name : "password",
        title : "*Password",
        defVal: "",
        Data : {}
    }
]

function App () {
   // console.log = function () {};
    const [pass_passed, setPassPassed] = useState(false);
    const [Error, setError] = useState(false);
    const auth = {token : ""};
    const Api_url = "http://localhost:4000/"
    function VerifyPass(data)
    {
        console.log(data);
        fetch(Api_url + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 200)
            {
                setPassPassed(true);
                auth.token = data.token;
            }
            else
            {
                setPassPassed(false);
                setError("Wrong login");
            }
        })
        .catch(err => {
            setError("Server error");
            console.log(err);
        });
    }
    function Register(data)
    {
        const new_data = {
            name : data[0],
            email : data[1],
            first_name : data[2],
            password : data[3]
        }
        console.log(new_data);
        fetch(Api_url + "register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(new_data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success")
            {
                setPassPassed("User created");
            }
            else
            {
                setPassPassed(false);
                setError("User already exists");
            }
        })
        .catch(err => {
            setError("Server error");
            console.log(err);
        });
    }
    return (
        <div className="app">
            {pass_passed === false && Error === false ? <LoginBox onBtnPressed={VerifyPass} Register={setPassPassed}/> : null}
            {pass_passed === "Register"  && Error === false ?  <FormChar Func={Register}
            Title="Register" Fields={DummyData}/>: null}
            {Error === "Wrong login" ? <ErrorMsg msg="Wrong Password "/> : null}
            {Error === "Server error"? <ErrorMsg msg = "Something went wrong"/> : null}
            {Error === "User already exists" ? <ErrorMsg msg = "User already exists"/> : null}
            {pass_passed === "User created"? <ErrorMsg msg = "Success Info sent"/> : null}
        </div>
    );
}

export default App;