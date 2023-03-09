import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DefaultFileUploaderExample } from "./components/FileUpload";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import FileView from "./components/FileView";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <DefaultFileUploaderExample/> */}

      <Routes>
        <Route path="/" element={<DefaultFileUploaderExample />} />
        <Route path="/view" element={<FileView />} />
      </Routes>
    </div>
  );
}

export default App;
