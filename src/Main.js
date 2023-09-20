import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Detail from "./Detail";
import Heart from "./Heart";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path=":imdbid" element={<Detail />} />
        <Route path="heart" element={<Heart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
