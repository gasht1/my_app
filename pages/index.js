import axios from "axios";
import React, { useEffect } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";

import Header from "../components/Header";
import Home from "../components/Home";
import Shop from "../components/Shop";

const index = ({data}) => {
  const[close,setClose] = React.useState(true);
  const[admin,setAdmin] = React.useState(true);
  
  
  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin) {
      setAdmin(admin);
    } else {
      setAdmin(null);
    }
  }, []);

  return (
    <>
      <Header />
      <Home />
      {admin && <AddButton setClose={setClose}/>}
      <Shop flowerList={data} />
      {!close && <Add setClose={setClose}/>}
    </>
  );
};

export async function getServerSideProps(ctx) {

  const { data } = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      data,
    },
  };
}

export default index;
