import React from 'react';
import { useRouteError } from "react-router-dom";

function Errorpage() {
  const error = useRouteError();
  console.log(error);


  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured</p>
    </div>
  )
};

export default Errorpage

