import React, { useEffect, useState } from "react";
import axios from "axios";

const TeaCollection = () => {
  // const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      // const res = await axios.get(
      //   "https://tea-collection.herokuapp.com/types_of_tea/"
      // );
      // const res = fetch("https://my-burger-api.herokuapp.com/burgers/0")
      //   .then((response) => response.json())
      //   .then((data) => console.log(data));
      const res = await axios.get(
        "https://tea-collection.herokuapp.com/types_of_tea/0"
      );
      // setData(res);
      console.log(res);
    };
    fetchPosts();
  }, []);

  return (
    <section className="container">
      <h1>Tea Collection</h1>
      {/* {data.map((data) => {
        <div>{data.id}</div>;
      })} */}
    </section>
  );
};

export default TeaCollection;
