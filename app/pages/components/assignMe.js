import React from 'react';


const AssignMe = ({onAssign}) => {
  return (
    <button className="btn" onClick={() => onAssign()}>Teach This</button>
  );
};

export default AssignMe;
