import { MovieListPage } from "./pages/MovieListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
