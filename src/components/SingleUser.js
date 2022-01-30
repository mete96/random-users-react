import React from "react";

const SingleUser = ({ users, favori, setFavori, clicko }) => {
  return (
    <>
      <div class="grid-item">
        <p className="up2">{users.location.country}</p>
        <img src={users.picture.large} alt="github" onClick={clicko} />
        <h4>
          <p className="up">
            {users.name.first} {users.name.last}
          </p>
          <p className="up1">Age: {users.dob.age}</p>
        </h4>
      </div>
    </>
  );
};

export default SingleUser;
