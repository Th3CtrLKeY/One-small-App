import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserForm from "./UserForm";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <UserForm />
      </div>
    </>
  );
}
export default App;
