import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Detail from "./Detail";
import FavoritesList from "./FavoritesList";
import { MovieProvider } from "./MovieContext";

function Main() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="detail/:imdbid" element={<Detail />} />
          <Route path="favorites" element={<FavoritesList />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default Main;
