import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import AddFaq from "./components/addFaq/AddFaq";
import SearchFaq from "./components/searchFaq/SearchFaq";
import Nav from "./components/nav/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/add" element={<AddFaq />} />
      <Route path="/search" element={<SearchFaq />} />
    </Routes>
  </BrowserRouter>
);
