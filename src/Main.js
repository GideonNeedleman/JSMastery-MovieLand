import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Detail from "./Detail";
import Favorites from "./Favorites";
import { MovieProvider } from "./MovieContext";

function Main() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="detail/:imdbid" element={<Detail />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default Main;
