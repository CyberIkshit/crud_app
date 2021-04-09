import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [data, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",  
    // phone: "",
  });

  const { first_name, last_name, email} = data;
  const onInputChange = e => {
    setUser({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put('https://reqres.in/api/users/${id}', data);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://reqres.in/api/users/${id}`);
    setUser(result.data.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="first_name"
              value={first_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="last_name"
              value={last_name}
              onChange={e => onInputChange(e)}
            />
          </div>
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
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div> */}
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="avatar"
              value={avatar}
              onChange={e => onInputChange(e)}
            />
          </div> */}
          <button className="btn btn-primary btn-block" >Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
