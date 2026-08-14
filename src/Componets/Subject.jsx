import React from "react";

function Subject(props) {
  return (
    <div>
      <h2>Subject Information</h2>

      <p><strong>Subject Name:</strong> {props.name}</p>
      <p><strong>Subject Code:</strong> {props.code}</p>
      <p><strong>Semester:</strong> {props.semester}</p>
      <p><strong>Faculty:</strong> {props.faculty}</p>
      <p><strong>Credits:</strong> {props.credits}</p>
    </div>
  );
}

export default Subject;