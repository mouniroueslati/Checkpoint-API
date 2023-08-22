import React, { useState, useEffect } from 'react';
import axios from "axios";


const UserList = () => {
  const [listofuser, setlistofuser] = useState([]);

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {console.log(res.data); setlistofuser(res.data)})
    .catch((e) => console.log(e));
  }, []);
  
  
    return (

    <div>
        {listofuser.map((el, index) => (
            <div key={index}>
                <p>name: {el.name}</p>
                <p>phone: {el.phone}</p>
                <p>username: {el.username}</p>
                <p>company: {el.company.name}</p>
                <p>address: {el.address.city}</p>

            </div>)
        )


        }


    </div>
  )
}

export default UserList