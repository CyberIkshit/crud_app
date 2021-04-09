import React, { useState } from "react";
import {useHistory } from "react-router";
import axios from "axios";
function LogUser({setToken}){
    
    // const history = useHistory();
    const [data, logUser] = useState({
        email: "",
        password: ""
        // confirm_password:"",
        // registrationErrors:""
    });
    const { email, password } = data;
    const onInputChange = e => {
        logUser({ ...data, [e.target.name]: e.target.value });
    };
    if(setToken==null)
        return <div>
            <h1>Already Logged In</h1>
            <a href="/">Return to the Home page</a>
        </div>
    const onSubmit = async e => {
        e.preventDefault();
        // if(password==confirm_password)
        try{
        const token=await axios.post("https://reqres.in/api/login", data);
        setToken(token.data.token);
        // else
        // alert("Password fields don't match");
        console.log(setToken);
        // if(token.status==200)
        //     history.push("/");
        }
        catch(e)
        {
            alert(e.message);
        }
    };


    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Please Login</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    {/* <div className="form-group">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter Confirm Password"
            name="confirm_password"
            value={confirm_password}
            onChange={e => onInputChange(e)}
          />
        </div> */}
                    <button className="btn btn-primary btn-block" >Login</button>

                    
                </form>
                <a href="/users/register">New User?Register Here</a>
            </div>
        </div>
    );

};
export default LogUser;