import React from "react";

const Alert = (props) => {
    const {color,border} = props
  return (
    <>
      <div className={`p-3 ${color} m-5 border ${border}`}>
       {props.children}
      </div>
    </>
  );
};

export default Alert;
