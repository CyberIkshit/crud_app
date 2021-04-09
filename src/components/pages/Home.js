import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    loadUsers();
    // console.log(data);
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("https://reqres.in/api/users");
    // console.log(result.data.data[0]);
    // for (var i=0;result.data.data[i]!=null; i++)
    setData(result.data.data);
    // console.log(data[0]);
  };

  const deleteUser = async id => {
    await axios.delete(`https://reqres.in/api/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {data.map((user, index) => (
              <tr>
                <th scope="row" className="align-middle">{user.id}</th>
                <td><img src={user.avatar}></img></td>
                <td className="align-middle">{user.first_name + " " + user.last_name}</td>
                <td className="align-middle">{user.email}</td>
                <td className="align-middle">
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
      </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
      </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;


