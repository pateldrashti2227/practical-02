import React from "react";
import Subject from "./Componets/Subject";

function App() {
  return (
    <div>
      <h1>Subject Details</h1>

      <Subject
        name="Web Development"
        code="BCA101"
        semester="Semester 1"
        faculty="Dr. Mehta"
        credits="4"
      />

      <Subject
        name="Database Management System"
        code="BCA102"
        semester="Semester 1"
        faculty="Prof. Shah"
        credits="4"
      />

      <Subject
        name="Computer Networks"
        code="BCA103"
        semester="Semester 1"
        faculty="Prof. Patel"
        credits="3"
      />
    </div>
  );
}

export default App;