import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
const RegUser = () => {
    let history = useHistory();
    const [data, regUser] = useState({
        email: "",
        password: ""
        // confirm_password:"",
        // registrationErrors:""
    });
    const { email, password } = data;
    const onInputChange = e => {
        regUser({ ...data, [e.target.name]: e.target.value });
    };
    const onSubmit = async e => {
        e.preventDefault();
        // if(password==confirm_password)
        console.log(data);
        await axios.post("https://reqres.in/api/register", data);
        // else
        // alert("Password fields don't match");
        history.push("/");
    };


    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Registration Form</h2>
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
                    <button className="btn btn-primary btn-block" >Register</button>
                </form>
            </div>
        </div>
    );

};
export default RegUser;