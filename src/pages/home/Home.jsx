import React from "react";
import Navbar from "../../composant/header/navBar/Navbar";
import Review from "../review/Review";
import bgImage from "../../assets/images/pexels-francesco-ungaro-2835436 1.png";
import Card from "../section2/card/Card";

function Home() {
  const bgHome = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
  };
  return (
    <div style={bgHome} >
      <Navbar />
      <Review />
      {/* <Card/> */}
    </div>
  );
}

export default Home;
