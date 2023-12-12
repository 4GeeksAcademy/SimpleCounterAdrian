import React from "react";
import Simplecounter from "./simplecounter";
import RelojIcon from "./reloj";
import Portada from "./titular";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className="">
		<Portada/>
      <div className="fondo">
        <RelojIcon />
        <Simplecounter />
        <Simplecounter />
        <Simplecounter />
        <Simplecounter />
        <Simplecounter />
        <Simplecounter />
      </div>

    </div>
  );
};

export default Home;
