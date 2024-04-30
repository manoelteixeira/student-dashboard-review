// src/App.jsx

import Navbar from "./components/Navbar/Navbar";
import CohortList from "./components/CohortList/CohortList";
import StudentList from "./components/StudentList/StudentList";

import "./app.scss";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <CohortList />
      <StudentList />
    </div>
  );
}
