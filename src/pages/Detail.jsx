import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <p>Detail Page</p>
      <p>params id: {id}</p>
      <pre> {JSON.stringify(user, null, 2)} </pre>
      <hr />
      <nav>
        <Link to={"post"}>Post</Link> | <Link to={"product"}>Product</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Detail;
