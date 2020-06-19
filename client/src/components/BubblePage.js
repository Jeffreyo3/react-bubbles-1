import React, { useState, useEffect } from "react";
// import axios from "axios";
import axiosWithAuth from '../utilities/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getColors = () => {
    axiosWithAuth()
      .get('/colors')
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => console.log("getColors error: ", err.response));
  };

  React.useEffect(() => {
    getColors();
  }, []);


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
