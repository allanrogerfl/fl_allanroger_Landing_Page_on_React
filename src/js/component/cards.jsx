import React from "react";

//create your first component
export default function Cards(props) {
  return (

    <div className="card text-center m-4 p-0" style={{ width: '18rem' }}>
      {/* ---IMG--- */}
      <img src="https://picsum.photos/seed/picsum/500/325" className="card-img-top" alt="..." />
      <div className="card-body">
        {/* ---Title--- */}
        <h5 className="card-title">{props.titulo}</h5>
        {/* ---Text--- */}
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, architecto
          eius tempora numquam voluptatibus accusamus? Dignissimos
          magnam quae, velit quasi officia dolorum praesentium ipsa, deserunt sapiente beatae corrupti quod ex!</p>
      </div>
      {/* ---Button--- */}
      <div className="card-footer p-3">
        <a href="#" className="btn btn-primary ">Find Out More!</a>
      </div>
    </div>

  );
};

