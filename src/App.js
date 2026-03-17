import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showLowAttendance, setShowLowAttendance] = useState(false);
  const [sortOrder, setSortOrder] = useState("NONE");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((student) => ({
          ...student,
          attendance: Math.floor(Math.random() * 101),
        }));
        setStudents(updated);
      });
  }, []);

  const filteredStudents = students
    .filter((student) => {
      if (filter === "PRESENT") return student.attendance >= 75;
      if (filter === "ABSENT") return student.attendance < 75;
      return true;
    })
    .filter((student) => {
      if (showLowAttendance) return student.attendance < 75;
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === "ASC") return a.attendance - b.attendance;
      if (sortOrder === "DESC") return b.attendance - a.attendance;
      return 0;
    });

  return (
    <div className="container">
      <h1>📊 Student Attendance Dashboard</h1>

      {/* Filter Buttons */}
      <div className="controls">
        <button onClick={() => setFilter("ALL")}>All</button>
        <button onClick={() => setFilter("PRESENT")}>Present</button>
        <button onClick={() => setFilter("ABSENT")}>Absent</button>

        <button onClick={() => setSortOrder("ASC")}>Sort ↑</button>
        <button onClick={() => setSortOrder("DESC")}>Sort ↓</button>

        <label>
          <input
            type="checkbox"
            checked={showLowAttendance}
            onChange={() => setShowLowAttendance(!showLowAttendance)}
          />
          Show &lt; 75%
        </label>
      </div>


      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance %</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => {
            const isLow = student.attendance < 75;
            const isSelected = selectedStudent === student.id;

            return (
              <tr
                key={student.id}
                onClick={() => setSelectedStudent(student.id)}
                className={isSelected ? "selected" : ""}
              >
                <td>{student.name}</td>
                <td>{student.attendance}%</td>
                <td>
                  <span className={isLow ? "badge red" : "badge green"}>
                    {isLow ? "Low" : "Good"}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;