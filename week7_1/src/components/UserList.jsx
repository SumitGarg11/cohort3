import React from "react";
import useFetchData from "./useFetchData";

function UserList() {
  const { post } = useFetchData("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <ul>
        {post?.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
