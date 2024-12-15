import React from 'react'
import {useRouteError} from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="font-serif font-bold m-4">
      <div>Oops!!! Something went Wrong</div>
      <h3>
        {err.status} {err.statusText}
      </h3>
    </div>
  );
}

export default Error