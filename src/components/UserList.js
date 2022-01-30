import React, { useState, useEffect } from "react";
import SingleUser from "./SingleUser";

const UserList = () => {
  const [userz, setUser] = useState([]);
  const [favori, setFavori] = useState([]);
  const getUsers = async () => {
    const url = "https://randomuser.me/api/?results=405";
    let yey = await fetch(url);
    let userler = await yey.json();

    setUser(userler.results);
    console.log(userler);
  };

  const clicko = (users) => {
    let result = window.confirm("STALKING IS NOT COOL. ARE YOU SURE?");

    if (result == true) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else {
      alert("GOOD FOR YOU!");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {favori}
      <div className="grid-container">
        {userz.map((users) => (
          <SingleUser
            users={users}
            favori={favori}
            setFavori={setFavori}
            clicko={clicko}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
