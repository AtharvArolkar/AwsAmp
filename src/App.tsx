import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DefaultFileUploaderExample } from "./components/files-upload/files-upload";
import Navbar from "./utils/Navbar";
import { Route, Routes } from "react-router-dom";
import FileView from "./components/files-view/files-view";
import ListSites from "./components/list-sites/list-sites";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form/form";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<DefaultFileUploaderExample />} />
        <Route path="/view" element={<FileView />} />
        <Route path="/list" element={<ListSites />} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
