import axios from "axios";
import React from "react";

import Header from "../components/Header";
import Home from "../components/Home";
import Shop from "../components/Shop";

const index = ({data}) => {
  return (
    <>
      <Header />
      <Home />
      <Shop flowerList={data} />
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      data,
    },
  };
}

export default index;
