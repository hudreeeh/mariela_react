import React from "react";
import Header from "./Components/Header/Header";
import Screen2 from "./Components/Screen2/Screen2";
import Screen3 from "./Components/Screen3/Screen3";
import Screen4 from "./Components/Screen4/Screen4";
import Screen5 from "./Components/Screen5/Screen5";
import Screen6 from "./Components/Screen6/Screen6";
import Screen7 from "./Components/Screen7/Screen7";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Screen2/>
      <Screen3/>
      <Screen4/>
      <Screen5/>
      <Screen6/>
      <Screen7/>
      <Footer/>
    </div>
  );
}

export default App;
