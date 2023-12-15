import React from "react";
import Cards from "./cards";

//include images into your bundle
// import Cards from "./cards.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <div className="mx-auto" style={{width: "70%"}}>
        <div className="card bg-light">
          <div className="card-body">
            <h1 className="card-title">A Warm Welcome!</h1>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Atque eos beatae repellendus itaque libero commodi
              eveniet labore voluptatum repudiandae. Aliquam quidem unde provident incidunt fugit odio
              numquam at placeat aliquid?</p>
            <a href="#" className="btn btn-primary">Call to action!</a>
          </div>
        </div>
        <Cards/>
      </div>
    </div>

  );
};

export default Home;
