import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { MovieDetailsPage } from "../pages/movieDetailsPage/MovieDetailsPage";
import { TVDetailsPage } from "../pages/tvDetailsPage/TVDetailsPage";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/details/movie/:id" element={<MovieDetailsPage />} />
                <Route path="/details/tv/:id" element={<TVDetailsPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

