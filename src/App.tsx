import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DefaultFileUploaderExample } from "./components/files-upload/files-upload";
import Navbar from "./utils/Navbar";
import { Route, Routes } from "react-router-dom";
import FileView from "./components/files-view/files-view";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<DefaultFileUploaderExample />} />
        <Route path="/view" element={<FileView />} />
      </Routes>
    </div>
  );
}

export default App;
